package com.example.clean_fish_supermarket.dto.reponse;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class JwtReponse {
    String token;
    private String type = "Bearer";
    private String userName;
    private Collection<? extends GrantedAuthority> role;

    public JwtReponse() {
    }

    public JwtReponse(String token) {
        this.token = token;
    }

    public JwtReponse(String token, String type, String userName, Collection<? extends GrantedAuthority> role) {
        this.token = token;
        this.type = type;
        this.userName = userName;
        this.role = role;
    }


    public JwtReponse(String token, String nameUser, Collection<? extends GrantedAuthority> authorities) {
        this.token = token;
        this.userName = nameUser;
        this.role = authorities;
    }

    public String getToken() {
        return token;
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

    public Collection<? extends GrantedAuthority> getRole() {
        return role;
    }

    public void setRole(Collection<? extends GrantedAuthority> role) {
        this.role = role;
    }
}
