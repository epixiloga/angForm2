import { Potion } from './potion';
import { ingreds } from 'src/app/models/ingreds';

export const potions: Potion[] = [
    new Potion('Veritaserum', 'effect of Veritaserum', [ingreds[0], ingreds[1]]),
    new Potion('Polynectar', 'effect of Polynectar', [ingreds[0], ingreds[1], ingreds[2]]),
    new Potion('Amnésie', 'effect of Amnésie'),
    new Potion('Ratatinage', 'effect of Ratatinage'),
    new Potion('Felix felicis', 'effect of Felix felicis', [ingreds[0], ingreds[1], ingreds[2], ingreds[3],])
];
