import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobiniComponent } from './cobini.component';

describe('CobiniComponent', () => {
  let component: CobiniComponent;
  let fixture: ComponentFixture<CobiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CobiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
