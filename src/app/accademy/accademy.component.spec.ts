import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccademyComponent } from './accademy.component';

describe('AccademyComponent', () => {
  let component: AccademyComponent;
  let fixture: ComponentFixture<AccademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccademyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
