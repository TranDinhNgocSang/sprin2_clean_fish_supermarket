package com.example.clean_fish_supermarket.service;

import com.example.clean_fish_supermarket.model.Cart;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICartService {
    void addCart(Cart cart);

    Cart getQuantityProductByUser(int idUser, int idProduct);

    void deleteProduct(int idUser, int idProduct);

    List<Cart> getListCartByUser(int idUser);

    Integer countTotalProductByUser(int idUser);

    void deleteCartByUser ( int idUser);
}
