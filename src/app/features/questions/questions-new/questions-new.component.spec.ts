import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsNewComponent } from './questions-new.component';

describe('QuestionsNewComponent', () => {
  let component: QuestionsNewComponent;
  let fixture: ComponentFixture<QuestionsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionsNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
