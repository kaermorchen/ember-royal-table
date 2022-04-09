import Component from '@glimmer/component';
import BaseComponent from './base';
import { compare } from '@ember/utils';

export default class RoyalTableComponent extends BaseComponent {
  orderKey = 'order';

  constructor(owner, args) {
    super(owner, args);
    this.columns = [];
  }

  get sortedColumns() {
    return this.columns
      .sort((a, b) => compare(a.args.order, b.args.order))
      .map((item) => item.args);
  }
}
