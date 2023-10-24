import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumHeaderComponent } from './curriculum-header.component';

describe('CurriculumHeaderComponent', () => {
  let component: CurriculumHeaderComponent;
  let fixture: ComponentFixture<CurriculumHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculumHeaderComponent]
    });
    fixture = TestBed.createComponent(CurriculumHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
