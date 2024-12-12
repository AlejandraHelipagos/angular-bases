import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../interface/charactet.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterById(id: string): void {
    //TODO: Emitir el ID
    this.onDelete.emit(id);
  }
}
