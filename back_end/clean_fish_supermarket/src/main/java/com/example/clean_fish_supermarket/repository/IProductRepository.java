package com.example.clean_fish_supermarket.repository;

import com.example.clean_fish_supermarket.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product,Integer> {
    @Query(value = "SELECT * FROM clean_fish_supermarket.product\n" +
            "where is_delete_product = false\n" +
            "and id_type_product = :idType \n" +
            "order by id_product asc\n" +
            "limit :limit",nativeQuery = true)
    List<Product> findLimitByType(@Param("idType") int idType, @Param("limit") int limit);

    Product findByIdProductAndIsDeleteProductIsFalse (int idProduct);

    @Query(value = "SELECT count(*) FROM clean_fish_supermarket.product\n" +
            "where id_type_product = :idType", nativeQuery = true)
    int countProductByIdProduct(@Param("idType") int idType);

    @Query(value = "SELECT * FROM clean_fish_supermarket.product\n" +
            "            where is_delete_product = false \n" +
            "            and name_product like concat('%',:name,'%')\n" +
            "            order by id_product asc\n" +
            "            limit :limit",nativeQuery = true)
    List<Product> searchByName(@Param("name") String name, @Param("limit") int limit);

    @Query(value = "SELECT count(*) FROM clean_fish_supermarket.product\n" +
            "            where is_delete_product = false \n" +
            "            and name_product like concat('%',:name,'%')",nativeQuery = true)
    int countSearch(@Param("name") String name);

    @Query(value = "SELECT * FROM clean_fish_supermarket.product\n" +
            "where price between :begin and :end\n" +
            "and is_delete_product = false \n" +
            "and id_type_product = :idType \n" +
            "limit :limit",nativeQuery = true)
    List<Product> getListProductBetweenByPrice(@Param("begin") int begin, @Param("end") int end,
                                               @Param("idType") int idType, @Param("limit") int limit);

    @Query(value = "SELECT count(*) FROM clean_fish_supermarket.product\n" +
            "where price between :begin and :end \n" +
            "and is_delete_product = false \n" +
            "and id_type_product = :idType",nativeQuery = true)
    int countProductBetweenByPrice(@Param("begin") int begin, @Param("end") int end, @Param("idType") int idType);

    @Modifying
    @Transactional
    @Query(value = "UPDATE product SET quantity = :quantity WHERE id_product = :idProduct", nativeQuery = true)
    void updateQuantityProductById(@Param("quantity") int quantity, @Param("idProduct") int idProduct);

    @Query(value = "SELECT p.*\n" +
            "FROM product p\n" +
            "JOIN order_detail od ON p.id_product = od.id_product\n" +
            "where is_delete_product = false \n" +
            "GROUP BY p.id_product\n" +
            "ORDER BY SUM(od.quantity_product) DESC\n" +
            "LIMIT 8", nativeQuery = true)
    List<Product> bestSellingProduct ();

    @Modifying
    @Transactional
    @Query(value = "UPDATE product SET is_delete_product = 1 WHERE id_product = :idProduct", nativeQuery = true)
    void deleteProductByid (@Param("idProduct") int idProduct);

}
