package com.example.clean_fish_supermarket.service;

import com.example.clean_fish_supermarket.model.Product;

import java.util.List;

public interface IProductService {
    List<Product> getLimitProductByType(int idType, int limit);
}
