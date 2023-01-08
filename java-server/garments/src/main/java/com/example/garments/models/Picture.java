package com.example.garments.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import static jakarta.persistence.GenerationType.IDENTITY;


@Entity
@Table(name = "pictures")
public class Picture {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String url;


    @ManyToOne
    @JoinColumn(name="garment_id", nullable=false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Garment garment;

    Picture() {
    }

    public Picture(String url) {
        this.url = url;
    }

    public Long getId() {
        return this.id;
    }


    public String getUrl() {
        return this.url;
    }

   // public Garment getGarment() {        return garment;    }
    public void setId(Long id) {
        this.id = id;
    }

    public void setUrl(String url) {
        this.url = url;
    }

   // public void setGarment(Garment garment) {        this.garments = garment;    }

}
