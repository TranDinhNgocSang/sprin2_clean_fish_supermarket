package com.example.clean_fish_supermarket.dto.reponse;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class JwtReponse {
    String token;
    private String type = "Bearer";
    private String userName;
    private String role;

    public JwtReponse() {
    }

    public JwtReponse(String token, String type, String userName, String role) {
        this.token = token;
        this.type = type;
        this.userName = userName;
        this.role = role;
    }

    public String getToken() {
        return token;
    }

    public JwtReponse(String token, String userName, String role) {
        this.token = token;
        this.userName = userName;
        this.role = role;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
