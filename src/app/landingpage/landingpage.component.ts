import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent implements OnInit {
  isSmallScreen: boolean = false;
  isLargeScreen: boolean = false;

  constructor(private responsive: BreakpointObserver) {}
  ngOnInit(): void {
    this.responsive
      .observe([Breakpoints.Tablet, Breakpoints.Medium, Breakpoints.Handset])
      .subscribe((result) => {
        if (result.matches) {
          this.isSmallScreen = true;
          this.isLargeScreen = false;
        }
      });
    this.responsive.observe([Breakpoints.Large]).subscribe((result) => {
      if (result.matches) {
        this.isLargeScreen = true;
        this.isSmallScreen = false;
      }
    });
  }
}
