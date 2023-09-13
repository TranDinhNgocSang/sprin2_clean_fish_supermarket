package com.example.clean_fish_supermarket.repository;

import com.example.clean_fish_supermarket.model.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IOrderProductRepository extends JpaRepository<OrderProduct,Integer> {
}
