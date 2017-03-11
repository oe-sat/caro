import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './caro.html';

class CaroController {
  'ngInject';

  constructor() {
  }
}

export default angular.module('caro', [
  angularMeteor
])
  .component('caro', {
    templateUrl: template,
    controller: CaroController,
    controllerAs: 'vm'
  });
