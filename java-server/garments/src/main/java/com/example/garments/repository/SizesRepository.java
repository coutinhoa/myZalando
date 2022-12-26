package com.example.garments.repository;

import com.example.garments.models.Sizes;
import org.springframework.data.jpa.repository.JpaRepository;
public interface SizesRepository extends JpaRepository<Sizes, Long> {
}
