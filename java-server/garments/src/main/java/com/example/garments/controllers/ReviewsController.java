package com.example.garments.controllers;

import com.example.garments.models.Garment;
import com.example.garments.models.Reviews;
import com.example.garments.services.ReviewsService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;


@CrossOrigin("*")
@RestController
class ReviewsController {
    private final ReviewsService service;
    ReviewsController(ReviewsService service) {
        this.service = service;
    }
    @GetMapping("/garments/{garment_id}/reviews")
    Optional<Reviews> one(@PathVariable Integer garment_id) {

        return service.getReviews(garment_id);}


    @PostMapping("/garments/{garment_id}/reviews")
        Reviews newRating(@RequestBody Reviews newRating, Long id){
            try {
                return service.createRating(newRating, id);
            } catch (Exception e) {
                throw new ResponseStatusException(
                        HttpStatus.BAD_REQUEST, e.getMessage(), e);
            }
        }
}