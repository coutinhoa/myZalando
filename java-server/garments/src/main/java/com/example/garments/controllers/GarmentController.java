package com.example.garments.controllers;

import java.util.List;
import java.util.Optional;

import com.example.garments.exceptions.GarmentNotFoundException;
import com.example.garments.models.Garment;
import com.example.garments.services.GarmentService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


@CrossOrigin(origins = "http://localhost:3000", methods={RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
@RestController
class GarmentController {

    private final GarmentService service;
    GarmentController(GarmentService service) {
        this.service = service;
    }

    @GetMapping("/garments")
    List<Garment> all(@RequestParam (defaultValue="0") String page, @RequestParam(defaultValue = "10") String pagesize) {

        Page<Garment> garments= service.getAllGarments(Integer.parseInt(page),Integer.parseInt(pagesize));
        return garments.getContent();
    }


    @PostMapping("/garments")
    Garment newGarment(@RequestBody Garment newGarment){
        try{
            return service.createGarment(newGarment);
        }
        catch (Exception e){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, e.getMessage(), e);
        }
    }


    @GetMapping("/garments/{id}")
    Garment one(@PathVariable Long id) {

        return service.getGarment(id)
                .orElseThrow(() -> new GarmentNotFoundException(id));
    }

    @PutMapping("/garments/{id}")
    Garment replaceGarment(@RequestBody Garment newGarment, @PathVariable Long id) {
        return service.updateGarment(id, newGarment);
    }

    @DeleteMapping("/garments/{id}")
    void deleteGarment(@PathVariable Long id) {
        service.deleteGarment(id);
    }
}
