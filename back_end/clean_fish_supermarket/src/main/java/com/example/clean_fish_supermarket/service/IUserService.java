package com.example.clean_fish_supermarket.service;

import com.example.clean_fish_supermarket.model.User;

import java.util.Optional;

public interface IUserService {
    Optional<User> findUerByEmail(String email);
    boolean checkUserExistsByEmail(String email);

    void addUser (User user);

}
