import { Component, OnInit } from '@angular/core';
import { DataService } from "./shared/dataService";
import { Contact } from './shared/contact';
import { reverse } from 'dns';
import { element } from 'protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public contacts: Contact[];

  title = 'Phonebook';

  constructor(private data: DataService) {
      this.contacts = data.contacts;
  }

  ngOnInit() {
      this.data.loadContacts()
          .subscribe(() => this.contacts = this.data.contacts);
  }

  key: string = 'name';
  reverse: boolean = false;
  sort(name){
    this.key = name;
    this.reverse = !this.reverse;
  }

  canShowUp(name){
    if(name == this.key && this.reverse) return true;
    else return false;
  }

  canShowDown(name){
    if(name == this.key && !this.reverse) return true;
    else return false;
  }
}