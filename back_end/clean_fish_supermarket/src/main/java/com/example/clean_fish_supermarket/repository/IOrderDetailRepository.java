package com.example.clean_fish_supermarket.repository;

import com.example.clean_fish_supermarket.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail,Integer> {
}
