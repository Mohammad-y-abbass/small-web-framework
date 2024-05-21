export class Component<T> {
  constructor(public props: T) {}

  get() {
    return this.props;
  }

  set(props: T) {
    return (this.props = { ...this.props, ...props });
  }
}
