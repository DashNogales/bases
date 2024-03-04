import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})


export class ListDbzComponent {

  @Input()
  public characterList: Character[] = [{
    name:'Trunks',
    power: 10
  }]

  //ondeleted = Index value: number;
@Output()
public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void{
   // console.log({index});
  if( !id ) return;

  console.log({id})
   this.onDelete.emit(id);

  }

}
