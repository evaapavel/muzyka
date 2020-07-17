import { Injectable } from '@angular/core';
import { ConstantService } from './constant.service';
import { Directory } from './directory';



@Injectable({
  providedIn: 'root'
})
export class DirectoryService {



  constructor(private constantService: ConstantService) { }



  /**
   * Gets a list of artists as a list of directories.
   */
  getArtistDirectories(): Directory[] {

    // This is just fake data. It is necessary to read it from the file system.
    // Use ConstantService to get a path to the music directory.
    const ARTISTS: Directory[] = [
      { name: 'Adele',          subdirectories: [],         files: [] },
      { name: 'Queen',          subdirectories: [],         files: [] },
      { name: 'Slade',          subdirectories: [],         files: [] },
    ];

    return ARTISTS;

  }



}
