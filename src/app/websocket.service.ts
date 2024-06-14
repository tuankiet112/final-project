import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private ws: WebSocket | undefined;
  private subject: Subject<MessageEvent> | undefined;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    
    if (this.isBrowser) {
      this.ws = new WebSocket('ws://localhost:8080');
      this.subject = new Subject<MessageEvent>();

      this.ws.onmessage = (event) => {
        this.handleMessage(event);
      };
      this.ws.onerror = (event) => this.subject?.error(event);
      this.ws.onclose = (event) => this.subject?.complete();
    }
  }

  private async handleMessage(event: MessageEvent) {
    let data: any;

    if (event.data instanceof Blob) {
      data = await event.data.text();
    } else {
      data = event.data;
    }

    console.log('Message received in WebSocket service:', data);

    this.subject?.next(new MessageEvent('message', { data }));
  }

  getMessages(): Observable<MessageEvent> {
    return this.subject?.asObservable() || new Observable<MessageEvent>();
  }

  sendMessage(message: { sender: string, text: string }): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message));
      console.log('Message sent from WebSocket service:', message);
    } else {
      console.error('WebSocket is not open. Unable to send message.');
    }
  }
}
