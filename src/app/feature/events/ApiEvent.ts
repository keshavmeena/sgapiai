import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Broadcaster } from "app/feature/broadcaster/broadcaster";

@Injectable()
export class ApiEvent {
  constructor(private broadcaster: Broadcaster) {}

  fire(data: IBroadcastEvent): void {
    this.broadcaster.broadcast(ApiEvent, data);
  }

  on(): Observable<IBroadcastEvent> {
    return this.broadcaster.on<IBroadcastEvent>(ApiEvent);
  }
}