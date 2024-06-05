import "jest-extended";
import { TextDecoder, TextEncoder } from "util";
import "whatwg-fetch";
import { DEVFLAGS } from "./wab/devflags";

import "./initTests";

// Set a large default global timeout
jest.setTimeout(60000);

DEVFLAGS.hostUrl = "http://localhost";

// Web shims for APIs missing in JSDOM

// Needed because we use JSDOM in one of our migrations
// https://github.com/inrupt/solid-client-authn-js/issues/1676#issuecomment-1617031412
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

let objectURLCounter = 0;
global.URL.createObjectURL = (object) => {
  const url = `blob:${++objectURLCounter}`;
  console.log(`createObjectURL(${object}) called, returning ${url}`);
  return url;
};
global.URL.createObjectURL = (url) => {
  console.log(`revokeObjectURL(${url}) called`);
};
