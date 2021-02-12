import { Component } from '@angular/core';
import { FetchService } from './services/fetch.service';
// import { FilterPipe } from './pipes/filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filter-app';

  searchWord: string;
  listData: any[] = [];
  
  constructor(private api: FetchService) {
    this.searchWord = '';
  }

  ngOnInit(){
    this.list();
  }

  async list() {
    const aData: any = await this.api.apiDatas('https://api.publicapis.org/categories');

    if (aData.statusCode == 200) {
      this.listData = aData.data;
    }

  }
}
