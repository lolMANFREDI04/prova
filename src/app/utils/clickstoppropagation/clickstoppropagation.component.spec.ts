import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickstoppropagationComponent } from './clickstoppropagation.component';

describe('ClickstoppropagationComponent', () => {
  let component: ClickstoppropagationComponent;
  let fixture: ComponentFixture<ClickstoppropagationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickstoppropagationComponent]
    });
    fixture = TestBed.createComponent(ClickstoppropagationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
