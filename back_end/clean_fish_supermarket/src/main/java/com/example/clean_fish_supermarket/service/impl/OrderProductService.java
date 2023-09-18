package com.example.clean_fish_supermarket.service.impl;

import com.example.clean_fish_supermarket.model.OrderProduct;
import com.example.clean_fish_supermarket.model.projections.IOrderProjection;
import com.example.clean_fish_supermarket.repository.IOrderProductRepository;
import com.example.clean_fish_supermarket.service.IOrderProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class OrderProductService implements IOrderProductService {
    @Autowired
    private IOrderProductRepository orderProductRepository;
    @Override
    public OrderProduct addOder(OrderProduct orderProduct) {
        return orderProductRepository.save(orderProduct);
    }

    @Override
    public Page<IOrderProjection> getOrderByUser(int idUser, Pageable pageable) {
        return orderProductRepository.getOrderByUser(idUser,pageable);
    }
}
