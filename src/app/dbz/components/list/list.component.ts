import { Component, Input } from '@angular/core';

import { Character } from '../../interface/charactet.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];
}
