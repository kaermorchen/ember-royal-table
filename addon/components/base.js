import { setComponentManager } from '@ember/component';
import Component from '@glimmer/component';
import ComponentManager from '@glimmer/component/-private/ember-component-manager';

class BaseComponentManager extends ComponentManager {
  constructor(owner) {
    super(owner);
    console.log('constructor BaseComponentManager');
  }

  createComponent() {
    super.createComponent(...arguments);
    console.log('createComponent BaseComponentManager', ...arguments);
  }
}

export default class BaseComponent extends Component {
  constructor(owner, args) {
    super(owner, args);

    console.log('constructor', this.constructor.name);
  }
}

setComponentManager((owner) => {
  return new BaseComponentManager(owner);
}, BaseComponent);
