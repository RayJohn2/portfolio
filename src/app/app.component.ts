import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ray-john-portfolio';
  ngOnInit(): void {
    window.addEventListener('load', () => {
      const splash = document.getElementById('splash');
      const mainContent = document.getElementById('main-content');

      if (splash && mainContent) { 
        splash.style.animation = 'fadeOut 1s ease-out forwards';
        setTimeout(() => {
          splash.style.display = 'none';
          mainContent.style.display = 'block';
        }, 2000);
      }
    });
  }
}
