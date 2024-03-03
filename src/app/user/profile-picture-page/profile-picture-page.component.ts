import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {environment} from "../../../environments/environment";
import {NotificationsService} from "../../shared/notifications.service";

@Component({
  selector: 'app-profile-picture-page',
  templateUrl: './profile-picture-page.component.html',
  styleUrls: ['./profile-picture-page.component.scss'],
})
export class ProfilePicturePageComponent {
  selectedFile: File | null = null;
  protected readonly environment = environment;

  constructor(private readonly userService: UserService, private readonly notificationService: NotificationsService) {
  }

  fileSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  uploadFile(event: Event): void {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      this.userService.uploadProfilePicture(formData).subscribe({
          next: () => {
            this.selectedFile = null;
            this.notificationService.successToast('Profile picture uploaded. Refreshing page in 5 seconds...', 5);
            setTimeout(() => {
              window.location.reload();
            }, 5000);
          },
          error: () => {
            this.notificationService.errorAlert('Error uploading profile picture');
          }
        }
      )

    }
  }
}
