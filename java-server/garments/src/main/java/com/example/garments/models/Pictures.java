package com.example.garments.models;

import jakarta.persistence.*;

import java.util.Collection;

import static jakarta.persistence.GenerationType.IDENTITY;


@Entity
@Table(name = "pictures")
public class Pictures {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String url;


    @ManyToOne
    @JoinColumn(name="garment_id", nullable=false)
    private Garment garments;

    Pictures() {
    }

    public Pictures(String url) {
        this.url = url;
    }

    public Long getId() {
        return this.id;
    }


    public String getUrl() {
        return this.url;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public void setUrl(String url) {
        this.url = url;
    }


}
