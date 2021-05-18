import { Injectable } from "@angular/core";
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ContactsService {
  constructor(public http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  getContacts() {
    return this.http
      .get("../../assets/backend/contacts.json")
      .subscribe((data) => {
        console.log(data);
      });
  }
  signup(body: any) {
    return this.http.post(
      "http://localhost:3333/zt/users/register",
      body,
      this.httpOptions
    );
  }
}
