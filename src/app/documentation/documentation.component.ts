import { Component, OnInit } from '@angular/core';

import { PAGES } from './pages';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  pages = PAGES;

  constructor() { }

  ngOnInit() {
  }

}
