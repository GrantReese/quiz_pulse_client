import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesDeleteComponent } from './quizzes-delete.component';

describe('QuizzesDeleteComponent', () => {
  let component: QuizzesDeleteComponent;
  let fixture: ComponentFixture<QuizzesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizzesDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizzesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
