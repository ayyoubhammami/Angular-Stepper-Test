import { Component, OnInit } from '@angular/core';
import { Card } from './card/card.component';

@Component({
  selector: 'app-forms3',
  templateUrl: './forms3.component.html',
  styleUrls: ['./forms3.component.css']
})
export class Forms3Component implements OnInit {

  cards = [
     new Card('fa fa-user fa-2x', '1 Rédacteur', '(1 commande)'),
     new Card('fa fa-users fa-2x', 'Multiples rédacteurs', '(Multiples commandes)'),
   ];
   cardsFor = [
    new Card('', 'Débutant', "Á la recherche de quelqu'un de relativement vouveau dan ce domaine"),
    new Card('', 'Intermédiaire', "Á la recherche d'une expéreience minimal dans ce domaine"),
    new Card('', 'Expérimenté', "Á la recherche d'une expérience substantielle dans ce domaine"),
    new Card('', 'Expert',"Á la recherche d'une expertise compléte et approfondie dans ce domaine"),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
