import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class RoyalTableColumnComponent extends Component {
  constructor() {
    super(...arguments);

    if (this.isHead) {
      this.args?.parent?.registerColumn(this);
    }
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this.args?.parent?.unregisterColumn(this);
  }

  get isHead() {
    return this.args.place === 'head';
  }

  get isBody() {
    return this.args.place === 'body';
  }

  get isSorted() {
    return this.args.sortingProp && (this.isAscSorted || this.isDescSorted);
  }

  get isAscSorted() {
    return this.args.sortingProp === `${this.args.prop}:asc`;
  }

  get isDescSorted() {
    return this.args.sortingProp === `${this.args.prop}:desc`;
  }

  @action
  handleClickHead(e) {
    if (typeof this.args.onClickHead === 'function') {
      this.args.onClickHead(this.args.prop, this, e);
    }
  }

  @action
  handleSort(e) {
    if (this.args.sortable && typeof this.args.onSort === 'function') {
      this.args.onSort(this.args.prop, this, e);
    }
  }

  @action
  initResize(e) {
    e.preventDefault();
    e.stopPropagation();

    this.header = e.target.parentNode;
    window.addEventListener('mousemove', this.resizing);
    window.addEventListener('mouseup', this.resizeDone);
  }

  @action
  resizing(e) {
    e.preventDefault();
    e.stopPropagation();

    return requestAnimationFrame(() => {
      const width =
        document.documentElement.scrollLeft +
        e.clientX -
        this.header.offsetLeft;

      this.header.style.width = width + 'px';
    });
  }

  @action
  resizeDone(e) {
    e.preventDefault();
    e.stopPropagation();

    this.header = null;
    window.removeEventListener('mousemove', this.resizing);
    window.removeEventListener('mouseup', this.resizeDone);
  }
}
