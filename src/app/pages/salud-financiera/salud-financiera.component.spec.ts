import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludFinancieraComponent } from './salud-financiera.component';

describe('SaludFinancieraComponent', () => {
  let component: SaludFinancieraComponent;
  let fixture: ComponentFixture<SaludFinancieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludFinancieraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludFinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
