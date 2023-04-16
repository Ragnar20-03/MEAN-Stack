import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrintrComponent } from './strintr.component';

describe('StrintrComponent', () => {
  let component: StrintrComponent;
  let fixture: ComponentFixture<StrintrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrintrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrintrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
