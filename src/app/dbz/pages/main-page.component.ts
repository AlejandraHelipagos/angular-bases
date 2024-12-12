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
      id: 5,
      name: 'Goku',
      power: 100,
    },
    {
      id: 6,
      name: 'Vegeta',
      power: 80,
    },
    {
      id: 7,
      name: 'Gohan',
      power: 70,
    },
  ];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDeleteCharacter(id: number): void {
    this.characters = this.characters.filter(c => c.id !== id);
  }
}
