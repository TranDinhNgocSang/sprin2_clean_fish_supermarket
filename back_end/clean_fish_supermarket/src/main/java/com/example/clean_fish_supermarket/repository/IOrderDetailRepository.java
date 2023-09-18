package com.example.clean_fish_supermarket.repository;

import com.example.clean_fish_supermarket.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail,Integer> {
    @Query(value = "SELECT * FROM order_detail\n" +
            "where id_oder = :idOrder",nativeQuery = true)
    List<OrderDetail> getListOrderDetail(@Param("idOrder") int idOrder);

}
