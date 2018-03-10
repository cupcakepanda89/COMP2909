import { Component } from '@angular/core';

// This is the service.
export class MyDataService {
    names: Array<any>;
    myName: string;
    constructor() {
        this.names = ['John', 'Mary', 'Joan'];
        this.myName = 'Katelyn';
    }
    getNames() {
        return this.names;

    }
    getMyName(){
        return 'this is my name: ' + this.myName;
    }
}