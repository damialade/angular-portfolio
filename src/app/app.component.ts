import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { fadeAnimation } from './animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent implements OnInit {
  title = 'my-angular-portfolio';
  storedTheme: string | null = localStorage.getItem('theme-color');
  showStyle: boolean = false;
  showMenuX: boolean = false;
  showBackX: boolean = false;

  constructor(private responsive: BreakpointObserver, private router: Router) {}
  ngOnInit(): void {
    this.responsive
      .observe([Breakpoints.Tablet, Breakpoints.Medium, Breakpoints.Handset])
      .subscribe(() => {
        this.showMenuX = false;
        this.showBackX = true;
      });
    this.responsive.observe([Breakpoints.Large]).subscribe((result) => {
      if (result.matches) {
        this.showMenuX = true;
        this.showBackX = false;
      }
    });
  }

  styleSwitcher() {
    this.showStyle = !this.showStyle;
  }

  setTheme(theme: any) {
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');
  }
}
