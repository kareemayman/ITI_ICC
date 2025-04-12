import {add as sum, subtract} from './math.js';
import logmsg from './logger.js';
import { fetchUsrs } from './api.js';

const a = 5;
const b = 3;

console.log(sum(a, b))
console.log(subtract(a, b))

logmsg("This is a log message");

const users = await fetchUsrs();
console.log(users);