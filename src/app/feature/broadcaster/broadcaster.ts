import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';


export class Broadcaster {
  private _eventBus: Subject<IBroadcastEvent>;

  constructor() {
    this._eventBus = new Subject<IBroadcastEvent>();
  }

  broadcast(action: any, parameters?: any) {
    this._eventBus.next({action, parameters});
  }

  on<T>(key: any): Observable<T> {
    return this._eventBus.asObservable()
      .filter(event => event.action === key)
      .map(event => <T>event.parameters);
  }
}