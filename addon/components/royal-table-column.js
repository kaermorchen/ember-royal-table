import Component from '@glimmer/component';

export default class RoyalTableColumnComponent extends Component {
  get isHead() {
    return this.args.place === 'head';
  }

  get isBody() {
    return this.args.place === 'body';
  }
}
