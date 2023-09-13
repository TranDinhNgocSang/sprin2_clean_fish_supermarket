package com.example.clean_fish_supermarket.service.impl;

import com.example.clean_fish_supermarket.model.OrderDetail;
import com.example.clean_fish_supermarket.repository.IOrderDetailRepository;
import com.example.clean_fish_supermarket.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderDetailService implements IOrderDetailService {
    @Autowired
    private IOrderDetailRepository orderDetailRepository;
    @Override
    public void addOrderDetail(OrderDetail orderDetail) {
        orderDetailRepository.save(orderDetail);
    }
}
