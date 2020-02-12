import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() active: boolean = false;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
    console.log(this.title, this.active)
  }

}
