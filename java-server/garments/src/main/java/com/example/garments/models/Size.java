package com.example.garments.models;
import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.HashSet;
import java.util.Set;

import static jakarta.persistence.GenerationType.IDENTITY;


@Entity
@Table(name = "sizes")

public class Size {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String size;

    @OneToMany(mappedBy = "size")
    @JsonIgnore
    private List<GarmentSize> garmentSizes;

    Size() {
    }

    public Size(String sizes) {
        this.size = size;
    }

    public Long getId() {
        return this.id;
    }

    public String getSize() {
        return this.size;
    }

    /*public Set<Garment> getGarments() {
        return garments;
    }*/

    public void setId(Long id) {
        this.id = id;
    }

    public void setSizes(String sizes) {
        this.size = size;
    }

    /*public void setGarments(Set<Garment> garments) {
        this.garments = garments;
    }*/
}


