import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  animationOnScroll(){
    let form = document.querySelector('.form-section');
    let observer = new IntersectionObserver((entries,observer)=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting) return
        else{
          entry.target.classList.add("appear");
          observer.unobserve(entry.target)
        }
      })
    })

    form => observer.observe(form);
  }


  ngOnInit(): void {
    this.animationOnScroll();
  }

}
