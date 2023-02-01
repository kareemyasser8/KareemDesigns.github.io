import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from './form.validators';
import { fadeIn, startSlide } from '../animations';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [startSlide, fadeIn]
})
export class ContactComponent implements OnInit {

  registerForm= this.fb.group({
    name: ['',[Validators.required, FormValidators.cannotContainNumbers]],
    email: ['',[Validators.required,
                Validators.email,
                FormValidators.cannotContainSpace
      ]],
    message: ['',Validators.required],
  })

  get name(){
    return this.registerForm.get('name');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get message(){
    return this.registerForm.get('message');
  }

  constructor(private fb: FormBuilder) {

  }

  onSubmit(): void {
    alert("Thanks for entering the data, This is a static site but I appreciate it")
    this.resetFrom();
  }

  resetFrom() {
    this.registerForm.reset();
  }

  animationOnScroll() {
    let form = document.querySelectorAll('.form-section');
    let options = {
      rootMargin: "0px 0px -100px 0px"
    };
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        else {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target)
        }
      })
    },options)

    form.forEach( form=> observer.observe(form))
  }


  ngOnInit(): void {
    this.animationOnScroll();
  }

}
