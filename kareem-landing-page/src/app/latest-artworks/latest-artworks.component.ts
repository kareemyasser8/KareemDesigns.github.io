import { Component, OnInit } from '@angular/core';
import { fadeIn, startSlide } from '../animations';



@Component({
  selector: 'latest-artworks',
  templateUrl: './latest-artworks.component.html',
  styleUrls: ['./latest-artworks.component.scss'],
  animations: [startSlide, fadeIn]
})


export class LatestArtworksComponent implements OnInit {

  constructor() { }

  makeFadeOnScroll(){
    let images = document.querySelectorAll('.fade-in');
    let options = {
      rootMargin: "0px 0px -100px 0px"
    };
    let observer = new IntersectionObserver(
      (entries, observer)=>{
        entries.forEach(entry=>{
          if(!entry.isIntersecting) return;
          else{
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
          }
        })
      },options)

    images.forEach(image => {
      observer.observe(image)
  });

  }

  ngOnInit(): void {
    this.makeFadeOnScroll()
  }

}
