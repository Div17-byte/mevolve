import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeThreeComponent } from './customize-three.component';

describe('CustomizeThreeComponent', () => {
  let component: CustomizeThreeComponent;
  let fixture: ComponentFixture<CustomizeThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
