package com.example.clean_fish_supermarket.model;

import javax.persistence.*;

@Entity
public class OrderProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idOder;
    @Column(columnDefinition = "LONGTEXT")
    private String address;
    @Column(columnDefinition = "DATETIME")
    private String dayOder;
    @Column(columnDefinition = "DATE")
    private String deliveryDate;
    @Column(columnDefinition = "VARCHAR(200)")
    private String note;
    @ManyToOne
    @JoinColumn(name = "id_status",columnDefinition = "int default 1")
    private StatusOder statusOder;
    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;

    public OrderProduct() {
    }

    public OrderProduct(String address, String dayOder, String note, StatusOder statusOder, User user) {
        this.address = address;
        this.dayOder = dayOder;
        this.note = note;
        this.statusOder = statusOder;
        this.user = user;
    }

    public OrderProduct(String address, String dayOder, String note, User user) {
        this.address = address;
        this.dayOder = dayOder;
        this.note = note;
        this.user = user;
    }

    public OrderProduct(int idOder, String address, String dayOder, String deliveryDate, String note, StatusOder statusOder, User user) {
        this.idOder = idOder;
        this.address = address;
        this.dayOder = dayOder;
        this.deliveryDate = deliveryDate;
        this.note = note;
        this.statusOder = statusOder;
        this.user = user;
    }

    public int getIdOder() {
        return idOder;
    }

    public void setIdOder(int idOder) {
        this.idOder = idOder;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDayOder() {
        return dayOder;
    }

    public void setDayOder(String dayOder) {
        this.dayOder = dayOder;
    }

    public String getDeliveryDate() {
        return deliveryDate;
    }

    public void setDeliveryDate(String deliveryDate) {
        this.deliveryDate = deliveryDate;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public StatusOder getStatusOder() {
        return statusOder;
    }

    public void setStatusOder(StatusOder statusOder) {
        this.statusOder = statusOder;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
