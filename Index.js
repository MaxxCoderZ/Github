const jsonFile = require('jsonfile);
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';

const makeCommit = (x,y) => {
Const DATE = moment().substartct(1,'y').add(1, 'd')
              .add(x,  'w').add(y,  'd'.format();
const data = {
  date : DATE
}

jsonfile.writefile(FILE_PATH, data, ()=>{
simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE }).push();
});

makecommit(3,3)
