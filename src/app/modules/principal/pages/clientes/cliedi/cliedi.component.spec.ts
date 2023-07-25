import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliediComponent } from './cliedi.component';

describe('CliediComponent', () => {
  let component: CliediComponent;
  let fixture: ComponentFixture<CliediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliediComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
