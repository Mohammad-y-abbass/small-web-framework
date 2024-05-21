import { Callback, Events } from '../types';

export class Component<T> {
  events: Events = {};
  constructor(private props: T) {}

  get(): T {
    return this.props;
  }

  set(props: T) {
    this.props = { ...this.props, ...props };
  }

  on(event: string, callback: Callback) {
    if (this.events[event]) {
      this.events[event].push(callback);
    } else {
      this.events[event] = [callback];
    }
  }
}
