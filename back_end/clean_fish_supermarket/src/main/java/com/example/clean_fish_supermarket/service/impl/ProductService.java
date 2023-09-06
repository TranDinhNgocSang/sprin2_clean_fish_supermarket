package com.example.clean_fish_supermarket.service.impl;

import com.example.clean_fish_supermarket.model.Product;
import com.example.clean_fish_supermarket.repository.IProductRepository;
import com.example.clean_fish_supermarket.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Override
    public List<Product> getLimitProductByType(int idType, int limit) {
        return productRepository.findLimitByType(idType, limit);
    }
}
