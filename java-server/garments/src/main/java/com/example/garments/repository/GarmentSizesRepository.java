package com.example.garments.repository;

import com.example.garments.models.GarmentSize;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GarmentSizesRepository extends JpaRepository<GarmentSize, Long> {
}
