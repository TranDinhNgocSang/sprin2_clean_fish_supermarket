package com.example.clean_fish_supermarket.service;

import com.example.clean_fish_supermarket.model.Role;

import java.util.Optional;

public interface IRoleService {
    Optional<Role> findAllByNameRole (String nameRole);
}
