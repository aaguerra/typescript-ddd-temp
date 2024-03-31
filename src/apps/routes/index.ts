import { Router, Request, Response } from 'express';
import fg from 'fast-glob';
import { ValidationError, validationResult } from 'express-validator';
import httpStatus from 'http-status';
import os from 'os';


export function registerRoutes(router: Router) {
  const nameOs = os.type();
  console.log(nameOs);
  console.log(__dirname);
  let dirname = __dirname;
  if(nameOs.includes('Windows'))
    dirname = dirname.replace(/\\/g, '/');
  console.log(dirname + '/**/*.route.*');

  const routes: string[] = fg.sync(dirname + '/**/*.route.*');
  routes.map(route => register(route, router));
}

function register(routePath: string, router: Router) {
  const route = require(routePath);
  route.register(router);
}

export function validateReqSchema(req: Request, res: Response, next: Function) {
  const validationErrors = validationResult(req);
  if (validationErrors.isEmpty()) {
    return next();
  }
  const errors = validationErrors.array().map((err: ValidationError) => ({ [err.type]: err.msg }));

  return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
    errors
  });
}
