import { setComponentManager } from '@ember/component';
import Component from '@glimmer/component';
import ComponentManager from '@glimmer/component/-private/ember-component-manager';
import { getOwner } from '@ember/application';
import { setComponentTemplate, getComponentTemplate } from '@glimmer/manager';

class BaseComponentManager extends ComponentManager {
  // constructor(owner) {
  //   super(owner);
  //   console.log('constructor BaseComponentManager');
  // }

  // createComponent(Klass, args) {
  //   const component = super.createComponent(...arguments);
  //   // console.log('createComponent BaseComponentManager', Klass.name, args);
  //   // console.log('createComponent BaseComponentManager', Klass.name, getComponentTemplate(Klass));
  //   // let applicationInstance = getOwner(component);
  //   // console.log(applicationInstance);
  //   return component;
  // }
}

export default class BaseComponent extends Component {
  // constructor(owner, args) {
  //   super(owner, args);
  //   console.log(this.args.table);
  //   console.log('constructor', this.constructor.name);
  // }
}

setComponentManager((owner) => {
  return new BaseComponentManager(owner);
}, BaseComponent);
