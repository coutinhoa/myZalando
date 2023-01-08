package com.example.garments.services;

import com.example.garments.models.Garment;
import com.example.garments.models.Review;
import com.example.garments.repository.GarmentsRepository;
import com.example.garments.repository.ReviewsRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReviewsService {
    private final ReviewsRepository repository;
    private final GarmentsRepository garmentsRepository;
    ReviewsService(ReviewsRepository repository, GarmentsRepository garmentsRepository) {
        this.repository = repository;
        this.garmentsRepository = garmentsRepository;
    }
    public Optional<Review> getReviews(Integer garment_id){
        return repository.findByGarment(garment_id);
    }

    public Review createReview(Review newReview, Integer garment_id) {
        /*if(!repository.findById(id).isEmpty()){
            throw new Exception ("Rating already exists");
        }*/

        Optional<Garment> g= garmentsRepository.findById(Long.valueOf(garment_id));
        newReview.setGarment(g.get());
        //.get() turns an optional into the object garment and if it doesn't find turns it to null
        repository.save(newReview);
        return newReview;
    }
}
