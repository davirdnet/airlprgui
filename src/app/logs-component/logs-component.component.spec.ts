
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsComponentComponent } from './logs-component.component';

describe('LogsComponentComponent', () => {
  let component: LogsComponentComponent;
  let fixture: ComponentFixture<LogsComponentComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
