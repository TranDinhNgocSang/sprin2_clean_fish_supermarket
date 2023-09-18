package com.example.clean_fish_supermarket.service;

import com.example.clean_fish_supermarket.model.OrderDetail;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IOrderDetailService {
    void addOrderDetail(OrderDetail orderDetail);

    List<OrderDetail> getListOrderDetail(int idOrder);
}
