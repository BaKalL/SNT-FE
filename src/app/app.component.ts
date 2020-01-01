import { Component, OnInit } from '@angular/core';
import { IgxIconService } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'SNT';
  constructor(private iconService: IgxIconService) { }
  ngOnInit(): void {
    this.iconService.addSvgIcon('h-black','/assets/icon/h-black.svg','filter-icons');
  }
}
