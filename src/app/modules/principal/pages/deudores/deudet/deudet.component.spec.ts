import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeudetComponent } from './deudet.component';

describe('DeudetComponent', () => {
  let component: DeudetComponent;
  let fixture: ComponentFixture<DeudetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeudetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeudetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
