import { Component } from '@angular/core';

export class PlayingCard {
    cardVal: string;
    suit: string;
}

@Component({
    selector: 'app-root',
    // Multi-line content allowed with back ticks.
    template: `<h1>Hello world! {{title}}</h1> <br/>
    <!-- Show cards in unordered list.
    <ul><li *ngFor="let card of cards">{{card.cardVal}}</li></ul> -->

    <table style="border: 1px black solid">
        <tr>
            <th width="100px" style="border: 1px black solid; background-color: #dfdedd">Card Value</th>
            <th width="100px" style="border: 1px black solid; background-color: #dfdedd">Card Suit</th>
        </tr>
        <tr *ngFor="let card of cards">
            <td width="100px" style="border: 1px black solid">{{card.cardVal}}</td>
            <td width="100px" style="border: 1px black solid">{{card.suit}}</td>
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
    { cardVal: "Queen", suit: "Diamond" },
];