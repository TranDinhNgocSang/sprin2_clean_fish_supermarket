package com.example.clean_fish_supermarket.repository;

import com.example.clean_fish_supermarket.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product,Integer> {
    @Query(value = "SELECT * FROM clean_fish_supermarket.product\n" +
            "where is_delete_product = false\n" +
            "and id_type_product = :idType \n" +
            "order by id_product asc\n" +
            "limit :limit",nativeQuery = true)
    List<Product> findLimitByType(@Param("idType") int idType, @Param("limit") int limit);
}
