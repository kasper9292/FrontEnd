import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PakketlijstComponent } from './pakketlijst.component';

describe('PakketlijstComponent', () => {
  let component: PakketlijstComponent;
  let fixture: ComponentFixture<PakketlijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PakketlijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PakketlijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
