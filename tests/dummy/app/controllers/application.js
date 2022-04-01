import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
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
}
