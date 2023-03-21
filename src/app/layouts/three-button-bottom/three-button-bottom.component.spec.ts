import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeButtonBottomComponent } from './three-button-bottom.component';

describe('ThreeButtonBottomComponent', () => {
  let component: ThreeButtonBottomComponent;
  let fixture: ComponentFixture<ThreeButtonBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeButtonBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeButtonBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
