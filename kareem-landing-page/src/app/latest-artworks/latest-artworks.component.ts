import { Component, OnInit } from '@angular/core';
import { fadeIn, startSlide } from '../animations';

@Component({
  selector: 'latest-artworks',
  templateUrl: './latest-artworks.component.html',
  styleUrls: ['./latest-artworks.component.scss'],
  animations:[startSlide,fadeIn]
})
export class LatestArtworksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
