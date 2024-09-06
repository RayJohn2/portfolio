import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';

@Component({
  selector: 'app-contactpage',
  standalone: true,
  imports: [
    MaterialModule,
    RouterModule
  ],
  templateUrl: './contactpage.component.html',
  styleUrl: './contactpage.component.scss'
})
export class ContactpageComponent {
  email: string = 'rayjohndino123@gmail.com'
  selectedTab: string = '';

  constructor(
    private router: Router
  ) { }


  gotoemail() {
    const email = 'rayjohndino123@gmail.com';
    const subject = 'Inquiry About Potential Collaboration';
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
    window.open(gmailLink, '_blank');
  }

  gotogithub() {
    window.open('https://github.com/RayJohn2', '_blank');
  }
}
