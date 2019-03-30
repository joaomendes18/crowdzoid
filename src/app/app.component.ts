import { Component, ViewEncapsulation } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushNotificationService } from '../services/push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  readonly VAPID_PUBLIC_KEY = 'BJy-jma_e6qDqVSR25atnXAeagHTAAdqi6Fi4LEmT2GUKS-fdyA17VZM0Ms5ODLwsg15op09nFcSnOGmgwfpxBM';
  code: string = "";

  constructor(protected swPush: SwPush, public pushService: PushNotificationService) {
    this.code = this.createUID();

    swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(subscription => {
      pushService.sendSubscriptionToTheServer(subscription, this.code).subscribe();
    }).catch(console.error);
  }

  createUID(): string {
    return 'xxxx-xx-xx'.replace(/[x]/g, function (c) {
      let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
