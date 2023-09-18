package com.example.clean_fish_supermarket.repository;

import com.example.clean_fish_supermarket.model.OrderProduct;
import com.example.clean_fish_supermarket.model.projections.IOrderProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IOrderProductRepository extends JpaRepository<OrderProduct,Integer> {

    @Query(value = "SELECT order_product.id_oder,order_product.address,order_product.day_oder,status_oder.name_status, sum(order_detail.quantity_product*product.price+20000) as total FROM order_product\n" +
            "join order_detail\n" +
            "on order_product.id_oder=order_detail.id_oder\n" +
            "join product on product.id_product=order_detail.id_product\n" +
            "join status_oder on status_oder.id_status = order_product.id_status\n" +
            "where order_product.id_user = :idUser \n" +
            "group by order_product.id_oder\n" +
            "order by order_product.id_oder desc", nativeQuery = true)
    Page<IOrderProjection> getOrderByUser (@Param("idUser") int idUser, Pageable pageable);
}
