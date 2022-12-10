import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialCeditoComponent } from './historial-cedito.component';

describe('HistorialCeditoComponent', () => {
  let component: HistorialCeditoComponent;
  let fixture: ComponentFixture<HistorialCeditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialCeditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialCeditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
