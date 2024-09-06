import { Component } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { routes } from '../app.routes';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MaterialModule,
    MatIconModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  
  constructor(
    private router: Router,
    private location: Location
  ) { }

  goBack(): void {
    this.location.back();
  }

}
