'use strict';

var NAME = module.exports = 'app.common.constants',
    pkg = require('../../../../package.json');

angular.module(NAME, [])
    .constant('VERSION', pkg.version)
    .constant('TITLE', pkg.title)
    .constant('TITLE_SPLITTER', ' | ')
    .constant('KEYS', {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39,
        TAB: 9,
        SPACE: 32,
        ENTER: 13
    })
    .constant('EVENTS', {
        KEY: {
            UP: 'KEY:UP',
            DOWN: 'KEY:DOWN',
            PRESS: 'KEY:PRESS'
        }
    })
    .constant('EVENT_TYPE', {
        CLICK: 'click',
        DBL_CLICK: 'dblclick',
        SCROLL: 'scroll',
        MOUSE_UP: 'mouseup',
        MOUSE_DOWN: 'mousedown',
        MOUSE_OVER: 'mouseover',
        MOUSE_OUT: 'mouseout',
        MOUSE_ENTER: 'mouseenter',
        MOUSE_LEAVE: 'mouseleave',
        MOUSE_MOVE: 'mousemove'
    });