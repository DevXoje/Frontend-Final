import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguageFormComponent } from './lenguage-form.component';

describe('LenguageFormComponent', () => {
  let component: LenguageFormComponent;
  let fixture: ComponentFixture<LenguageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenguageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
