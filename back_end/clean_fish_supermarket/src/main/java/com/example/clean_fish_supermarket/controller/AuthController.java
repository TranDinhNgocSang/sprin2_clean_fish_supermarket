package com.example.clean_fish_supermarket.controller;

import com.example.clean_fish_supermarket.dto.reponse.JwtReponse;
import com.example.clean_fish_supermarket.dto.reponse.ResponseMessage;
import com.example.clean_fish_supermarket.dto.request.SignInForm;
import com.example.clean_fish_supermarket.dto.request.SignUpForm;
import com.example.clean_fish_supermarket.model.User;
import com.example.clean_fish_supermarket.security.UserPrinciple;
import com.example.clean_fish_supermarket.security.jwt.JwtProvider;
import com.example.clean_fish_supermarket.service.IRoleService;
import com.example.clean_fish_supermarket.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RequestMapping("/auth")
@RestController
@CrossOrigin("*")
public class AuthController {
    @Autowired
    private IUserService userService;
    @Autowired
    private IRoleService roleService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/signup")
    public ResponseEntity<?> register (@Valid @RequestBody SignUpForm signUpForm){
        if (userService.checkUserExistsByEmail(signUpForm.getEmail())){
            return new ResponseEntity<>(new ResponseMessage("Email đã tồn tại"),HttpStatus.BAD_REQUEST);
        }
        if (signUpForm.getRole()==null){
            signUpForm.setRole(roleService.findAllByNameRole("USER").get());
        }
        User user = new User(signUpForm.getNameUser(), signUpForm.getDayOfBirth(),signUpForm.isGender(),
                signUpForm.getEmail(),passwordEncoder.encode(signUpForm.getPassword()),signUpForm.getPhone(),signUpForm.getRole());
        userService.addUser(user);
        return new ResponseEntity<>(new ResponseMessage("Đăng ký thành công"),HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }

    @PostMapping("/signin")
    private ResponseEntity<?> login (@Valid @RequestBody SignInForm signInForm){
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(signInForm.getEmail(), signInForm.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            // tạo token trả về client
            String token = jwtProvider.createToken(authentication);
            // lấy quyền của user
            UserPrinciple userPrinciple = (UserPrinciple) authentication.getPrincipal();
            JwtReponse jwtReponse = new JwtReponse(token,userPrinciple.getNameUser(),userPrinciple.getAuthorities().
                    toArray()[0].toString());
            return new ResponseEntity<>(jwtReponse,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(new ResponseMessage("Đăng nhập thất bại"),HttpStatus.BAD_REQUEST);
        }

    }
}
