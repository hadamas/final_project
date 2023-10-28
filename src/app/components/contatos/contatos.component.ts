import { Component, Input, OnInit } from '@angular/core';
import { default as peopleInfo } from '../../../assets/people-info.json'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent {
  contactForm!: FormGroup
  

  ngOnInit(){
    this.contactForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      mensagem: new FormControl('', [Validators.required])
    })
  }

  get eamil(){
    return this.contactForm.get('email')!
  }

  get mensagem(){
    return this.contactForm.get('mensagem')!
  }

  submit(){
    console.log('teste')
  }
}