const jsonFile = require('jsonfile);
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';

Const DATE = moment().substartct(1,'d'.format();

const data = {
  date : DATE
}

jsonfile.writefile(FILE_PATH, data);

simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE }).push();
