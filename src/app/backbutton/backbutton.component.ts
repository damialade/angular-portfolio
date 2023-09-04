import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.scss'],
})
export class BackbuttonComponent {
  @Input() storedTheme: string | null = localStorage.getItem('theme-color');

  constructor(private router: Router) {}
  goHome() {
    this.router.navigate(['/']);
  }
}
