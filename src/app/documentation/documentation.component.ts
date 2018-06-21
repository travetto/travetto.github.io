import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { PAGES } from './pages';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DocumentationComponent implements OnInit {

  pages = PAGES;

  constructor() { }

  ngOnInit() {
  }

}
