package com.example.clean_fish_supermarket.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUser;
    @Column(columnDefinition = "VARCHAR(20)")
    private String nameUser;
    @Column(columnDefinition = "DATE")
    private String dayOfBirth;
    private boolean gender;
    private boolean isDeleteUser;
    @Column(columnDefinition = "VARCHAR(255)",unique = true)
    private String email;
    @JsonIgnore
    @Column(columnDefinition = "LONGTEXT")
    private String password;
    @Column(columnDefinition = "VARCHAR(10)")
    private String phone;
    @ManyToOne
    @JoinColumn(name = "id_role",columnDefinition = "int default 2")
    private Role role;

    public User() {
    }

    public User(String nameUser, String dayOfBirth, boolean gender, String email, String password,
                String phone, Role role) {
        this.nameUser = nameUser;
        this.dayOfBirth = dayOfBirth;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.role = role;
    }

    public User(int idUser, String nameUser, String dayOfBirth, boolean gender, boolean isDeleteUser, String email,
                String password, String phone, Role role) {
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



    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
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

    public boolean isDeleteUser() {
        return isDeleteUser;
    }

    public void setDeleteUser(boolean deleteUser) {
        isDeleteUser = deleteUser;
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
