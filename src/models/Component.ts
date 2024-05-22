import { Callback, Events } from '../types';

export class Component<Props> {
  props!: Props;
  events: Events = {};

  constructor(private parent: Element, private template: string) {
    this.props = {} as Props;
    this.render();
  }

  get(): Props {
    return this.props;
  }

  set(props: Props) {
    this.props = { ...this.props, ...props };
  }

  on(event: string, callback: Callback) {
    if (this.events[event]) {
      this.events[event].push(callback);
    } else {
      this.events[event] = [callback];
    }
  }

  trigger(event: string) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback());
    } else {
      console.error(`event "${event}" does not exist`);
    }
  }

  render(): void {
    this.parent.innerHTML = this.template;
  }

  bindEvent(selector: string, event: string, callback: EventListener): void {
    this.parent.addEventListener(event, (e) => {
      if (e.target && (e.target as Element).matches(selector)) {
        callback(e);
      }
    });
  }

  rerender(template: string) {
    if (this.template !== template) {
      this.template = template;
      this.render();
    }
  }
}
