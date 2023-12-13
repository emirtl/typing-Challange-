import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
//faker
import { faker } from '@faker-js/faker';
//primeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonModule, CardModule,InputTextModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 randomText=faker.lorem.sentence()
  enteredtext=''


  handleEvent(value:string) {
    this.enteredtext=value
  }

  compare(letter: string, enteredLetter: string) {
    if(!enteredLetter){
      return 'pending'
    }
    return letter===enteredLetter?'correct':'incorrect'
  }
}
