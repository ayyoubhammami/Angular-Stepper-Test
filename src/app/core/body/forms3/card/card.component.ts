import { Component, OnInit } from '@angular/core';

export class Card{
  constructor(
    public icon: any,
    public msj1: string,
    public msj2: string,
    )
  {
  }
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  cards: Card[]
  constructor() { }

  ngOnInit(): void {
  }

}
