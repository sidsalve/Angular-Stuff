import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpChildComponent } from './inp-child.component';

describe('InpChildComponent', () => {
  let component: InpChildComponent;
  let fixture: ComponentFixture<InpChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
