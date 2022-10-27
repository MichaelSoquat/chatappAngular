import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  hasError: boolean = false;
  constructor() { }
}
