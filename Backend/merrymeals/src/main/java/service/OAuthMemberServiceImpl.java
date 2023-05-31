package com.mow.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.mow.dao.AuthProvider;
import com.mow.dao.Member;
import com.mow.exception.OAuthAuthenticationException;
import com.mow.oauth2users.OAuth2Member;
import com.mow.oauth2users.OAuth2MemberFactory;
import com.mow.repository.MemberRepository;

@Service
public class OAuthMemberServiceImpl extends DefaultOAuth2UserService{
	
	@Autowired
    private MemberRepository memberRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest oAuth2UserRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(oAuth2UserRequest);

        try {
            return processOAuth2User(oAuth2UserRequest, oAuth2User);
        } catch (AuthenticationException ex) {
            throw ex;
        } catch (Exception ex) {
            // Throwing an instance of AuthenticationException will trigger the OAuth2AuthenticationFailureHandler
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
        }
    }

    private OAuth2User processOAuth2User(OAuth2UserRequest oAuth2UserRequest, OAuth2User oAuth2User) throws OAuthAuthenticationException {
        OAuth2Member oAuth2Users = OAuth2MemberFactory.getInstance(oAuth2UserRequest.getClientRegistration().getRegistrationId(), oAuth2User.getAttributes());
        if(org.springframework.util.StringUtils.isEmpty(oAuth2Users.getEmail())) {
            throw new OAuthAuthenticationException("Email not found from OAuth2 provider");
        }

        Optional<Member> userOptional = memberRepository.findByEmail(oAuth2Users.getEmail());
        Member member;
        if(userOptional.isPresent()) {
            member = userOptional.get();
            if(!member.getProvider().equals(AuthProvider.valueOf(oAuth2UserRequest.getClientRegistration().getRegistrationId()))) {
                throw new OAuthAuthenticationException("Looks like you're signed up with " +
                        member.getProvider() + " account. Please use your " + member.getProvider() +
                        " account to login.");
            }
            member = updateExistingUser(member, oAuth2Users);
        } else {
            member = registerNewUser(oAuth2UserRequest, oAuth2Users);
        }

        return MemberPrincipal.createUser(member, oAuth2User.getAttributes());
    }

    private Member registerNewUser(OAuth2UserRequest oAuth2UserRequest, OAuth2Member oAuth2Users) {
        Member member = new Member();

        member.setProvider(AuthProvider.valueOf(oAuth2UserRequest.getClientRegistration().getRegistrationId()));
        member.setProviderId(oAuth2Users.getId());
        member.setUserName(oAuth2Users.getName());
        member.setEmail(oAuth2Users.getEmail());
        member.setImageUrl(oAuth2Users.getImageUrl());
        return memberRepository.save(member);
    }

    private Member updateExistingUser(Member existingUser, OAuth2Member oAuth2UserInfo) {
        existingUser.setUserName(oAuth2UserInfo.getName());
        existingUser.setImageUrl(oAuth2UserInfo.getImageUrl());
        return memberRepository.save(existingUser);
    }

}