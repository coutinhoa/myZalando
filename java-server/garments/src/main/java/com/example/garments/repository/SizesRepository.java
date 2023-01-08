package com.example.garments.repository;

import com.example.garments.models.Size;
import org.springframework.data.jpa.repository.JpaRepository;
public interface SizesRepository extends JpaRepository<Size, Long> {
}
