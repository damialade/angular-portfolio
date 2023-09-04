import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', '../app.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Input() storedTheme: string | null = localStorage.getItem('theme-color');
}
