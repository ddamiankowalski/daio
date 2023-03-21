import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'daio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'daio';
  isLoading = false;
  isDisabled = false;

  checkbox = new FormControl(true, {});

  ngOnInit(): void {
    console.log('minti')
  }

  handler() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  }
}
