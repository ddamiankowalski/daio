import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'daio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'daio';
  isLoading = false;
  isDisabled = false;

  checkbox = new FormControl(false, {});
  checkbox2 = new FormControl(false, {});
  input = new FormControl('', Validators.required);

  ngOnInit(): void {
    this.checkbox.disable();

    setTimeout(() => {
      this.checkbox.enable();
    }, 2000);
  }

  handler() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  }
}
