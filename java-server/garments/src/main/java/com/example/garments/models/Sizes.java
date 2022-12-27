package com.example.garments.models;
import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static jakarta.persistence.GenerationType.IDENTITY;


@Entity
@Table(name = "sizes")

public class Sizes {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String sizes;


    @ManyToMany(mappedBy = "sizes", cascade = { CascadeType.ALL })
    private Set<Garment> garments = new HashSet<Garment>();

    Sizes() {
    }

    public Sizes(String sizes) {
        this.sizes = sizes;
    }

    public Long getId() {
        return this.id;
    }

    public String getSizes() {
        return this.sizes;
    }

    /*public Set<Garment> getGarments() {
        return garments;
    }*/

    public void setId(Long id) {
        this.id = id;
    }

    public void setSizes(String sizes) {
        this.sizes = sizes;
    }

    /*public void setGarments(Set<Garment> garments) {
        this.garments = garments;
    }*/
}


