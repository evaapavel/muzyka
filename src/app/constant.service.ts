import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {



  pathToMusic: string = "../resources/music";



  constructor() { }



  getPathToMusic(): string {
    return this.pathToMusic;
  }



}
