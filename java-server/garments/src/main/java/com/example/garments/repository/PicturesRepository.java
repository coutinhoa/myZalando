package com.example.garments.repository;

import com.example.garments.models.Picture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PicturesRepository extends JpaRepository<Picture, Long> {
    Optional<Picture> findByGarment(Integer garment_id);

}
