import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {
  isRiv: boolean = false;
  isAdv: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadContent(id);
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  loadContent(id: string) {
    if (id === 'rivington-collection') {
      this.isRiv = true;
    } else if (id === 'advanced-energy') {
      this.isAdv = true;
    } 
  }

}
