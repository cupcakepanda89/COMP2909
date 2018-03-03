import { Component } from '@angular/core';
// Custom class
export class PlayingCard {
    cardVal: string;
    suit:    string;
}
@Component({
    selector: 'app-root',
    // Multi-line content is allowed with back ticks.
    template: `<h1>Hello world!  {{title}} <br/>
	       {{card.cardVal}} of {{card.suit}} and<br/>
           {{card1.cardVal}} of {{card1.suit}}
    </h1>`
})

export class AppComponent {
    public title = 'This is Angular!';

    // Declare and initialize a PlayingCard object.
    public card: PlayingCard = {
        cardVal: "Ace",
        suit: "Spades"
    };
    public card1: PlayingCard = {
        cardVal: "Queen",
        suit: "Diamond"
    };
}