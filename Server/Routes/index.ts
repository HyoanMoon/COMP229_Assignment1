import { NextFunction, Router } from "express";
import { Module } from "module";

import express from'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req: express.Request, res: express.Response , next: express.NextFunction) {
  res.render('index', { title: 'Express' });
});

export default router;
