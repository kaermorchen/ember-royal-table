import Controller from '@ember/controller';
import { action } from '@ember/object';
import { compare } from '@ember/utils';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked sortingProp = 'firstName:asc';

  data = [
    {
      firstName: 'Tony',
      lastName: 'Stark',
      nickName: 'Iron Man',
      age: 50,
    },
    {
      firstName: 'Peter',
      lastName: 'Parker',
      nickName: 'Spider-Man',
      age: 25,
    },
  ];

  columns = [
    {
      name: 'First name',
      prop: 'firstName',
      order: 0,
    },
    {
      name: 'Last name',
      prop: 'lastName',
      order: 1,
    },
    {
      name: 'Age',
      prop: 'age',
      order: 2,
    },
  ];

  get sortedData() {
    if (!this.sortingProp) {
      return this.data;
    }

    const sortingKeys = this.sortingProp.split(':');
    const sortedData = this.data.sort((a, b) =>
      compare(a[sortingKeys[0]], b[sortingKeys[0]])
    );

    return !sortingKeys[1] || sortingKeys[1] === 'asc'
      ? sortedData
      : sortedData.reverse();
  }

  // get sortedColumns() {
  //   return this.columns.sort((a, b) => b.order - a.order);
  // }

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
