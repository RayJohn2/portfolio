import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    MaterialModule,
    MatTooltipModule,
    RouterModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  constructor(
    private router: Router
  ) { }

  gotolinkedin() {
    window.open('https://www.linkedin.com/in/ray-john-dino/', '_blank');
  }
  gotogithub() {
    window.open('https://github.com/RayJohn2', '_blank');
  }
  gotocv() {
    window.open('https://drive.google.com/file/d/1ys6_zxnAo6IsSl2SeHREaCVCh_0IFLYX/view?usp=sharing', '_blank'); 
  }

  downloadFile() {
    const link = document.createElement('a');
    link.href = '/assets/files/cv-dino.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  

}
