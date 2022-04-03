import Component from '@glimmer/component';

export default class RoyalTableColumnSortingIconComponent extends Component {
  get icon() {
    if (this.args.isAscSorted) {
      return 'chevron-down';
    } else if (this.args.isDescSorted) {
      return 'chevron-up';
    }

    return 'unfold-more-horizontal';
  }
}
