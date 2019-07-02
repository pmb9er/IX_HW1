import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



constructor(public alertController: AlertController, public toastController: ToastController) {}

async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'You pressed the button!',
    buttons: ['OK']
  });

  await alert.present();
}

async presentToast() {
  const toastAlert = await this.toastController.create({
    header: 'Toast',
    message: 'Most toast',
    duration: 2000,
    buttons: ['OK']
  });

  toastAlert.present();
  }

}
