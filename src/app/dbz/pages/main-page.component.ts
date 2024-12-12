import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../interface/charactet.interface';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 100,
    },
    {
      name: 'Vegeta',
      power: 80,
    },
    {
      name: 'Gohan',
      power: 70,
    },
  ];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }
}
