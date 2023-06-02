package com.educlaas.dea.merrymeals.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.dea.merrymeals.dao.Member;
import com.educlaas.dea.merrymeals.dao.Users;
import com.educlaas.dea.merrymeals.repository.MemberRepository;
import com.educlaas.dea.merrymeals.repository.UsersRepository;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/member")
public class MemberController {
    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private UsersRepository usersRepository;

    @GetMapping("/all")
    public Object getMembers() {
        return memberRepository.findAll();
    }

    @RequestMapping("/{memberId}")
    public Optional<Member> getMemberId(@PathVariable Long memberId) {
        return memberRepository.findById(memberId);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteStore(@PathVariable Long userId) {
        try {
            Optional<Users> users = usersRepository.findById(userId);

            if (users.isPresent()) {
                Users user = users.get();

                Member member = memberRepository.findByUser(user);

                member.setUser(null);
                memberRepository.delete(member);
                usersRepository.delete(user);
                return ResponseEntity.ok("Member deleted successfully");
            } else {  
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error deleting member");
        }
    }
}
