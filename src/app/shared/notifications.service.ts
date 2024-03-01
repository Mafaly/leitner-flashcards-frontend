import {Injectable} from '@angular/core';
import {AlertController, ToastController} from "@ionic/angular";

@Injectable()
export class NotificationsService {

  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {
  }

  async errorAlert(message: string, header: string = 'Error') {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async successToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    await toast.present();
  }
}
