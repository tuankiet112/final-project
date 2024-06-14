import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ChatbotComponent implements OnInit {
  public messages: { sender: string, text: string }[] = [];
  public messageContent: string = '';
  public sender: 'Admin' | 'Employee' = 'Employee';
  public collapsed = true;
  public focused = false;

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    this.websocketService.getMessages().subscribe((event: MessageEvent) => {
      try {
        const message = JSON.parse(event.data);
        console.log('Received message:', message);
        this.messages.push(message);
      } catch (error) {
        console.error('Failed to parse message:', error);
      }
    });
  }

  sendMessage(): void {
    if (this.messageContent) {
      const message = { sender: this.sender, text: this.messageContent };
      this.websocketService.sendMessage(message);
      console.log('Sent message:', message);
      this.messages.push(message);  // Add the message to the messages array to immediately reflect it in the UI
      this.messageContent = '';
    }
  }

  switchSender(sender: 'Admin' | 'Employee'): void {
    this.sender = sender;
  }

  toggleChat(): void {
    this.collapsed = !this.collapsed;
  }
}
