import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedByComponent } from './featured-by.component';

describe('FeaturedByComponent', () => {
  let component: FeaturedByComponent;
  let fixture: ComponentFixture<FeaturedByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedByComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
