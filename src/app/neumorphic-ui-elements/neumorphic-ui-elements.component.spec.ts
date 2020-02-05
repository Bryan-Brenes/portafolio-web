import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeumorphicUiElementsComponent } from './neumorphic-ui-elements.component';

describe('NeumorphicUiElementsComponent', () => {
  let component: NeumorphicUiElementsComponent;
  let fixture: ComponentFixture<NeumorphicUiElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeumorphicUiElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeumorphicUiElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
