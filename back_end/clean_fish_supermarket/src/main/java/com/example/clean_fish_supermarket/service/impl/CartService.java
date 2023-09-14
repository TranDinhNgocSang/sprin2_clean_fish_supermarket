package com.example.clean_fish_supermarket.service.impl;

import com.example.clean_fish_supermarket.model.Cart;
import com.example.clean_fish_supermarket.repository.ICartRepository;
import com.example.clean_fish_supermarket.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository cartRepository;
    @Override
    public void addCart(Cart cart) {
        cartRepository.save(cart);
    }

    @Override
    public Cart getQuantityProductByUser(int idUser, int idProduct) {
        return cartRepository.getQuantityProductByUser(idUser,idProduct);
    }

    @Override
    public void deleteProduct(int idUser, int idProduct) {
        cartRepository.deleteProduct(idUser,idProduct);
    }

    @Override
    public List<Cart> getListCartByUser(int idUser) {
        return cartRepository.findAllByUser_IdUser(idUser);
    }

    @Override
    public Integer countTotalProductByUser(int idUser) {
        return cartRepository.countTotalProductByUser(idUser);
    }

    @Override
    public void deleteCartByUser(int idUser) {
        cartRepository.deleteCartByUser(idUser);
    }

}
