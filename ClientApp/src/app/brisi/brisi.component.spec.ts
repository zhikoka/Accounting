import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrisiComponent } from './brisi.component';

describe('BrisiComponent', () => {
  let component: BrisiComponent;
  let fixture: ComponentFixture<BrisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
