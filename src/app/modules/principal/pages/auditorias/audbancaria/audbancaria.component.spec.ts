import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudbancariaComponent } from './audbancaria.component';

describe('AudbancariaComponent', () => {
  let component: AudbancariaComponent;
  let fixture: ComponentFixture<AudbancariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudbancariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudbancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
