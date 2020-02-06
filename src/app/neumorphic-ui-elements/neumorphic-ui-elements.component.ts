import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neumorphic-ui-elements',
  templateUrl: './neumorphic-ui-elements.component.html',
  styleUrls: ['./neumorphic-ui-elements.component.css']
})
export class NeumorphicUiElementsComponent implements OnInit {

  private slider: HTMLInputElement;

  constructor() { }

  ngOnInit() {
    this.slider = <HTMLInputElement>document.getElementById('slider');
    this.slider.addEventListener('input', () => {
      this.actualizarSlider();
    })

  }

  actualizarSlider() {
    let sliderIndicator = document.getElementById('slider-indicator')
    let value: string = this.slider.value;
    this.slider.style.background = `linear-gradient(90deg, #1758f1 0%, #37dbe0 ${value}%, #343a40 ${value}%)`
    sliderIndicator.style.left = `${Number(value)}%`;
    document.querySelector('#slider-indicator span').innerHTML = `${Number(value)}%`;
  }

}
