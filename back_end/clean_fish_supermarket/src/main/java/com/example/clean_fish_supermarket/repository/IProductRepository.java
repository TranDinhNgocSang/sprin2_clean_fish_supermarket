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

}
