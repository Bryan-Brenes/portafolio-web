import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('hamButton').addEventListener('click', () => {
      document.getElementById('sideMenu').style.transform = 'translateX(0px)';
    });

    document.getElementById('closeButton').addEventListener('click', () => {
      document.getElementById('sideMenu').style.transform = 'translateX(-100%)';
    });
  }

}
