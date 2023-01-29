import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestArtworksComponent } from './latest-artworks.component';

describe('LatestArtworksComponent', () => {
  let component: LatestArtworksComponent;
  let fixture: ComponentFixture<LatestArtworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestArtworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestArtworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
