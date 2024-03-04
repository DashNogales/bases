import { Character } from './../../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class dbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'krillin',
    power: 1000
  },{
    id: uuid(),
    name:'Goku',
    power: 9500
  },{
    id: uuid(),
    name:'Vegeta',
    power: 7500
  }];

addCharacter(character: Character ):void{
  const newCharacter: Character = { id: uuid(), ...character}
  this.characters.unshift(newCharacter);
  // console.log('MainPage');
  // console.log(character);
}
deletedCharacterById(id:string){
  this.characters = this.characters.filter(character => character.id !== id);
}
// onDeletedCharacter(index:number){
//   this.characters.splice(index,1);
// }


  constructor() { }

}
