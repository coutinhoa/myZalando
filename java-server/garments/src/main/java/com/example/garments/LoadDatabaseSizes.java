package com.example.garments;

import com.example.garments.models.Sizes;
import com.example.garments.repository.SizesRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
class LoadDatabaseSizes {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabaseSizes.class);

    @Bean
    CommandLineRunner initDatabaseSizes(SizesRepository repository) {

        return args -> {
           /* log.info("Preloading " + repository.save(new Sizes("XS")));
            log.info("Preloading " + repository.save(new Sizes("S")));
            log.info("Preloading " + repository.save(new Sizes("M")));
            log.info("Preloading " + repository.save(new Sizes("L")));
            log.info("Preloading " + repository.save(new Sizes("XL")));*/
        };
    }
}
