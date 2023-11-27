import { TestBed } from '@angular/core/testing';

import { TodoStatusService } from './todo-status.service';

describe('TodoStatusService', () => {
  let service: TodoStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
