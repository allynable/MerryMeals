package com.educlaas.dea.merrymeals.payload;

import com.educlaas.dea.merrymeals.dao.Admin;
import com.educlaas.dea.merrymeals.dao.Users;

public class UserAdminDto {
   private Users user;
   private Admin admin;

    public Users getUser() {
        return this.user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Admin getAdmin() {
        return this.admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }
   
}
