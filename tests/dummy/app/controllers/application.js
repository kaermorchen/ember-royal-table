import Controller from '@ember/controller';
import { action, get } from '@ember/object';
import { compare } from '@ember/utils';
import { tracked } from '@glimmer/tracking';

class Column {
  @tracked name;
  @tracked prop;
  @tracked sortable;
  @tracked align;
  @tracked order;
}

const columns = [
  {
    name: 'Avatar',
    prop: 'avatarURL',
    sortable: false,
    align: null,
    order: 0,
    bodyComponent: 'avatar',
  },
  {
    name: 'Name',
    prop: 'name',
    sortable: true,
    align: null,
    order: 1,
  },
  {
    name: 'Gender',
    prop: 'gender',
    sortable: true,
    align: null,
    order: 2,
  },
  {
    name: 'Franchise',
    prop: 'franchise',
    sortable: true,
    align: null,
    order: 3,
  },
  {
    name: 'Rarity',
    prop: 'rarity',
    sortable: true,
    align: null,
    order: 4,
  },
  {
    name: 'HP',
    prop: 'life.amount',
    sortable: true,
    align: 'right',
    order: 5,
  },
  {
    name: 'Energy',
    prop: 'energy.amount',
    sortable: true,
    align: 'right',
    order: 6,
  },
  {
    name: 'Descriptors',
    prop: 'stringDescriptors',
    sortable: null,
    align: null,
    order: 7,
  },
  {
    name: 'Release date',
    prop: 'releaseDate',
    sortable: true,
    align: 'right',
    order: 8,
  },
].map((item) => Object.assign(new Column(), item));

export default class ApplicationController extends Controller {
  @tracked sortingProp = 'name:asc';

  columns = columns;

  get sortedColumns() {
    return this.columns.sort((a, b) => compare(a.order, b.order)).reverse();
  }

  get sortedModel() {
    if (!this.sortingProp) {
      return this.model;
    }

    const [key, order] = this.sortingProp.split(':');
    const sortedModel = this.model.sort((a, b) =>
      compare(get(a, key), get(b, key))
    );

    return !order || order === 'asc' ? sortedModel : sortedModel.reverse();
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
