import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
