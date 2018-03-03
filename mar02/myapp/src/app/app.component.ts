import { Component } from '@angular/core';

export class PlayingCard {
    cardVal: string;
    suit: string;
}

@Component({
    selector: 'app-root',
    // Multi-line content allowed with back ticks.
    template: `<h1>Hello world!  {{title}}</h1> <br/>
              <!-- Show cards in unordered list.
              <ul><li *ngFor="let card of cards">{{card.cardVal}}</li></ul> -->

        <table>
            <tr>
                <td>Card Value</td>
                <td>Card Suit</td>
            </tr>
            <tr *ngFor="let card of cards">
                <td>{{card.cardVal}}</td>
            </tr>
        </table>
    `
})

export class AppComponent {
    public title = 'This is Angular 4!';
    // Include card data in collection as public property.
    public cards = CARDS;
}

// Define card data.
let CARDS: PlayingCard[] = [
    { cardVal: "Ace", suit: "Spades" },
    { cardVal: "Two", suit: "Clubs" },
    { cardVal: "Six", suit: "Hearts" },
];