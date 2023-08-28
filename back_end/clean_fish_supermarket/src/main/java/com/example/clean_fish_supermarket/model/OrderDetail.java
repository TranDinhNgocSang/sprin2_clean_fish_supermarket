package com.example.clean_fish_supermarket.model;

import javax.persistence.*;

@Entity
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idOderDetail;
    private int quantityProduct;
    @ManyToOne
    @JoinColumn(name = "id_oder")
    private OrderProduct oder;
    @ManyToOne
    @JoinColumn(name = "id_product")
    private Product product;

    public OrderDetail() {
    }

    public OrderDetail(int idOderDetail, int quantityProduct, OrderProduct oder, Product product) {
        this.idOderDetail = idOderDetail;
        this.quantityProduct = quantityProduct;
        this.oder = oder;
        this.product = product;
    }

    public int getIdOderDetail() {
        return idOderDetail;
    }

    public void setIdOderDetail(int idOderDetail) {
        this.idOderDetail = idOderDetail;
    }

    public int getQuantityProduct() {
        return quantityProduct;
    }

    public void setQuantityProduct(int quantityProduct) {
        this.quantityProduct = quantityProduct;
    }

    public OrderProduct getOder() {
        return oder;
    }

    public void setOder(OrderProduct oder) {
        this.oder = oder;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
