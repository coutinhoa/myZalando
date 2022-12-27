package com.example.garments.controllers;

import com.example.garments.models.Pictures;
import com.example.garments.models.Reviews;
import com.example.garments.repository.ReviewsRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin("*")
@RestController
class ReviewsController {
    private final ReviewsRepository repository;

    ReviewsController(ReviewsRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/garments/{garment_id}/reviews")
    public Optional<Reviews> getReviewsById(@PathVariable Long garment_id) {
        return repository.findById(garment_id);
    }

    @PostMapping("/garments/{garment_id}/reviews")
    Reviews newRating(@RequestBody Reviews newRating) {
        return repository.save(newRating);
    }
}
