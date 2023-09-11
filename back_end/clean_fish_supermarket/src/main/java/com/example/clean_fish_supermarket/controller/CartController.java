package com.example.clean_fish_supermarket.controller;

import com.example.clean_fish_supermarket.model.Cart;
import com.example.clean_fish_supermarket.model.Product;
import com.example.clean_fish_supermarket.model.User;
import com.example.clean_fish_supermarket.security.jwt.JwtProvider;
import com.example.clean_fish_supermarket.service.ICartService;
import com.example.clean_fish_supermarket.service.IProductService;
import com.example.clean_fish_supermarket.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private ICartService cartService;
    @Autowired
    private IUserService userService;
    @Autowired
    private IProductService productService;

    @PreAuthorize("hasRole('ROLE_USER')  or hasRole('ROLE_ADMIN')")
    @PostMapping("/add/{idProduct}")
    public ResponseEntity<?> addProductToCart(@PathVariable int idProduct) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userService.findUerByEmail(email).get();
        Product product = productService.getProductById(idProduct);
        Cart oldCart = cartService.getQuantityProductByUser(user.getIdUser(), product.getIdProduct());
        if (oldCart == null) {
            Cart cart = new Cart(1, user, product);
            cartService.addCart(cart);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            Cart cart = new Cart(oldCart.getIdCart(), oldCart.getQuantityProduct() + 1, user, product);
            cartService.addCart(cart);
            return new ResponseEntity<>(HttpStatus.OK);
        }

    }

    @PreAuthorize("hasRole('ROLE_USER')  or hasRole('ROLE_ADMIN')")
    @PostMapping("/minius/{idProduct}")
    public ResponseEntity<?> miniusProductOnCart(@PathVariable int idProduct) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userService.findUerByEmail(email).get();
        Product product = productService.getProductById(idProduct);
        Cart oldCart = cartService.getQuantityProductByUser(user.getIdUser(), product.getIdProduct());
        if (oldCart == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            if (oldCart.getQuantityProduct()>1) {
                Cart cart = new Cart(oldCart.getIdCart(), oldCart.getQuantityProduct() - 1, user, product);
                cartService.addCart(cart);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @PreAuthorize("hasRole('ROLE_USER')  or hasRole('ROLE_ADMIN')")
    @DeleteMapping ("/delete/{idProduct}")
    public ResponseEntity<?> deleteProductOnCart(@PathVariable int idProduct) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userService.findUerByEmail(email).get();
        Product product = productService.getProductById(idProduct);
       try {
           cartService.deleteProduct(user.getIdUser(),product.getIdProduct());
           return new ResponseEntity<>(HttpStatus.OK);
       }catch (Exception e){
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
       }
    }

    @PreAuthorize("hasRole('ROLE_USER')  or hasRole('ROLE_ADMIN')")
    @GetMapping("/list")
    public ResponseEntity<List<Cart>> getListCartByUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userService.findUerByEmail(email).get();
        return new ResponseEntity<>(cartService.getListCartByUser(user.getIdUser()),HttpStatus.OK);
    }

//    @GetMapping("/{a}/{b}")
//    public ResponseEntity<Integer> Test(@PathVariable int a, @PathVariable int b){
//        Integer s = cartService.getQuantityProductByUser(a,b);
//        if (s==null){
//            return new ResponseEntity<>(s,HttpStatus.NOT_FOUND);
//        }else {
//            return new ResponseEntity<>(s,HttpStatus.OK);
//        }
//    }

//    @GetMapping("/{a}/{b}")
//    public ResponseEntity<Integer> countProductByIdProduct(@PathVariable int a, @PathVariable int b){
//        return new ResponseEntity<>(cartService.getQuantityProductByUser(a,b),HttpStatus.OK);
//    }
}
