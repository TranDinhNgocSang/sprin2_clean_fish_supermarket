package com.example.clean_fish_supermarket.security;


import com.example.clean_fish_supermarket.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


public class UserPrinciple implements UserDetails {
    private int idUser;
    private String nameUser;
    private String dayOfBirth;
    private boolean gender;
    private boolean isDeleteUser;
    private String email;
    @JsonIgnore
    private String password;
    private String phone;
    private Collection<? extends GrantedAuthority> role;
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return role;
    }

    public UserPrinciple() {
    }

    public UserPrinciple(int idUser, String nameUser, String dayOfBirth, boolean gender, boolean isDeleteUser,
                         String email, String password, String phone, Collection<? extends GrantedAuthority> role) {
        this.idUser = idUser;
        this.nameUser = nameUser;
        this.dayOfBirth = dayOfBirth;
        this.gender = gender;
        this.isDeleteUser = isDeleteUser;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.role = role;
    }

    public static UserPrinciple build (User user){
        // lấy quyền từ user
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(user.getRole().getNameRole()));
        // gán user vào UserPrinciple của hệ thống
        return new UserPrinciple(
                user.getIdUser(),
                user.getNameUser(),
                user.getDayOfBirth(),
                user.isGender(),
                user.isDeleteUser(),
                user.getEmail(),
                user.getPassword(),
                user.getPhone(),
                authorities
        );
    }

    public String getNameUser() {
        return nameUser;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
