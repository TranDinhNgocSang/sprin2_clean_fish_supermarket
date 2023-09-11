package com.example.clean_fish_supermarket.controller;

import com.example.clean_fish_supermarket.model.Product;
import com.example.clean_fish_supermarket.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
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

    @GetMapping("/get/{idType}/{limit}")
    public ResponseEntity<List<Product>> getLimitListProductByType(@PathVariable int idType,@PathVariable int limit){
        return new ResponseEntity<>(productService.getLimitProductByType(idType,limit), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById (@PathVariable int id){
        return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
    }

    @GetMapping("/count/{idType}")
    public ResponseEntity<Integer> countProductByIdProduct(@PathVariable int idType){
        return new ResponseEntity<>(productService.countProductByIdProduct(idType),HttpStatus.OK);
    }

    @GetMapping("/search/{name}/{limit}")
    public ResponseEntity<List<Product>> searchByName(@PathVariable String name, @PathVariable int limit){
        return new ResponseEntity<>(productService.searchByName(name,limit),HttpStatus.OK);
    }

    @GetMapping("/count-search/{name}")
    public ResponseEntity<Integer> countSearch(@PathVariable String name){
        return new ResponseEntity<>(productService.countSearch(name),HttpStatus.OK);
    }

    @GetMapping("/between/{begin}/{end}/{idType}/{limit}")
    public ResponseEntity<List<Product>> getListProductBetweenByPrice(@PathVariable int begin, @PathVariable int end,
                                                                      @PathVariable int idType, @PathVariable int limit){
        return new ResponseEntity<>(productService.getListProductBetweenByPrice(begin,end,idType,limit),HttpStatus.OK);
    }

        @GetMapping(("/count-between/{begin}/{end}/{idType}"))
    public ResponseEntity<Integer> countProductBetweenByPrice(@PathVariable int begin, @PathVariable int end,
                                                                      @PathVariable int idType){
        return new ResponseEntity<>(productService.countProductBetweenByPrice(begin,end,idType),HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/test")
    public ResponseEntity<?> test(){
        return new ResponseEntity<>(HttpStatus.OK);
    }
}


