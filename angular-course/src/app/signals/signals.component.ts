import { NgFor } from '@angular/common';
import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal<number>(0);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => console.log(this.counter()));
  }

  increment() {
    this.counter.update((oldValue) => oldValue + 1);
    // this.counter.set(this.counter() + 5);
    this.actions.update((oldActions) => [...oldActions, 'INCREMENT']);
  }

  decrement() {
    this.counter.update((oldValue) => oldValue - 1);
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
  }
}
