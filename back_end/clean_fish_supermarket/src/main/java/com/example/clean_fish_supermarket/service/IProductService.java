package com.example.clean_fish_supermarket.service;

import com.example.clean_fish_supermarket.model.Product;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductService {
    List<Product> getLimitProductByType(int idType, int limit);

    Product getProductById(int idProduct);

    int countProductByIdProduct(int idType);

    List<Product> searchByName(String name, int limit);

    int countSearch(String name);

    List<Product> getListProductBetweenByPrice(int begin, int end, int idType, int limit);

    int countProductBetweenByPrice(int begin, int end, int idType);

    void updateQuantityProductById(int quantity, int idProduct);

    List<Product> bestSellingProduct ();

    void deleteProductByid (int idProduct);

}
