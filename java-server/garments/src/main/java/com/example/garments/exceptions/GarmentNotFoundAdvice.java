package com.example.garments.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
class GarmentNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(GarmentNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String garmentNotFoundHandler(GarmentNotFoundException ex) {
        return ex.getMessage();
    }
}
