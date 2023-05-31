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
import com.mow.dao.Volunteer;
import com.mow.exception.OAuthAuthenticationException;
import com.mow.oauth2users.OAuth2Member;
import com.mow.oauth2users.OAuth2MemberFactory;
import com.mow.repository.VolunteerRepository;

@Service
public class OAuthVolunteerServiceImpl extends DefaultOAuth2UserService{
	
	@Autowired
    private VolunteerRepository volunteerRepository;

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

        Optional<Volunteer> userOptional = volunteerRepository.findByEmail(oAuth2Users.getEmail());
        Volunteer volunteer;
        if(userOptional.isPresent()) {
            volunteer = userOptional.get();
            if(!volunteer.getProvider().equals(AuthProvider.valueOf(oAuth2UserRequest.getClientRegistration().getRegistrationId()))) {
                throw new OAuthAuthenticationException("Looks like you're signed up with " +
                        volunteer.getProvider() + " account. Please use your " + volunteer.getProvider() +
                        " account to login.");
            }
            volunteer = updateExistingUser(volunteer, oAuth2Users);
        } else {
            volunteer = registerNewUser(oAuth2UserRequest, oAuth2Users);
        }

        return VolunteerPrincipal.createUser(volunteer, oAuth2User.getAttributes());
    }

    private Volunteer registerNewUser(OAuth2UserRequest oAuth2UserRequest, OAuth2Member oAuth2Users) {
    	Volunteer volunteer = new Volunteer();

        volunteer.setProvider(AuthProvider.valueOf(oAuth2UserRequest.getClientRegistration().getRegistrationId()));
        volunteer.setProviderId(oAuth2Users.getId());
        volunteer.setUserName(oAuth2Users.getName());
        volunteer.setEmail(oAuth2Users.getEmail());
        volunteer.setImageUrl(oAuth2Users.getImageUrl());
        return volunteerRepository.save(volunteer);
    }

    private Volunteer updateExistingUser(Volunteer existingUser, OAuth2Member oAuth2UserInfo) {
        existingUser.setUserName(oAuth2UserInfo.getName());
        existingUser.setImageUrl(oAuth2UserInfo.getImageUrl());
        return volunteerRepository.save(existingUser);
    }

}
