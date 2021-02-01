import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html',
  styleUrls: ['./forms2.component.css']
})
export class Forms2Component implements OnInit {
  maxChars = 400;
  minChars = 40;
  role = "Rédaction d'article de blog sur la réalité virtuelle";
  chars = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
