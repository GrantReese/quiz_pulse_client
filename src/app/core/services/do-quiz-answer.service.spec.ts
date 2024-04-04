import { TestBed } from '@angular/core/testing';

import { DoQuizAnswerService } from './do-quiz-answer.service';

describe('DoQuizAnswerService', () => {
  let service: DoQuizAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoQuizAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
