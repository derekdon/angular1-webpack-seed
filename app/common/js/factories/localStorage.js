'use strict';

module.exports = function () {

    var LocalStorage,
        available = typeof window.localStorage !== 'undefined';

    LocalStorage = function (namespace) {
        this.namespace = namespace;
    };

    LocalStorage.prototype.create = function (name, value) {
        if (!available) {
            unavailable();
        } else if (name && value) {
            localStorage.setItem(fullyQualifiedName(this, name), value);
        }
    };

    LocalStorage.prototype.read = function (name) {
        return available ? localStorage.getItem(fullyQualifiedName(this, name)) || '' : unavailable();
    };

    LocalStorage.prototype.update = function (name, value) {
        this.create(name, value);
    };

    LocalStorage.prototype.delete = function (name) {
        if (available) {
            localStorage.removeItem(fullyQualifiedName(this, name));
        } else {
            unavailable();
        }
    };

    LocalStorage.prototype.fetchAllMatches = function (startsWith, endsWith) {
        var results = [], key, match;
        startsWith = startsWith ? fullyQualifiedName(this, startsWith) : startsWith;
        for (key in localStorage) {
            match = false;
            if (startsWith) {
                match = key.indexOf(startsWith) === 0;
            }
            if (endsWith && (!startsWith || match)) {
                match = key.indexOf(endsWith, key.length - endsWith.length) > -1;
            }
            if (match) {
                results.push({key: key, value: localStorage[key]});
            }
        }
        return results;
    };

    function fullyQualifiedName(ls, name) {
        return ls.namespace + '.' + name;
    }

    function unavailable() {
        throw new Error('Local storage is unavailable');
    }

    return {
        getInstance: function (namespace) {
            return new LocalStorage(namespace);
        }
    }
};