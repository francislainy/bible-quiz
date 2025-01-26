import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSubjectListComponent } from './inner-subject-list.component';

describe('InnerSubjectListComponent', () => {
  let component: InnerSubjectListComponent;
  let fixture: ComponentFixture<InnerSubjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerSubjectListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerSubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
