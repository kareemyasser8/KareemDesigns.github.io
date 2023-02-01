import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(){

  }

  showTopBtn = function(){
    let topBtn = document.querySelector(".goTopBtn");
    let y = window.scrollY;
    topBtn.classList.toggle("show",y >= 154);
  }


  ngOnInit(): void {
    window.addEventListener("scroll", this.showTopBtn);
  }
  title = 'Kareem Photoshop Art';

}
