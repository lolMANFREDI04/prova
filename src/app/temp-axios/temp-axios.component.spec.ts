import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempAxiosComponent } from './temp-axios.component';

describe('TempAxiosComponent', () => {
  let component: TempAxiosComponent;
  let fixture: ComponentFixture<TempAxiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempAxiosComponent]
    });
    fixture = TestBed.createComponent(TempAxiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
