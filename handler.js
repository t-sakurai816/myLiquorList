'use strict';

const listsCreate = require('./lambda/lists-create.js');
const listsReadAll = require('./lambda/lists-read-all.js');
const listsReadOne = require('./lambda/lists-read-one.js');
const listsUpdate = require('./lambda/lists-update.js');
const listsDelete = require('./lambda/lists-delete.js');

module.exports.create = (event, context, callback) => {
  listsCreate(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://liquor.saku-dev.space"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.readAll = (event, context, callback) => {
  listsReadAll(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://liquor.saku-dev.space"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.readOne = (event, context, callback) => {
  listsReadOne(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://liquor.saku-dev.space"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.update = (event, context, callback) => {
  listsUpdate(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://liquor.saku-dev.space"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.delete = (event, context, callback) => {
  listsDelete(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://liquor.saku-dev.space"
      },
      body: JSON.stringify(result),
    };



    context.succeed(response);
  });
};
