'use strict';

let home = require('./home');

home('Модуль вызван из test');

exports.home = home;
