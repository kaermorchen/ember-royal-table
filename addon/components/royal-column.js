import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class RoyalColumnComponent extends Component {
  get isHead() {
    return this.args.place === 'head';
  }

  get isBody() {
    return this.args.place === 'body';
  }

  get isSorted() {
    return this.args.sortingProp === this.args.prop;
  }

  @action
  handleSort() {
    if (typeof this.args.onSort !== 'function') {
      return;
    }

    let key = null;

    switch (this.args.sortingProp) {
      case `${this.args.prop}:asc`:
        key = `${this.args.prop}:desc`;
        break;
      case `${this.args.prop}:desc`:
        key = null;
        break;
      default:
        key = `${this.args.prop}:asc`;
        break;
    }

    this.args.onSort(key);
  }

  @action
  handleClickHead(e) {
    if (typeof this.args.onClick === 'function') {
      this.args.onClick(this, e);
    }
  }
}
