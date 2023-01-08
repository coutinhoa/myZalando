package com.example.garments.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


import java.util.Optional;

import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private int rating;
    private String description;
    private String date;

    @ManyToOne
    @JoinColumn(name="garment_id", nullable=false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Garment garment;

    Review() {
    }

    public Review(int rating, String description, String date) {
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

    public Garment getGarment() {  return garment;   }

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

   public void setGarment(Garment garment) {    this.garment = garment;    }

}