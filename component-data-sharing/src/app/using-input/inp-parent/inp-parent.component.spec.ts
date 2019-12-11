import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpParentComponent } from './inp-parent.component';

describe('InpParentComponent', () => {
  let component: InpParentComponent;
  let fixture: ComponentFixture<InpParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
