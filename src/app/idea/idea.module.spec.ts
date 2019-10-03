import { TestBed } from '@angular/core/testing';

import { Ideamodule } from './idea.module';

describe('Ideamodule', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ideamodule = TestBed.get(Ideamodule);
    expect(service).toBeTruthy();
  });
});
