import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeumorphismDribbbleComponent } from './neumorphism-dribbble.component';

describe('NeumorphismDribbbleComponent', () => {
  let component: NeumorphismDribbbleComponent;
  let fixture: ComponentFixture<NeumorphismDribbbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeumorphismDribbbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeumorphismDribbbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
