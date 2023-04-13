import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IDaioWidget } from 'daio-ui/src/lib/widget-menu/interfaces/daio-widget.interface';

@Component({
  selector: 'daio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'daio';
  isLoading = false;
  isDisabled = false;

  widgets: IDaioWidget[] = [
    { title: 'Weather Component', subtitle: 'Is it windy?', image: '5', description: 'Explore the weather in different places of the world and make sure you always know wh...', yImagePos: '60%' },
    { title: 'Maps Component', subtitle: 'Simply explore the world', description: 'Explore the weather in different places of the world and make sure you always know wh...', image: '2', yImagePos: '30%' },
    { title: 'Your Accounts', subtitle: 'Organise your contacts', description: 'Explore the weather in different places of the world and make sure you always know wh...', image: '6', yImagePos: '0%' },
  ]

  checkbox = new FormControl({ value: false, disabled: true }, {});
  checkbox2 = new FormControl(false, {});
  input = new FormControl('', Validators.required);
  input2 = new FormControl({ value: 'test value', disabled: true }, Validators.required);

  ngOnInit(): void {
    this.checkbox.disable();

    setTimeout(() => {
      this.checkbox.enable();
      this.input2.enable();
    }, 2000);
  }

  handler() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  }
}
