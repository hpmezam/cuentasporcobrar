import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliiniComponent } from './cliini.component';

describe('CliiniComponent', () => {
  let component: CliiniComponent;
  let fixture: ComponentFixture<CliiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
