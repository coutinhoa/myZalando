package com.example.garments.repository;

import com.example.garments.models.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReviewsRepository extends JpaRepository<Reviews, Long> {
    Optional<Reviews> findByGarments(Integer garment_id);
}
