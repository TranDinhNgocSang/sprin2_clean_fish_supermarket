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

    @Override
    public Product getProductById(int idProduct) {
        return productRepository.findByIdProductAndIsDeleteProductIsFalse(idProduct);
    }

    @Override
    public int countProductByIdProduct(int idType) {
        return productRepository.countProductByIdProduct(idType);
    }

    @Override
    public List<Product> searchByName(String name, int limit) {
        return productRepository.searchByName(name,limit);
    }

    @Override
    public int countSearch(String name) {
        return productRepository.countSearch(name);
    }

    @Override
    public List<Product> getListProductBetweenByPrice(int begin, int end, int idType, int limit) {
        return productRepository.getListProductBetweenByPrice(begin,end,idType,limit);
    }

    @Override
    public int countProductBetweenByPrice(int begin, int end, int idType) {
        return productRepository.countProductBetweenByPrice(begin,end,idType) ;
    }


}
