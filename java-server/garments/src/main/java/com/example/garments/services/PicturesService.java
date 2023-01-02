package com.example.garments.services;
import com.example.garments.models.Pictures;
import com.example.garments.repository.PicturesRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PicturesService {

   private final PicturesRepository repository;
    PicturesService(PicturesRepository repository) {
        this.repository = repository;
    }
    /*public Optional<Pictures> getPicturesByGarmentId(Integer garment_id){
        return repository.findByGarmentId(garment_id);
    }*/

    public Optional<Pictures> getPictures(Integer garment_id){
        return repository.findByGarments(garment_id);
    }
}
