
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Then('the value of my {string} should be {float}', async function(a, b){
  // TODO: implement step
});

When('I wait for the event {string} or {string} to take place', async function(event1, event2){
  // TODO: implement step
});

Then('the value of my {string} should be {string} or {string}', async function(health1, health2, a){
  // TODO: implement step
});

When('I wait for the event {string} to take place', async function(a){
  // TODO: implement step
});

Then('the value of my {string} should be {string}', async function(a, b){
  // TODO: implement step
});

Then('the text should contain {string}', async function(a){
  // TODO: implement step
});

Then('I should be given the new choice {string}', async function(a){
  // TODO: implement step
});