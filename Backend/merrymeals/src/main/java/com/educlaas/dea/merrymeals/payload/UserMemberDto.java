package com.educlaas.dea.merrymeals.payload;

import com.educlaas.dea.merrymeals.dao.Member;
import com.educlaas.dea.merrymeals.dao.Users;

public class UserMemberDto {
    private Users user;
    private Member member;

    public Users getUser() {
        return this.user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Member getMember() {
        return this.member;
    }

    public void setMember(Member member) {
        this.member = member;
    }

}
