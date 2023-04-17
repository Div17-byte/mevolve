import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeFourComponent } from './customize-four.component';

describe('CustomizeFourComponent', () => {
  let component: CustomizeFourComponent;
  let fixture: ComponentFixture<CustomizeFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizeFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
