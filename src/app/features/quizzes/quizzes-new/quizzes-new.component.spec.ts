import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesNewComponent } from './quizzes-new.component';

describe('QuizzesNewComponent', () => {
  let component: QuizzesNewComponent;
  let fixture: ComponentFixture<QuizzesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizzesNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizzesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
