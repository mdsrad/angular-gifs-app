import { Component, Input } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';
import { GifsService } from 'src/app/gifs/services/gifs.services';
import { SearchBoxComponent } from 'src/app/gifs/components/search-box/search-box.component';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService:GifsService){}

  searchTag( tag:string):void{
    this.gifsService.searchTag(tag);
  }

  get tags(): string[]{
    return this.gifsService.tagsHistory;
  }
}
