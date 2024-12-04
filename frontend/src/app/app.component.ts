import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { AlienService } from './services/alien.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nickname: string;

  data$: Observable<any>;
  alienService: AlienService;

  constructor(alienService: AlienService) {
    this.alienService = alienService;
    this.nickname = environment.nickname;
    this.data$ = alienService.getData();
  }
  sendNewMessage(text: any){
    const message = {
      "nickname": this.nickname,
      "message": text.target.value,
      "sentAt": Date.now()
    }
    this.alienService.sendData(message).subscribe({
      next: () => {
        this.data$ = this.alienService.getData();
        text.target.value= "";
      },
      error: (error) => console.error('Fehler beim Senden:', error)
    });
  }
}
