import Route from '@ember/routing/route';

class Hero {
  get avatarURL() {
    return `https://raw.githubusercontent.com/HeroesToolChest/heroes-images/master/heroesimages/heroportraits/${this.avatar}`;
  }

  get stringDescriptors() {
    return this.descriptors?.join(', ');
  }
}

export default class ApplicationRoute extends Route {
  async model() {
    return fetch('heroes.json')
      .then((response) => response.json())
      .then((items) => items.map((item) => Object.assign(new Hero(), item)));
  }
}
