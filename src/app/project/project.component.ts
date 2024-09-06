import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    RouterModule,
    MatIconModule,
    MatTooltipModule 
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  private scrollPosition = { top: 0, left: 0 };

  ngOnInit() {
    // Listen for fullscreen change events
    document.addEventListener('fullscreenchange', this.onFullscreenChange.bind(this));
    document.addEventListener('webkitfullscreenchange', this.onFullscreenChange.bind(this));
    document.addEventListener('mozfullscreenchange', this.onFullscreenChange.bind(this));
    document.addEventListener('MSFullscreenChange', this.onFullscreenChange.bind(this));
  }

  ngOnDestroy() {
    // Clean up event listeners
    document.removeEventListener('fullscreenchange', this.onFullscreenChange.bind(this));
    document.removeEventListener('webkitfullscreenchange', this.onFullscreenChange.bind(this));
    document.removeEventListener('mozfullscreenchange', this.onFullscreenChange.bind(this));
    document.removeEventListener('MSFullscreenChange', this.onFullscreenChange.bind(this));
  }

  toggleFullscreen(event: Event) {
    const image = event.target as HTMLElement;

    if (!document.fullscreenElement) {
      // Save the current scroll position
      this.scrollPosition = {
        top: window.scrollY,
        left: window.scrollX
      };

      // Enter fullscreen
      if (image.requestFullscreen) {
        image.requestFullscreen();
      } else if ((image as any).webkitRequestFullscreen) { /* Safari */
        (image as any).webkitRequestFullscreen();
      } else if ((image as any).msRequestFullscreen) { /* IE11 */
        (image as any).msRequestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) { /* Safari */
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) { /* IE11 */
        (document as any).msExitFullscreen();
      }
    }
  }

  private onFullscreenChange() {
    // Restore the scroll position when exiting fullscreen
    if (!document.fullscreenElement) {
      window.scrollTo(this.scrollPosition.left, this.scrollPosition.top);
    }
  }
}
