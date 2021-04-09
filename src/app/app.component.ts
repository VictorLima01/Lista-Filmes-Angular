import { Component, OnInit } from '@angular/core';
import * as data from './filmes.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.filmes = data;
    console.log(data)
  }
  title = 'filmes';
  public filmes: any;
}
