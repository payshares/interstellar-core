require("6to5/polyfill");

export { App } from "./lib/app.es6";
export { Module } from "./lib/module.es6";
export { Config } from "./lib/config.es6";

const { Module } = require('./lib/module');

export const mod = new Module('mcs-core');
mod.templates    = require.context("raw!./templates", true);
mod.services     = require.context("./services",      true);
mod.controllers  = require.context("./controllers",   true);
mod.setupBlocks  = require.context("./setup-blocks",  true);

mod.define();

export * from "./errors";

export let util = require('./lib/util');