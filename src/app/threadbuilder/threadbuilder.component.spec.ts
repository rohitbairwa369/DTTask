import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadbuilderComponent } from './threadbuilder.component';

describe('ThreadbuilderComponent', () => {
  let component: ThreadbuilderComponent;
  let fixture: ComponentFixture<ThreadbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadbuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreadbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
