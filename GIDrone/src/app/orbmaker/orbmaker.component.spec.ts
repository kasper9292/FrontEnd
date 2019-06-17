import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbmakerComponent } from './orbmaker.component';

describe('OrbmakerComponent', () => {
  let component: OrbmakerComponent;
  let fixture: ComponentFixture<OrbmakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbmakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
