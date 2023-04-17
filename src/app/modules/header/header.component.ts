import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  links = ['Home', 'Features', 'Pricing', 'Contact Us'];
  selectedLink = 0;
  showMenu = false;

  test(i: number) {
    console.log('i:', i);
    this.selectedLink = i;
    console.log('this.selectedLink:', this.selectedLink);
  }
}
