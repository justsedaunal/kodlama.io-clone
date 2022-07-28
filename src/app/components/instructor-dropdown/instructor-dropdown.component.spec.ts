import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDropdownComponent } from './instructor-dropdown.component';

describe('InstructorDropdownComponent', () => {
  let component: InstructorDropdownComponent;
  let fixture: ComponentFixture<InstructorDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
