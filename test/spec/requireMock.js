'use strict';

describe('The require mock standard module', function () {

  var fireUpLib = require('../../lib/index.js');
  var BPromise = require('bluebird');
  var matchers = require('../matchers.js');


  beforeEach(function () {
    this.addMatchers(matchers);
  });


  it('should throw an error when using require directly in the fireUp call', function (done) {

    var fireUp = fireUpLib.newInjector({
      basePath: __dirname,
      modules: ['../fixtures/modules/injection/require/**/*.js'],
      use: ['require:mock']
    });

    BPromise.resolve()
      .then(function () {

        return fireUp('require(util)')
          .then(function () {
            throw new Error('fireUp should have rejected the promise.');
          })
          .catch(fireUp.errors.InstanceInitializationError, function (e) {
            expect(e.cause.name).toEqual(fireUp.errors.ConfigError.name);
          })
          .catch(function (e) {
            throw new Error('fireUp rejected the promise with an error of type ' + e.name + ' (' + e.message + ')');
          });

      })
      .then(function () {

        return fireUp('require(util)', { requireMockMapping: { 'util': 'util2' } })
          .then(function () {
            throw new Error('fireUp should have rejected the promise.');
          })
          .catch(fireUp.errors.InstanceInitializationError, function (e) {
            expect(e.cause.name).toEqual(fireUp.errors.ConfigError.name);
          })
          .catch(function (e) {
            throw new Error('fireUp rejected the promise with an error of type ' + e.name + ' (' + e.message + ')');
          });

      })
      .then(function () {
        done();
      })
      .catch(done);

  });

  it('should throw an error when passing an invalid static arg', function (done) {

    var fireUp = fireUpLib.newInjector({
      basePath: __dirname,
      modules: ['../fixtures/modules/injection/require/**/*.js'],
      use: ['require:mock']
    });

    BPromise.resolve()
      .then(function () {

        return fireUp('injection/require/noStaticArg');

      })
      .then(function () {
        done(new Error('fireUp should have rejected the promise.'));
      })
      .catch(fireUp.errors.InstanceInitializationError, function (e) {
        // This is expected to be called.
        expect(e.cause.name).toEqual(fireUp.errors.ConfigError.name);
      })
      .catch(function (e) {
        done(new Error('fireUp rejected the promise with an error of type ' + e.name + ' (' + e.message + ')'));
      })
      .then(function () {

        return fireUp('injection/require/emptyStringAsStaticArg');

      })
      .then(function () {
        done(new Error('fireUp should have rejected the promise.'));
      })
      .catch(fireUp.errors.InstanceInitializationError, function (e) {
        // This is expected to be called.
        expect(e.cause.name).toEqual(fireUp.errors.ConfigError.name);
      })
      .catch(function (e) {
        done(new Error('fireUp rejected the promise with an error of type ' + e.name + ' (' + e.message + ')'));
      })
      .then(function () {

        return fireUp('injection/require/noStringAsStaticArg');

      })
      .then(function () {
        done(new Error('fireUp should have rejected the promise.'));
      })
      .catch(fireUp.errors.InstanceInitializationError, function (e) {
        // This is expected to be called.
        expect(e.cause.name).toEqual(fireUp.errors.ConfigError.name);
      })
      .catch(function (e) {
        done(new Error('fireUp rejected the promise with an error of type ' + e.name + ' (' + e.message + ')'));
      })
      .then(function () {
        done();
      });

  });

  it('should validate the options', function (done) {

    var fireUp = fireUpLib.newInjector({
      basePath: __dirname,
      modules: ['../fixtures/modules/injection/require/**/*.js'],
      use: ['require:mock']
    });

    fireUp('injection/require/requireLodash')
      .then(function () {
        done(new Error('fireUp should have rejected the promise.'));
      })
      .catch(fireUp.errors.InstanceInitializationError, function (e) {
        expect(e.cause.name).toEqual(fireUp.errors.ConfigError.name);
        done();
      })
      .catch(function (e) {
        done(new Error('fireUp rejected the promise with an error of type ' + e.name + ' (' + e.message + ')'));
      });

  });

});