import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestiononeComponent } from './questionone.component';

describe('QuestiononeComponent', () => {
  let component: QuestiononeComponent;
  let fixture: ComponentFixture<QuestiononeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestiononeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestiononeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
