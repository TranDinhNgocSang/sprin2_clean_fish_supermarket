package com.example.clean_fish_supermarket.service.impl;

import com.example.clean_fish_supermarket.model.Role;
import com.example.clean_fish_supermarket.repository.IRoleRepository;
import com.example.clean_fish_supermarket.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService implements IRoleService {
    @Autowired
    IRoleRepository roleRepository;
    @Override
    public Optional<Role> findAllByNameRole(String nameRole) {
        return roleRepository.findAllByNameRole(nameRole);
    }
}
