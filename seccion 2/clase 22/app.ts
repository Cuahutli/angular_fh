// si no hay index.ts en classes es así
// import { Xmen } from "./classes/xmen.class";
// import { Villanos } from './classes/villanos.class';

// si tengo el index.ts sería así
import { Xmen, Villanos} from "./classes/index"


let wolverine = new Xmen("Logan", "Wolverine");
let lex = new Villanos("Lex Luthor", "Conquistar el mundo");


wolverine.imprimir();
lex.imprimirPlan();
