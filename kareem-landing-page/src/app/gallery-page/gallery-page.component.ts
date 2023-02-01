import { Component, Input, OnInit } from '@angular/core';
import { fadeIn, startSlide } from '../animations';

@Component({
  selector: 'gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
  animations: [startSlide,fadeIn]
})

export class GalleryPageComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
