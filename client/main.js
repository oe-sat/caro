import angular from 'angular';
import angularMeteor from 'angular-meteor';
import caroController from './components/caro';

angular.module('main', [
  angularMeteor,
  caroController.name
]);
