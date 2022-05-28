import { TestBed, inject } from '@angular/core/testing';

import { SearchComponentService } from './search-component.service';

describe('SearchComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchComponentService]
    });
  });

  it('should be created', inject([SearchComponentService], (service: SearchComponentService) => {
    expect(service).toBeTruthy();
  }));
});
