import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'daio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'daio';
  isLoading = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = true;
    }, 2000)
  }
}
