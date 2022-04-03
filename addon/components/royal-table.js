import Component from '@glimmer/component';
import { TrackedSet } from 'tracked-built-ins';
import { htmlSafe } from '@ember/template';

export default class RoyalTableComponent extends Component {
  columns = new TrackedSet();

  get style() {
    const size = this.columns.size;
    return size
      ? htmlSafe(`grid-template-columns: repeat(${size}, 1fr);`)
      : null;
  }
}
