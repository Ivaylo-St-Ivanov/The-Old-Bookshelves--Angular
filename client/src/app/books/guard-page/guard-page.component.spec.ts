import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardPageComponent } from './guard-page.component';

describe('GuardPageComponent', () => {
  let component: GuardPageComponent;
  let fixture: ComponentFixture<GuardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardPageComponent]
    });
    fixture = TestBed.createComponent(GuardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
