import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  href = '';

  notice = '';
  // `
  // The initial version of the framework just launched into alpha. <a href="https://github.com/travetto/">Read more</a>
  // `;

  constructor(private router: Router) {
    router.events.subscribe(x => {
      this.href = router.url.split('/')[1];
    });
  }
}
