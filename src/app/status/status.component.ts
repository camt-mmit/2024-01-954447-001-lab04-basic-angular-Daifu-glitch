import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusComponent {
  currentTime = new Date().toString();
  userAgent = navigator.userAgent;
  languages = navigator.languages.join(', ');
  cookiesEnabled = navigator.cookieEnabled;
  logicalProcessors = navigator.hardwareConcurrency || 'N/A';
  maxTouchPoints = navigator.maxTouchPoints || 0;
}
