package com.example.clean_fish_supermarket.service;

import com.example.clean_fish_supermarket.model.OrderProduct;
import com.example.clean_fish_supermarket.model.projections.IOrderProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

public interface IOrderProductService {
    OrderProduct addOder (OrderProduct orderProduct);

    Page<IOrderProjection> getOrderByUser (int idUser, Pageable pageable);


}
