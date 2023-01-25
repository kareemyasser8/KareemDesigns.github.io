import { Component, OnInit } from '@angular/core';
import { slide } from './../animations';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [slide]
})
export class NavBarComponent implements OnInit {

  isSlideMenuToggled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
