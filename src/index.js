'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import "formdata-polyfill";
import "es6-promise";
import "fetch-polyfill";


import clubSelectButton from './modules/clubSelectButton';

//club-select-button
clubSelectButton();