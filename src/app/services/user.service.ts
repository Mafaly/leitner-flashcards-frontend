import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  backendUrl = environment.backendUrl;

  constructor(private http: HttpClient) {
  }

  uploadProfilePicture(file: FormData) {
    return this.http.post(
      `${this.backendUrl}/users/profile-picture`,
      file,
      {headers: {contentType: 'multipart/form-data'}}
    );
  }

}
