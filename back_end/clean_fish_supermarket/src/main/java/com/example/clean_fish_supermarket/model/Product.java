package com.example.clean_fish_supermarket.model;

import javax.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idProduct;
    @Column(columnDefinition = "LONGTEXT")
    private String img;
    @Column(columnDefinition = "LONGTEXT")
    private String describeProduct;
    @Column(columnDefinition = "VARCHAR(255)")
    private String nameProduct;
    private Long price;
    private double isDeleteProduct;
    private int quantity;
    @ManyToOne
    @JoinColumn(name = "id_type_product")
    private TypeProduct typeProduct;

    public Product() {
    }

    public Product(int idProduct, String img, String describeProduct, String nameProduct, Long price,
                   double isDeleteProduct, int quantity, TypeProduct typeProduct) {
        this.idProduct = idProduct;
        this.img = img;
        this.describeProduct = describeProduct;
        this.nameProduct = nameProduct;
        this.price = price;
        this.isDeleteProduct = isDeleteProduct;
        this.quantity = quantity;
        this.typeProduct = typeProduct;
    }

    public int getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(int idProduct) {
        this.idProduct = idProduct;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getDescribeProduct() {
        return describeProduct;
    }

    public void setDescribeProduct(String describeProduct) {
        this.describeProduct = describeProduct;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public double getIsDeleteProduct() {
        return isDeleteProduct;
    }

    public void setIsDeleteProduct(double isDeleteProduct) {
        this.isDeleteProduct = isDeleteProduct;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public TypeProduct getTypeProduct() {
        return typeProduct;
    }

    public void setTypeProduct(TypeProduct typeProduct) {
        this.typeProduct = typeProduct;
    }
}
