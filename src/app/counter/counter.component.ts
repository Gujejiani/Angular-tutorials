import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ChangeDetectionStrategy,
  DoCheck,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  /* 
    1. When its input properties change.
    2. When it receives an event.
    3. When markForCheck() or detectChanges() is called.
    4. When Angular itself triggers change detection due to asynchronous operations or other zone-related events.
  // */
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit, OnDestroy {
  counter = 1;
  interval: any;
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // this.interval = setInterval(() => {
    //   console.log('%cCounter Change', 'color: red; font-weight: bold;');
    //   this.counter++;
    //   this.cdr.detectChanges();
    // }, 2000);
  }

  reRendered() {
    console.log('%cChild  Rerendering', 'color: green; font-weight: bold;');
    return true;
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
