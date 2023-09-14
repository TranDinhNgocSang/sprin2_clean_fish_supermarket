package com.example.clean_fish_supermarket.repository;

import com.example.clean_fish_supermarket.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ICartRepository extends JpaRepository<Cart, Integer> {
    @Query(value = "SELECT * FROM clean_fish_supermarket.cart\n" +
            "where id_user = :idUser \n" +
            "and id_product = :idProduct",nativeQuery = true)
    Cart getQuantityProductByUser(@Param("idUser") int idUser, @Param("idProduct") int idProduct);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM cart \n" +
            "WHERE id_user = :idUser \n" +
            "and id_product = :idProduct",nativeQuery = true)
    void deleteProduct(@Param("idUser") int idUser, @Param("idProduct") int idProduct);

    List<Cart> findAllByUser_IdUser(int idUser);

    @Query(value = "SELECT count(*) FROM clean_fish_supermarket.cart \n" +
            "where id_user = :idUser",nativeQuery = true)
    Integer countTotalProductByUser(@Param("idUser") int idUser);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM `clean_fish_supermarket`.`cart` WHERE id_user = :idUser",nativeQuery = true)
    void deleteCartByUser (@Param("idUser") int idUser);

}
