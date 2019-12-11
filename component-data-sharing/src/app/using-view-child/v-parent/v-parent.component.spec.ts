import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VParentComponent } from './v-parent.component';

describe('VParentComponent', () => {
  let component: VParentComponent;
  let fixture: ComponentFixture<VParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
