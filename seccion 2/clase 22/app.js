"use strict";
// si no hay index.ts en classes es así
// import { Xmen } from "./classes/xmen.class";
// import { Villanos } from './classes/villanos.class';
Object.defineProperty(exports, "__esModule", { value: true });
// si tengo el index.ts sería así
var index_1 = require("./classes/index");
var wolverine = new index_1.Xmen("Logan", "Wolverine");
var lex = new index_1.Villanos("Lex Luthor", "Conquistar el mundo");
wolverine.imprimir();
lex.imprimirPlan();
