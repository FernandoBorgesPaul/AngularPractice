
// Open MessageService and replace its contents with the following

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MessageService {

//   constructor() { }
// }
