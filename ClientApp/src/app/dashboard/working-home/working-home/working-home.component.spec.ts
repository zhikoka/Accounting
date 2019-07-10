import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingHomeComponent } from './working-home.component';

describe('WorkingHomeComponent', () => {
  let component: WorkingHomeComponent;
  let fixture: ComponentFixture<WorkingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
