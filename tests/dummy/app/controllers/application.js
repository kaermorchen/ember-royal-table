import Controller from '@ember/controller';
import { action } from '@ember/object';
import { compare } from '@ember/utils';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked sortingProp = 'name:asc';

  get sortedModel() {
    if (!this.sortingProp) {
      return this.model;
    }

    const sortingKeys = this.sortingProp.split(':');
    const sortedModel = this.model.sort((a, b) =>
      compare(a[sortingKeys[0]], b[sortingKeys[0]])
    );

    return !sortingKeys[1] || sortingKeys[1] === 'asc'
      ? sortedModel
      : sortedModel.reverse();
  }

  @action
  onSort(newSortingProp) {
    if (newSortingProp !== this.sortingProp.split(':')[0]) {
      this.sortingProp = `${newSortingProp}:asc`;
    } else if (`${newSortingProp}:asc` === this.sortingProp) {
      this.sortingProp = `${newSortingProp}:desc`;
    } else if (`${newSortingProp}:desc` === this.sortingProp) {
      this.sortingProp = `${newSortingProp}:asc`;
    }
  }
}
