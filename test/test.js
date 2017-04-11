var server = require('../server');
const express = require('express');
const cons = require('consolidate');
const dust = require('dustjs-linkedin');
var index = require('../index');
var expect = require('chai').expect;
var assert = require('chai').assert;


describe('Operation Test Suite', function () {

  it('Addition Validation', function () {

    expect(7).to.equal(index.add(3, 4));

  });
  it('Subtration Validation', function () {

    expect(5).to.equal(index.sub(10, 5));

  });
});

  describe('Server Test Suite', function () {

    it('Server Running', function () {
        expect('Server running on http://localhost:3000').to.equal(server.listenServer(3000));
      //assert.equal('Server running on http://localhost:8012',server.listenServer(3000),'== coerces values to strings');
    
    });
   
  });