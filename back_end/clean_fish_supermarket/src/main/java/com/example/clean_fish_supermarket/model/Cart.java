package com.example.clean_fish_supermarket.model;

import javax.persistence.*;

@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idCart;
    private int quantityProduct;
    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;
    @ManyToOne
    @JoinColumn(name = "id_product")
    private Product product;

    public Cart() {
    }

    public Cart(int idCart, int quantityProduct, User user, Product product) {
        this.idCart = idCart;
        this.quantityProduct = quantityProduct;
        this.user = user;
        this.product = product;
    }

    public Cart(int quantityProduct, User user, Product product) {
        this.quantityProduct = quantityProduct;
        this.user = user;
        this.product = product;
    }

    public int getIdCart() {
        return idCart;
    }

    public void setIdCart(int idCart) {
        this.idCart = idCart;
    }

    public int getQuantityProduct() {
        return quantityProduct;
    }

    public void setQuantityProduct(int quantityProduct) {
        this.quantityProduct = quantityProduct;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
