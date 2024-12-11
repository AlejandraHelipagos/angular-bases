import { Component } from '@angular/core';
import { HeroComponent } from './heroe/components/hero/hero.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-angular';
}
