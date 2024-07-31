import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ChangeDetectorRef,
  DoCheck,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [CounterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  ngOnInit() {}
  reRendered() {
    console.log('%cParrent Rerendering', 'color: purple; font-weight: bold;');

    return true;
  }
}
