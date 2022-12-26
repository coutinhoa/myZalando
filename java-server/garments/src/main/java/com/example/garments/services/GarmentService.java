package com.example.garments.services;


import com.example.garments.models.Garment;
import com.example.garments.repository.GarmentRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GarmentService {

    private final GarmentRepository repository;
    GarmentService(GarmentRepository repository) {
        this.repository = repository;
    }


    public Page<Garment> getAllGarments(int page, int size){
        Pageable paging = PageRequest.of(page, size);
        return repository.findAll(paging);
    }


    public Garment createGarment(Garment garment) throws Exception {
        if(!repository.findByName(garment.getName()).isEmpty()){
            throw new Exception ("Garment already exists");
        }
        return repository.save(garment);
    }

    public Optional<Garment> getGarment(Long id){
        return repository.findById(id);
    }

    public Garment updateGarment(Long id, Garment garment){
        return repository.findById(id)
                .map(person -> {
                    person.setName(garment.getName());
                    person.setType(garment.getType());
                    person.setPrice(garment.getPrice());
                    person.setColour(garment.getColour());
                    person.setPremiumDelivery(garment.getPremiumDelivery());
                    person.setIdentity(garment.getIdentity());
                    return repository.save(garment);
                })
                .orElseGet(() -> {
                    garment.setId(id);
                    return repository.save(garment);
                });
    }

    public void deleteGarment(Long id){
        repository.deleteById(id);
    }


}
