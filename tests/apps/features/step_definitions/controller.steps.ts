import assert from 'assert';
import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import request from 'supertest';
import { BackendApp } from '../../../../src/apps/BackendApp'

let _request: request.Test;
let application: BackendApp;
let _response: request.Response;

Given('I send a GET request to {string}', (route: string) => {
  _request = request.agent(application.httpServer).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
  _request = request.agent(application.httpServer).put(route).send(JSON.parse(body));
});

Then('the response should be empty', () => {
  assert.deepStrictEqual(_response.body, {});
});

BeforeAll(async () => {
  application = new BackendApp();
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});
