package com.example.garments.controllers;

import com.example.garments.models.Review;
import com.example.garments.services.ReviewsService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@CrossOrigin("*")
@RestController
class ReviewsController {
    private final ReviewsService service;
    ReviewsController(ReviewsService service) {
        this.service = service;
    }
    @GetMapping("/garments/{garment_id}/reviews")
    Optional<Review> getReview(@PathVariable Integer garment_id) {

        return service.getReviews(garment_id);}


    @PostMapping("/garments/{garment_id}/reviews")
    Review createReview(@RequestBody Review newReview, @PathVariable Integer garment_id){
        System.out.print("post");
            return service.createReview(newReview, garment_id);
        }
}