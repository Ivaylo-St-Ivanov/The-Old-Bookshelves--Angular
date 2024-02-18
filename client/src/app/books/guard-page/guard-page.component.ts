import { Component } from '@angular/core';

@Component({
  selector: 'app-guard-page',
  templateUrl: './guard-page.component.html',
  styleUrls: ['./guard-page.component.css']
})
export class GuardPageComponent {
    hovered: boolean = false;

    setHovered(state: boolean) {
      this.hovered = state;
    }
}
