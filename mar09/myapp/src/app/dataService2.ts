import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
// This is the service.


// This is the service.
export class TemperatureService {
    celcius: Array<any>;
    result: any;

    constructor() {
        this.celcius = 6;
    }
    getFeh() {
        return this.result = this.celcius * 1/8 + 32;

    }

}