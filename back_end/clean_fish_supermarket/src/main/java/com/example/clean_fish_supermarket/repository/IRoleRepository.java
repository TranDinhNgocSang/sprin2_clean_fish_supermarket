package com.example.clean_fish_supermarket.repository;

import com.example.clean_fish_supermarket.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface IRoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findAllByNameRole (String nameRole);
}
