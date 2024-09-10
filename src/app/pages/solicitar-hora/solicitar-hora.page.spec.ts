import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitarHoraPage } from './solicitar-hora.page';

describe('SolicitarHoraPage', () => {
  let component: SolicitarHoraPage;
  let fixture: ComponentFixture<SolicitarHoraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarHoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
