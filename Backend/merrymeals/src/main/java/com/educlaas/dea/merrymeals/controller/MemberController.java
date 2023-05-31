package com.educlaas.dea.merrymeals.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.dea.merrymeals.dao.Member;
import com.educlaas.dea.merrymeals.exception.ResourceNotFoundException;
import com.educlaas.dea.merrymeals.repository.MemberRepository;
import com.educlaas.dea.merrymeals.service.MemberPrincipal;

@RestController
@RequestMapping(value="/mow")
public class MemberController {
	@Autowired
    private MemberRepository memberRepository;

	//Profile API <<Get Current User Profile>>
    @GetMapping("/member/me")
    @PreAuthorize("hasRole('MEMBER')")
    public Member getMember(@CurrentUser MemberPrincipal memberPrincipal) {
    	return memberRepository.findById((memberPrincipal.getMemberId())) 
                .orElseThrow(() -> new ResourceNotFoundException("Member", "memberId", memberPrincipal.getMemberId()));
    }
}
