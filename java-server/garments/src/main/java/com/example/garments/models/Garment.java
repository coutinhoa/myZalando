package com.example.garments.models;

import jakarta.persistence.*;

import java.util.Collection;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import static jakarta.persistence.GenerationType.IDENTITY;


@Entity
@Table(name = "garments")
public class Garment {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String name;
    private String type;

    private int price;
    private String colour;

    private boolean premiumDelivery;
    private String identity;


    @OneToMany(mappedBy = "garments")
    private Set<Pictures> pictures;

    @OneToMany(mappedBy = "garments")
    private Set<Reviews> rating;


    @ManyToMany (cascade = CascadeType.ALL)
    @JoinTable(name = "garmentsizes", joinColumns = @JoinColumn(name = "garments_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "sizes_id", referencedColumnName = "id"))
    Set < Sizes > sizes = new HashSet< Sizes >();

    Garment() {}

    public Garment(String name, String type, int price, String colour, boolean premiumDelivery, String identity) {

        this.name = name;
        this.type = type;
        this.price =price;
        this.colour = colour;
        this.premiumDelivery =  premiumDelivery;
        this.identity = identity;
    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getType() {
        return this.type;
    }

    public int getPrice() {
        return this.price;
    }

    public String getColour() {
        return this.colour;
    }

    public boolean getPremiumDelivery() {
        return this.premiumDelivery;
    }

    public String getIdentity() {
        return this.identity;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(String type) {
        this.type= type;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setColour(String colour) {
        this.colour= colour;
    }

    public void setPremiumDelivery(boolean premiumDelivery) {
        this.premiumDelivery= premiumDelivery;
    }

    public void setIdentity(String identity) {
        this.identity= identity;
    }

    @Override
    public boolean equals(Object o) {

        if (this == o)
            return true;
        if (!(o instanceof Garment))
            return false;
        Garment garment = (Garment) o;
        return Objects.equals(this.id, garment.id) && Objects.equals(this.name, garment.name)
                && Objects.equals(this.type, garment.type) && Objects.equals(this.price, garment.price) && Objects.equals(this.colour, garment.colour) && Objects.equals(this.premiumDelivery, garment.premiumDelivery)  && Objects.equals(this.identity, garment.identity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.name, this.type, this.price, this.colour, this.premiumDelivery, this.identity);
    }

    @Override
    public String toString() {
        return "Garment{" + "id=" + this.id + ", name='" + this.name + '\'' + ", type='" + this.type + '\'' + ", colour='" + this.colour + '\'' + ", premiumDelivery='" + this.premiumDelivery  + '\''+ ", identity='" + this.identity + "}";}
}
