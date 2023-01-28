import { Component, OnInit } from '@angular/core';
import { fadeIn, startSlide } from '../animations';

@Component({
  selector: 'cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.scss'],
  animations:[startSlide,fadeIn]
})
export class CoverPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
