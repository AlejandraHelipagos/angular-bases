import { Injectable } from '@angular/core';
import { Character } from '../interface/charactet.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 100,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 80,
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 70,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: uuid(),
    };

    console.log(newCharacter);

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((c) => c.id !== id);
  }
}
