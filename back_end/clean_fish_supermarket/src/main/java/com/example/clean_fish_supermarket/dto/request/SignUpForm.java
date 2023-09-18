package com.example.clean_fish_supermarket.dto.request;

import com.example.clean_fish_supermarket.model.Role;

import javax.validation.constraints.NotBlank;


public class SignUpForm {
    @NotBlank(message = "Tên người dùng không được để trống")
    private String nameUser;
    @NotBlank(message = "Ngày sinh không được để trống")
    private String dayOfBirth;
//    @NotBlank(message = "Giới tính không được để trống")
    private boolean gender;

    @NotBlank(message = "Email không được để trống")
    private String email;
    @NotBlank(message = "Mật khẩu không được để trống")
    private String password;
    @NotBlank(message = "Số điện thoại được để trống")
    private String phone;
    private Role role;

    public SignUpForm() {
    }

    public SignUpForm(String nameUser, String dayOfBirth, boolean gender, String email,
                      String password, String phone, Role role) {
        this.nameUser = nameUser;
        this.dayOfBirth = dayOfBirth;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.role = role;
    }

    public String getNameUser() {
        return nameUser;
    }

    public void setNameUser(String nameUser) {
        this.nameUser = nameUser;
    }

    public String getDayOfBirth() {
        return dayOfBirth;
    }

    public void setDayOfBirth(String dayOfBirth) {
        this.dayOfBirth = dayOfBirth;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
