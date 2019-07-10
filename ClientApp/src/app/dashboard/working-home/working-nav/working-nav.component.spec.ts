import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingNavComponent } from './working-nav.component';

describe('WorkingNavComponent', () => {
  let component: WorkingNavComponent;
  let fixture: ComponentFixture<WorkingNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
