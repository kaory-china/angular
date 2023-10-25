import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hidden = false;
  clicks = [];
  count = 0;

  onDisplayDetails() {
    this.hidden = true;
    this.count = this.count + 1;
    this.clicks.push(this.count);
  }

  getColor(c: number) {
    c >= 5 ? 'white' : 'black';
  }

}
