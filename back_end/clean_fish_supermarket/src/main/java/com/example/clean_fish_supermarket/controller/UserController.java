package com.example.clean_fish_supermarket.controller;

import com.example.clean_fish_supermarket.model.User;
import com.example.clean_fish_supermarket.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {
    @Autowired
    private IUserService userService;

    @PreAuthorize("hasRole('ROLE_USER')  or hasRole('ROLE_ADMIN')")
    @GetMapping("")
    public ResponseEntity<Optional<User>> getUser (){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        return new ResponseEntity<>(userService.findUerByEmail(email),HttpStatus.OK);
    }
}
