import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Homework1';


    public result1:number;     // *** If we use 'this' we must have a class level declaration.
    public result2:number;     // *** If we use 'this' we must have a class level declaration.
    public result3:number;     // *** If we use 'this' we must have a class level declaration.
    public result4:number;     // *** If we use 'this' we must have a class level declaration.
    public Operand1:string;   // *** Same as above.
    public Operand2:string;   // *** Same as above.
    public Operand3:string;   // *** Same as above.
    public Operand4:string;   // *** Same as above.
    public Operand5:string;   // *** Same as above.
    public Operand6:string;   // *** Same as above.
    public Operand7:string;   // *** Same as above.
    public Operand8:string;   // *** Same as above.

    doAddition() {
        this.result1=Math.round(Number(this.Operand1) + Number(this.Operand2));
       this.Operand1 = null;
       this.Operand2 = null;
    }
    doSubract() {
        this.result2=Math.round(Number(this.Operand3) - Number(this.Operand4));
        this.Operand3 = null;
        this.Operand4 = null;
    }
    doMultiply() {
        this.result3=Math.round(Number(this.Operand5) * Number(this.Operand6));
        this.Operand5 = null;
        this.Operand6 = null;
    }
    doDivide() {
        this.result4=Math.round(Number(this.Operand7) / Number(this.Operand8));
        this.Operand7 = null;
        this.Operand8 = null;
    }
}​​



