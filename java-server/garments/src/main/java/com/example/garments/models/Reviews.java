package com.example.garments.models;

import jakarta.persistence.*;

import java.util.Collection;

import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "reviews")
public class Reviews {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private int rating;
    private String description;
    private String date;

    @ManyToOne
    @JoinColumn(name="garment_id", nullable=false)
    private Garment garments;

    Reviews() {
    }

    public Reviews(int rating, String description, String date) {
        this.rating = rating;
        this.description = description;
        this.date = date;
    }

    public Long getId() {
        return this.id;
    }


    public int getRating() {
        return this.rating;
    }

    public String getDescription() {
        return this.description;
    }

    public String getDate() {
        return this.date;
    }

    //public Garment getGarment() {  return garments;   }

    public void setId(Long id) {
        this.id = id;
    }

    public void setRating(int rating) {
        this.rating= rating;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDate(String date) {
        this.date=date;
    }

    //public void setGarment(Garment garments) {    this.garments = garments;    }

}