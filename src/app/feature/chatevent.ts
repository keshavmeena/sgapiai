
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Broadcaster } from "app/feature/broadcaster/broadcaster";

@Injectable()
export class ChatEvent {
  constructor(private broadcaster: Broadcaster) {}

  fire(data: string): void {
    this.broadcaster.broadcast(ChatEvent, data);
  }

  on(): Observable<string> {
    return this.broadcaster.on<string>(ChatEvent);
  }
}

