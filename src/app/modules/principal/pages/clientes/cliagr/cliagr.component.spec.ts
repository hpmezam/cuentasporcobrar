import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliagrComponent } from './cliagr.component';

describe('CliagrComponent', () => {
  let component: CliagrComponent;
  let fixture: ComponentFixture<CliagrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliagrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliagrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
