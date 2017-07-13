const helper = require('./helper/helper');


module.exports = {
  LaunchRequest: function () {
    const say = `${this.t('WELCOME')} ${this.t('HELP')}`;
    const error = `${this.t('NOT_UNDERSTOOD')}`;
    this.emit(':ask', say, error);
  },
  AboutIntent: function () {
    this.emit(':ask', this.t('ABOUT'));
  },
  'AMAZON.HelpIntent': function () {
    this.emit(':ask', this.t('HELP'));
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', this.t('STOP'));
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', this.t('STOP'));
  },
};
