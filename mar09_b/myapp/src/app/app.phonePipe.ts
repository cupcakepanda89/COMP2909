import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phonePipe' })

export class PhonePipe implements PipeTransform {
    transform(phoneNumer : number): string {
        let cell = phoneNumer.toString();
        let output = cell.substr(0,3) + "-" + cell.substr(3,3)
        + "-" + cell.substr(6,10); // Unicode for Fahrenheit;
        return output;
    }
}
