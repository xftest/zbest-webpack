import "./css/public.css";
import "./css/index.css";

import "jquery";
import "./js/public";
import "./js/nav";

import { get } from "lodash-es";

import { test1 } from "./tools";

test1();

console.log(get({ a: 1 }, "a"));
