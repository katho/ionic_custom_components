import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-time',
  templateUrl: './data-time.page.html',
  styleUrls: ['./data-time.page.scss'],
})
export class DataTimePage implements OnInit {

  dob: Date = new Date();
  customPickerOptions: any;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: ( event) => {
          console.log('Clicked Save!');
          console.log(event);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  onCambioFecha(event){
    console.log('ionChange', event);
    console.log('Date', new Date( event.detail.value));
  }


}
