import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterComponent } from './butter.component';

describe('ButterComponent', () => {
  let component: ButterComponent;
  let fixture: ComponentFixture<ButterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
