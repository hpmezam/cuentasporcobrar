import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobagrComponent } from './cobagr.component';

describe('CobagrComponent', () => {
  let component: CobagrComponent;
  let fixture: ComponentFixture<CobagrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobagrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CobagrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
