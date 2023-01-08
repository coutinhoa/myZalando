package com.example.garments.controllers;


import com.example.garments.models.Picture;
import com.example.garments.services.PicturesService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RestController
class PicturesController {

    private final PicturesService service;
    PicturesController(PicturesService service) {
        this.service = service;
    }

    @GetMapping("/garments/{garment_id}/pictures")
    Optional<Picture> getPicture(@PathVariable Integer garment_id) {

       // return  service.getPicturesByGarmentId(garment_id);
        return service.getPictures(garment_id);
    }


}
