import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forms3Component } from './forms3.component';

describe('Forms3Component', () => {
  let component: Forms3Component;
  let fixture: ComponentFixture<Forms3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forms3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Forms3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
