import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeFiveComponent } from './customize-five.component';

describe('CustomizeFiveComponent', () => {
  let component: CustomizeFiveComponent;
  let fixture: ComponentFixture<CustomizeFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizeFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
