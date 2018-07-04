import { Component } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {


  character = null;

  characters = [
    { name: 'Frodo', weapon: 'Sting', race: 'Hobbit'}
    , { name: 'Aragorn', weapon: 'Sword', race: 'Human'}
    , { name: 'Legolas', weapon: 'Bow', race: 'Elf'}
    , { name: 'Gimli', weapon: 'Axe', race: 'Dwarf'}
  ];


  selectCharacter(character) {
    this.character = character;
  }

  deleteCharacter(event) {
    let index = this.characters.indexOf(event);
    if (index > -1)
      this.characters.splice(index, 1);

    this.character = null;
  }

 

}
