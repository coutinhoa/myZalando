package com.example.garments.controllers;


import com.example.garments.models.Pictures;
import com.example.garments.repository.PicturesRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RestController
class PicturesController {
    private final PicturesRepository repository;
    PicturesController(PicturesRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/garments/{garment_id}/pictures")
    public Optional<Pictures> getPicturesById(@PathVariable Long garment_id) {
        return repository.findById(garment_id);
    }

}
