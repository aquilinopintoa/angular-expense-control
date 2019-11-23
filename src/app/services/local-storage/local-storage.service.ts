import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  public get<T>(label: string): T {
    const valueString = localStorage.getItem(label);

    if (!valueString) {
      return null;
    } else {
      return JSON.parse(valueString);
    }
  }

  public set<T>(label: string, value: T): void {
    const valueString = JSON.stringify(value);
    localStorage.setItem(label, valueString);
  }
}
