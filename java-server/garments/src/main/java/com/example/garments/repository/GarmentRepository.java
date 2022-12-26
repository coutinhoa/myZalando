package com.example.garments.repository;

import com.example.garments.models.Garment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GarmentRepository extends JpaRepository <Garment, Long>{
    List<Garment> findByName(String name);
    //makes a list with the contacts that have this name

    Page<Garment> findAll(Pageable pageable);
}
