import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { slide } from './../animations';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [slide]
})
export class NavBarComponent implements OnInit {

  isSlideMenuToggled: boolean;
  @Output() tab = new EventEmitter<string>();


  closeMobileNav(){
    this.isSlideMenuToggled = false;
  }

  onClickTab(section): void{
    this.tab.emit(section)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
