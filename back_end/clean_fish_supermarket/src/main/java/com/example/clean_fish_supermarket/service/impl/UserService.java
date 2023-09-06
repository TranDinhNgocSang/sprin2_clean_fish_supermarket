package com.example.clean_fish_supermarket.service.impl;

import com.example.clean_fish_supermarket.model.User;
import com.example.clean_fish_supermarket.repository.IUserRepository;
import com.example.clean_fish_supermarket.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements IUserService {
    @Autowired
    private IUserRepository userRepository;
    @Override
    public Optional<User> findUerByEmail(String email) {
        return userRepository.findAllByEmailAndIsDeleteUserIsFalse(email);
    }

    @Override
    public boolean checkUserExistsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public void addUser(User user) {
        userRepository.save(user);
    }
}
