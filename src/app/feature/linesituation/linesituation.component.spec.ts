import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesituationComponent } from './linesituation.component';

describe('LinesituationComponent', () => {
  let component: LinesituationComponent;
  let fixture: ComponentFixture<LinesituationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesituationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
