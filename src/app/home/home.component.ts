import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../app.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() storedTheme: string | null = localStorage.getItem('theme-color');
  @Input() showBackX: boolean = false;
}
