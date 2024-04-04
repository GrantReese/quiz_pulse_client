import { TestBed } from '@angular/core/testing';

import { DoQuizService } from './do-quiz.service';

describe('DoQuizService', () => {
  let service: DoQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
