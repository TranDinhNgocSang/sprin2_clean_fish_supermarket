package com.example.clean_fish_supermarket.repository;

import com.example.clean_fish_supermarket.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<User,Integer> {
    Optional<User> findAllByEmailAndIsDeleteUserIsFalse(String email);
    boolean existsByEmail(String email);

}
