package com.example.garments.services;

import com.example.garments.models.Reviews;
import com.example.garments.repository.ReviewsRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReviewsService {
    private final ReviewsRepository repository;
    ReviewsService(ReviewsRepository repository) {
        this.repository = repository;
    }
    public Optional<Reviews> getReviews(Integer garment_id){
        return repository.findByGarments(garment_id);
    }

    public Reviews createRating(Reviews newRating, Long id) throws Exception {
        if(!repository.findById(id).isEmpty()){
            throw new Exception ("Rating already exists");
        }
        return repository.save(newRating);
    }
}
