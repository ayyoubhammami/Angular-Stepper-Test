import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearchyComponent } from './hearchy.component';

describe('HearchyComponent', () => {
  let component: HearchyComponent;
  let fixture: ComponentFixture<HearchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearchyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HearchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
