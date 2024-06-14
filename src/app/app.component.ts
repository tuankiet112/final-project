import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, NgbRatingModule]
})
export class AppComponent {
  title = 'final-project';
}
