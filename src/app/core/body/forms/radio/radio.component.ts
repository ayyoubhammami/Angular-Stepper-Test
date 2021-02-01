import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],

})

export class RadioComponent implements OnInit {
  favoriteSeason: string;
  options: string[] = ['Automobile', 'E-commerce', 'Finance', 'Informatique','Loisirs','Sport','Tourisme'];
  constructor() { }

  ngOnInit(): void {
  }

}
