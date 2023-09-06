package com.example.clean_fish_supermarket.security;

import com.example.clean_fish_supermarket.model.User;
import com.example.clean_fish_supermarket.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailService implements UserDetailsService {
    @Autowired
    IUserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findAllByEmailAndIsDeleteUserIsFalse(username).orElseThrow(()-> new UsernameNotFoundException("User not found"));
        return UserPrinciple.build(user);
    }
}
