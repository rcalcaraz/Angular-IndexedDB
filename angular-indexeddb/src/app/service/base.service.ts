import { Injectable } from '@angular/core';
import { IdbService } from './idb.service';

export class BaseService {

  constructor() {
    this.connection.setLogStatus(true);
  }

  get connection() {
    return IdbService.idbCon;
  }
}
