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

      if (splash && mainContent) { // Null checks
        // Optional: Add a fade-out effect
        splash.style.animation = 'fadeOut 1s ease-out forwards';

        // Show the main content after splash fades out
        setTimeout(() => {
          splash.style.display = 'none';
          mainContent.style.display = 'block';
        }, 2500); // Match the duration of the animation
      }
    });
  }

//   ngOnInit(): void {
//   window.addEventListener('load', () => {
//     const splash = document.getElementById('splash');
//     const mainContent = document.getElementById('main-content');

//     if (splash && mainContent) { // Null checks
//       // Optional: Add a fade-out effect
//       splash.style.animation = 'fadeOut 1s ease-out forwards';

//       // After everything has loaded
//       splash.addEventListener('animationend', () => {
//         splash.style.display = 'none';
//         mainContent.style.display = 'block';
//       });
//     }
//   });
// }
}
