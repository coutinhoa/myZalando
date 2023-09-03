package com.example.garments.models;

import jakarta.persistence.*;

import static jakarta.persistence.GenerationType.IDENTITY;


@Entity
@Table(name = "garmentsizes")
public class GarmentSize {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private int quantity;

    @ManyToOne
    @JoinColumn(name = "garment_id", nullable = false, referencedColumnName = "id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private WarehouseProduct garment;

    @ManyToOne
    @JoinColumn(name = "size_id", nullable = false, referencedColumnName = "id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Size size;

    GarmentSize() {
    }

    public GarmentSize(int quantity) {

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

