package com.example.garments.repository;

import com.example.garments.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReviewsRepository extends JpaRepository<Review, Long> {
    Optional<Review> findByGarment(Integer garment_id);
}
