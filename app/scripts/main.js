'use strict';

var angular = require('angular'); // That's right! We can just require angular as if we were in node
require('angular-touch');
require('angular-route');

var WelcomeCtrl = require('./controllers/WelcomeCtrl'); // We can use our WelcomeCtrl.js as a module. Rainbows.

var app = angular.module('myApp', ['ngTouch', 'ngRoute']);

app.controller('WelcomeCtrl', ['$scope', WelcomeCtrl]);
