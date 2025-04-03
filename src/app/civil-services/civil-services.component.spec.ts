import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilServicesComponent } from './civil-services.component';

describe('CivilServicesComponent', () => {
  let component: CivilServicesComponent;
  let fixture: ComponentFixture<CivilServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivilServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
