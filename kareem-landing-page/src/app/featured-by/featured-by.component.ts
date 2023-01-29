import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'featured-by',
  templateUrl: './featured-by.component.html',
  styleUrls: ['./featured-by.component.scss']
})
export class FeaturedByComponent implements OnInit {

  constructor() { }

  onScrollAnimation() {
    let logos = document.querySelectorAll('.fade-in');
    let options = {};
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          else {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target)
          }
        })
      }
    )

    logos.forEach(logo=>{
      observer.observe(logo)
    })

  }

  ngOnInit(): void {
    this.onScrollAnimation()
  }

}
