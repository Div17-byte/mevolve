import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansAvailableComponent } from './plans-available.component';

describe('PlansAvailableComponent', () => {
  let component: PlansAvailableComponent;
  let fixture: ComponentFixture<PlansAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansAvailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
