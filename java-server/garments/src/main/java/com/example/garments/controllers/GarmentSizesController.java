package com.example.garments.controllers;

import com.example.garments.models.GarmentSize;
import com.example.garments.repository.GarmentSizesRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
class GarmentSizesController {
    private final GarmentSizesRepository repository;

    GarmentSizesController(GarmentSizesRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/garments/{garment_id}/garmentsizes")
    List<GarmentSize> all() {
        return repository.findAll();
    }
}
