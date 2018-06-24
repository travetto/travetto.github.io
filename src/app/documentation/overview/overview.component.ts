import { Component, OnInit } from '@angular/core';

import { PAGES } from '../pages';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  pages = PAGES;

  constructor() { }

  ngOnInit() {
  }

}
