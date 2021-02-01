import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],

})
export class StepsComponent implements OnInit {
  stepPositionActive: number=0;

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('stepper') stepper: MatStepper;
  chnageComponent(stepPosition: any){
    this.stepPositionActive=stepPosition
     console.log(stepPosition)
  }
  onSave(stepper: MatStepper)
  {
    this.stepPositionActive=stepper.selectedIndex
    setTimeout(()=>{
      this.stepper.selectedIndex = this.stepPositionActive+1;
      this.chnageComponent(this.stepPositionActive+1)
    },0);
    console.log(stepper.selectedIndex)

  }

}
