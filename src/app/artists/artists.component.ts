import { Component, OnInit } from '@angular/core';
import { Directory } from '../directory';
import { DirectoryService } from '../directory.service';



@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {



  artists: Directory[];



  constructor(private directoryService: DirectoryService) { }



  ngOnInit(): void {
    this.getArtists();
  }



  getArtists(): void {
    this.artists = this.directoryService.getArtistDirectories();
  }



}
