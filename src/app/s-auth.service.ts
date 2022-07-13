import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SAuthService {

  constructor() { }

public getToken():boolean{
  // This fx will send an APIcall with username and password, and store token
  return true;
}

}
