import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPacientesPage } from './registro-pacientes.page';

describe('RegistroPacientesPage', () => {
  let component: RegistroPacientesPage;
  let fixture: ComponentFixture<RegistroPacientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
