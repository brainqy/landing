import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit{
  name: string | undefined;
  email: string | undefined;
  countdown!: string;
  days!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;
  launchDate: Date = new Date("2024-05-10T00:00:00"); // Define launch date
  launchDay!: string;

  ngOnInit(): void {
    this.startCountdown();
  }
  subscribe() {
    // Here you can implement the logic to send subscription details to your backend or perform any other action
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    alert('Thank you for subscribing! We will notify you once our new website is launched.');
  }
  startCountdown(): void {
    setInterval(() => {
      const currentDate = new Date().getTime();
      const timeDifference = this.launchDate.getTime() - currentDate;
      if (timeDifference >= 0) {
        this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      } else {
        // Timer has reached zero or negative, indicating launch
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      }
    }, 1000);
  }
  getLaunchDate(): string {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.launchDay = daysOfWeek[this.launchDate.getDay()];
    const month = this.getMonthName(this.launchDate.getMonth());
    const dayOfMonth = this.launchDate.getDate();
    return ` ${month} ${dayOfMonth}`;
  }
  
  getMonthName(monthIndex: number): string {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthIndex];
  }
}
