package com.example.garments.models;

import jakarta.persistence.*;

import java.util.Collection;

import static jakarta.persistence.GenerationType.IDENTITY;


@Entity
@Table(name = "garmentsizes")
public class GarmentSizes {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private int quantity;

    GarmentSizes() {
    }

    public GarmentSizes(int quantity) {

        this.quantity = quantity;

    }

    public Long getId() {
        return this.id;
    }


    public int getQuantity() {
        return this.quantity;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


}

