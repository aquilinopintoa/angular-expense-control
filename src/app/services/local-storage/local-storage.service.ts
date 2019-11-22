import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  public get(label: string): any {
    const valueString = localStorage.getItem(label);

    if (!valueString) {
      return null;
    } else {
      return JSON.parse(valueString);
    }
  }

  public set(label: string, value: any): void {
    const valueString = JSON.stringify(value);
    localStorage.setItem(label, valueString);
  }
}
