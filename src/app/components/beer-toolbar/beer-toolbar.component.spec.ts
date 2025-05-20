import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerToolbarComponent } from './beer-toolbar.component';

describe('BeerToolbarComponent', () => {
  let component: BeerToolbarComponent;
  let fixture: ComponentFixture<BeerToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
