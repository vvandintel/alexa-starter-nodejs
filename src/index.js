const Alexa = require('alexa-sdk');
const languageStrings = require('./data/language');
const handlers = require('./handler');


exports.handler = function (event, context) {
  const alexa = Alexa.handler(event, context);
  // alexa.appId = 'amzn1.ask.skill.[unique-id-here]';
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
