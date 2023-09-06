package com.example.clean_fish_supermarket.controller;

import com.example.clean_fish_supermarket.model.User;
import com.example.clean_fish_supermarket.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {
    @Autowired
    private IUserService userService;
    @GetMapping("/{email}")
    public ResponseEntity<Optional<User>> getUser (@PathVariable String email){
        return new ResponseEntity<>(userService.findUerByEmail(email),HttpStatus.OK);
    }
}
