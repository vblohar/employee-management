import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpFormComponent } from './add-emp-form.component';

describe('AddEmpFormComponent', () => {
  let component: AddEmpFormComponent;
  let fixture: ComponentFixture<AddEmpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEmpFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
