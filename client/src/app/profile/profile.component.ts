import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  details: UserDetails;

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }
  getAge(){

    var today = new Date();

var yyyy = today.getFullYear();


    var eventStartTime = new Date(this.details.dateofbirth);
     var eventEndTime = Date.now();
     var duration = eventEndTime.valueOf() - eventStartTime.valueOf();
     return yyyy-eventStartTime.getFullYear();
  }
}
