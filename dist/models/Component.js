export class Component {
    constructor(props) {
        this.props = props;
    }
    get() {
        return this.props;
    }
    set(props) {
        return (this.props = Object.assign(Object.assign({}, this.props), props));
    }
}
