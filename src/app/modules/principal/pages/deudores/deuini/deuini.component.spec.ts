import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuiniComponent } from './deuini.component';

describe('DeuiniComponent', () => {
  let component: DeuiniComponent;
  let fixture: ComponentFixture<DeuiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeuiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeuiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
