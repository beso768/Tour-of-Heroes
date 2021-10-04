import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}
  messages: string[] = [];
  add(mesage: string): void {
    this.messages.push(mesage);
  }

  clear(): void {
    this.messages = [];
  }
}
