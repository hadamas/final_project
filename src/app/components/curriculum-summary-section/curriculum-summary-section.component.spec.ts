import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumSummarySectionComponent } from './curriculum-summary-section.component';

describe('CurriculumSummarySectionComponent', () => {
  let component: CurriculumSummarySectionComponent;
  let fixture: ComponentFixture<CurriculumSummarySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculumSummarySectionComponent]
    });
    fixture = TestBed.createComponent(CurriculumSummarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
