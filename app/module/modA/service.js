'use strict';

var _ = require('lodash'),
    faker = require('faker');

module.exports = function () {

    var service = this,
        data  = faker.helpers.userCard();

    data.avatar = faker.image.avatar();

    // TODO: Create actual CRUD

    service.read = function (id) {
        return {_id: id};
    };

    service.readCanned = function (amount) {
        return data;
    };

    return service;
};