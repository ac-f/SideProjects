import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  password: string = '';

  checkBtnValid(){
    return (!this.includeLetters && !this.includeNumbers && !this.includeSymbols) || this.length <= 0;
  }
  onChangeLength(event: Event) {
    const eventValue = (event.target as HTMLInputElement).value;
    if (isNaN(+eventValue)) {
      length = 0;
    }
    this.length = +eventValue;

  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onGeneratePassword() {
    const numbers: string = '0123456789';
    const letters: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols: string = '!@#$%^&*()';
    let validChars: string = '';
    let generatedPassword: string = '';
    if (this.includeLetters) validChars += letters;
    if (this.includeNumbers) validChars += numbers;
    if (this.includeSymbols) validChars += symbols;
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
