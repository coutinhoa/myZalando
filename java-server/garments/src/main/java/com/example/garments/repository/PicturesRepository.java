package com.example.garments.repository;

import com.example.garments.models.Pictures;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PicturesRepository extends JpaRepository<Pictures, Long> {
    Optional<Pictures> findByGarments(Integer garment_id);

}
