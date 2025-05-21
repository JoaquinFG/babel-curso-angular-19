import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerLocalComponent } from './beer-local.component';

describe('BeerLocalComponent', () => {
  let component: BeerLocalComponent;
  let fixture: ComponentFixture<BeerLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerLocalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
