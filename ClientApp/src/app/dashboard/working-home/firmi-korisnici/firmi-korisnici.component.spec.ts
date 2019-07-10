import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmiKorisniciComponent } from './firmi-korisnici.component';

describe('FirmiKorisniciComponent', () => {
  let component: FirmiKorisniciComponent;
  let fixture: ComponentFixture<FirmiKorisniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmiKorisniciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmiKorisniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
