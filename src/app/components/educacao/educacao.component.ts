import { Component } from '@angular/core';

@Component({
  selector: 'app-educacao',
  templateUrl: './educacao.component.html',
  styleUrls: ['./educacao.component.css']
})
export class EducacaoComponent {
  title: string = 'Educação'
  universidade = {
    universidade1: 'Universidade de Havard',
    universidade2: 'Universidade de Massachusetts Dartmouth',
    universidade3: 'Universidade de Cambridge'
  }
  ano = {
    universidade1: '2019-2023'
  }
}
