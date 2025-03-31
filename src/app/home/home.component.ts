import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dropdownOpen = false;
  menuOpen:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(event: Event) {
    event.preventDefault(); // Prevent navigation
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeMenu() {
    this.menuOpen = false; // Close menu on any item click
    this.dropdownOpen = false; // Optionally close dropdown
  }

}
