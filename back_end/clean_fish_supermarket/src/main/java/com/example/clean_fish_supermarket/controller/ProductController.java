package com.example.clean_fish_supermarket.controller;

import com.example.clean_fish_supermarket.model.Product;
import com.example.clean_fish_supermarket.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Action;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private IProductService productService;

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/get/{idType}/{limit}")
    public ResponseEntity<List<Product>> getLimitListProductByType(@PathVariable int idType,@PathVariable int limit){
        return new ResponseEntity<>(productService.getLimitProductByType(idType,limit), HttpStatus.OK);
    }
}
