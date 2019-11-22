import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';
import { APP_LABEL } from '../expense/expense.service';

class MockLocalStorage {
  public store: any = {};

  constructor() {}

  public getItem(key: string): string {
    return key in this.store ? this.store[key] : null;
  }

  public setItem(key: string, value: string): void {
    this.store[key] = `${value}`;
  }
}

describe('LocalStorageService', () => {
  let localStorageService: LocalStorageService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        LocalStorageService,
      ]
    });

    localStorageService = TestBed.get(LocalStorageService);
  });


  it('should be created', () => {
    expect(localStorageService).toBeTruthy();
  });

  it('get() should return null if localStorage have not anything from label', () => {
    const mockLocalStorage = new MockLocalStorage();

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem.bind(mockLocalStorage));

    const result = localStorageService.get(APP_LABEL);

    expect(result).toBeNull();
  });

  it('get() should return the data stored in local-storage to label', () => {
    const mockLabel = 'test';
    const mockStore = {
      store: {test: '1'}
    };
    const mockLocalStorage = new MockLocalStorage();

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem.bind(mockStore));

    const result = localStorageService.get(mockLabel);

    expect(result).toEqual(1);
  });

  it('set() should save the data in local-storage to label', () => {
    const mockLabel = 'test';
    const mockLocalStorage = new MockLocalStorage();

    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem.bind(mockLocalStorage));

    localStorageService.set(mockLabel, 1);

    expect(mockLocalStorage.store.test).toEqual('1');
  });

});
