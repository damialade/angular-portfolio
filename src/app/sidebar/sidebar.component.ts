//@ts-nocheck
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss', '../app.component.scss'],
})
export class SidebarComponent implements OnInit {
  show: boolean = false;
  buttonName: any = 'Show';

  constructor() {}
  ngOnInit(): void {}

  @Input() storedTheme: string | null = localStorage.getItem('theme-color');

  toggle() {
    this.show = !this.show;
    if (this.show) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }
}
