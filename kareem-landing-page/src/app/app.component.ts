import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {

  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(section){
    const targetRect = document.getElementById(section).getBoundingClientRect();

    window.scrollTo({
      top: targetRect.top + window.pageYOffset - 65,
      left: targetRect.left + window.pageXOffset,
      behavior: "smooth",
    });

  }


  showTopBtn = function () {
    let topBtn = document.querySelector(".goTopBtn");
    let y = window.scrollY;
    topBtn.classList.toggle("show", y >= 154);
  }


  ngOnInit(): void {
    window.addEventListener("scroll", this.showTopBtn);
  }
  title = 'Kareem Photoshop Art';

}
