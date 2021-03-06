import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDarkMode = false;
  constructor() { }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('darkmode'))) {
      this.toggleTheme();
    }
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkmode', JSON.stringify(this.isDarkMode));
    document.documentElement.style.setProperty('--background', this.isDarkMode ? '#101313' : '#fff');
    document.documentElement.style.setProperty('--text-primary', this.isDarkMode ? '#fff' : '#000');
    document.documentElement.style.setProperty('--background-light', this.isDarkMode ? '#1A0B04' : '#fff');
    document.documentElement.style.setProperty('--text-light', this.isDarkMode ? '#c5c5c5' : '#444');
    document.documentElement.style.setProperty('--accent', this.isDarkMode ? '#FB7F7D' : '#C72A28');
  }

}
