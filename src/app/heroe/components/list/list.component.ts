import { Component } from '@angular/core';

@Component({
  selector: 'app-list-heroes',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})

export class ListComponent {
  public heroNames: string[] = ['Spidermna', 'Iroman', 'Hulk'];
  public deleteHero?: string;

  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }

  reserList(): void {
    this.heroNames = ['Spidermna', 'Iroman', 'Hulk'];
  }
}
