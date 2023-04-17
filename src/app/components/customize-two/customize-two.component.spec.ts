import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeTwoComponent } from './customize-two.component';

describe('CustomizeTwoComponent', () => {
  let component: CustomizeTwoComponent;
  let fixture: ComponentFixture<CustomizeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
