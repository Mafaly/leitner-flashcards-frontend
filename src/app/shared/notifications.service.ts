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
      buttons: ['OK'],
    });

    await alert.present();
  }

  /**
   * Display a success toast.
   * @param message The message to display.
   * @param duration The duration of the toast in seconds.
   */
  async successToast(message: string, duration: number = 2) {
    const toast = await this.toastController.create({
      message,
      duration: duration * 1000,
      color: 'success',
      icon: 'checkmark-circle'
    });
    await toast.present();
  }

  async errorToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'danger',
      icon: 'close-circle'
    });
    await toast.present();
  }
}
