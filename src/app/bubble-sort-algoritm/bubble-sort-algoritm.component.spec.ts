import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleSortAlgoritmComponent } from './bubble-sort-algoritm.component';

describe('BubbleSortAlgoritmComponent', () => {
  let component: BubbleSortAlgoritmComponent;
  let fixture: ComponentFixture<BubbleSortAlgoritmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubbleSortAlgoritmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleSortAlgoritmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
