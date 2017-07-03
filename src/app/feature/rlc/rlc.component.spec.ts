import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RlcComponent } from './rlc.component';

describe('RlcComponent', () => {
  let component: RlcComponent;
  let fixture: ComponentFixture<RlcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RlcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
