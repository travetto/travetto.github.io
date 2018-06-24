import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {


  constructor(private ref: ElementRef) { }

  ngOnInit() {
  }

  scrollTo(anchor) {
    (this.ref.nativeElement as HTMLElement).querySelector(`#${anchor}`).scrollIntoView();
  }
}
