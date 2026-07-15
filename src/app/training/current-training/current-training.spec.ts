import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTraining } from './current-training';

describe('CurrentTraining', () => {
  let component: CurrentTraining;
  let fixture: ComponentFixture<CurrentTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentTraining],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentTraining);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
