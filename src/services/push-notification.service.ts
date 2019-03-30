import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER_URL = 'https://pwa-server.azurewebsites.net/';

@Injectable()
export class PushNotificationService {
  constructor(private http: HttpClient) { }

  public sendSubscriptionToTheServer(subscription: PushSubscription, code: string) {
    const auth: ServerSubscription = {
      id: code,
      pushSubscription: subscription
    };

    return this.http.post(SERVER_URL + 'subscription', auth);
  }
}
