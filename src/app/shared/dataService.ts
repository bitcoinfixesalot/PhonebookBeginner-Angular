import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Contact } from "./contact";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(private http: Http) {

    }

    public contacts: Contact[] = [];

    public loadContacts(): Observable<Contact[]> {
        return this.http.get("http://www.mocky.io/v2/581335f71000004204abaf83")
            .map((result: Response) => this.contacts = result.json().contacts);
    }
}