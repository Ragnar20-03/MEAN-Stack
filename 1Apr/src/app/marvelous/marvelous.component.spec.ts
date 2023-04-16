import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelousComponent } from './marvelous.component';

describe('MarvelousComponent', () => {
  let component: MarvelousComponent;
  let fixture: ComponentFixture<MarvelousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
