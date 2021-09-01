import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracterEmpleadoCComponent } from './caracter-empleado-c.component';

describe('CaracterEmpleadoCComponent', () => {
  let component: CaracterEmpleadoCComponent;
  let fixture: ComponentFixture<CaracterEmpleadoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracterEmpleadoCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracterEmpleadoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
