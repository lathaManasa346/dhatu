import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curtain',
  templateUrl: './curtain.component.html',
  styleUrls: ['./curtain.component.scss']
})
export class CurtainComponent implements OnInit {
  isOpen = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openHomePage() {
    this.isOpen = true;
    setTimeout(() => {
      this.router.navigate(['/home']); // Change route after animation
    }, 1000);
  }
}
