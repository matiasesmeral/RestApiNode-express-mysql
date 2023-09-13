

import express from 'express';

import {getMainEmployee} from '../Controllers/index.controllers.js'

const router = express.Router();

export const main = router.get('/',getMainEmployee);
