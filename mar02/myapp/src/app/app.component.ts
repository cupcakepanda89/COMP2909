import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template:
        `
<section>
<form  (ngSubmit)="onSubmit()" #myForm="ngForm">
        First Name:
        <input type="text" pattern="[a-zA-Z ]*" minlength="3" required 
         [(ngModel)]="myName" name="firstName" #firstName="ngModel" >
        <div [hidden]="firstName.valid || firstName.pristine">
            This control is invalid.</div>
        <p *ngIf="firstName?.errors?.required">This field is required.</p>
        <p *ngIf="firstName?.errors?.pattern">
            Only alphabetical characters are allowed.</p>
        <p *ngIf="firstName?.errors?.minlength">
            This entry must have at least three characters.</p>  
        <br><br>
        Last Name:
        <input type="text" pattern="[a-zA-Z ]*" minlength="2" required
               [(ngModel)]="lName" name="lastName" #lastName="ngModel" >
        <div [hidden]="lastName.valid || lastName.pristine">
            This control is invalid.</div>
        <p *ngIf="lastName?.errors?.required">This field is required.</p>
        <p *ngIf="lastName?.errors?.pattern">
            Only alphabetical characters are allowed.</p>
        <p *ngIf="lastName?.errors?.minlength">
            This last name entry must have at least two characters.</p><br>
      <button type="submit" class="btn btn-default" 
       [disabled]="!myForm.form.valid">Submit</button>
    </form>
</section>
`
})
export class AppComponent {
    myName: string;
    lName: string;

    constructor() {
        this.myName = "Katelyn";
        this.lName = "Truong";
    }
}
