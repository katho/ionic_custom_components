import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;
  
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [{
        text: 'Ok',
        cssClass: 'primary',
        handler: (blah) => {
          console.log('Confirm Ok: blah');
        }
      },
      {
        text: 'Cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }
    ]
    });

    await alert.present();
  }

  async presentPromptAlert(){
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        }
      ],
      buttons: [{
        text: 'Ok',
        cssClass: 'primary',
        handler: (blah) => {
          this.titulo = blah.name1;
          console.log('Confirm Ok: blah '+this.titulo);
        }
      },
      {
        text: 'Cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah '+this.titulo);
        }
      }
    ]
    });

    await alert.present();
  }

}
