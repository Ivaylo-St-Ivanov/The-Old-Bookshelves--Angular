import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedBooksComponent } from './used-books.component';

describe('UsedBooksComponent', () => {
  let component: UsedBooksComponent;
  let fixture: ComponentFixture<UsedBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsedBooksComponent]
    });
    fixture = TestBed.createComponent(UsedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
