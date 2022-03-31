import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  data = [
    {
      firstName: 'Tony',
      lastName: 'Stark',
      nickName: 'IronMan',
      age: 50,
    },
    {
      firstName: 'Piter',
      lastName: 'Parker',
      nickName: 'Spiderman',
      age: 25,
    },
  ];
}
