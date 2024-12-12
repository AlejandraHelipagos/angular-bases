import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Iroman';
  public age: string = '43';

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Ale';
  }

  changeAge(): void {
    this.age = '27';
  }

  reset(): void {
    this.name = '43';
    this.age = 'Iroman';
  }
}
