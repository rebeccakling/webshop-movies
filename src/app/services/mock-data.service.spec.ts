import { TestBed } from '@angular/core/testing'
import { MockDataService } from './mock.service'

describe('MockDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: MockDataService = TestBed.get(MockDataService)
    expect(service).toBeTruthy()
  })
})
