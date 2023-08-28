package com.example.clean_fish_supermarket.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TypeProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idTypeProduct;
    private String nameTypeProduct;

    public TypeProduct() {
    }

    public TypeProduct(int idTypeProduct, String nameTypeProduct) {
        this.idTypeProduct = idTypeProduct;
        this.nameTypeProduct = nameTypeProduct;
    }

    public int getIdTypeProduct() {
        return idTypeProduct;
    }

    public void setIdTypeProduct(int idTypeProduct) {
        this.idTypeProduct = idTypeProduct;
    }

    public String getNameTypeProduct() {
        return nameTypeProduct;
    }

    public void setNameTypeProduct(String nameTypeProduct) {
        this.nameTypeProduct = nameTypeProduct;
    }
}
