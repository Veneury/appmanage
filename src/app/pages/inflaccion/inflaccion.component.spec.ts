import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InflaccionComponent } from './inflaccion.component';

describe('InflaccionComponent', () => {
  let component: InflaccionComponent;
  let fixture: ComponentFixture<InflaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InflaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InflaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
