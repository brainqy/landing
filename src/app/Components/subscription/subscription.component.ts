import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {
  name: string | undefined;
  email: string | undefined;

  subscribe() {
    // Here you can implement the logic to send subscription details to your backend or perform any other action
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    alert('Thank you for subscribing! We will notify you once our new website is launched.');
  }
}
