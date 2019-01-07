import { Ingredient } from './ingredient';

export class Potion {
    private _name: string;
    private _effect: string;
    private _ingredients: Ingredient[];

    constructor(name: string, effect: string ,ingredients: Ingredient[]=null) {
        this.name = name;
        this.effect = effect;
        this._ingredients=ingredients;
 
        if (!ingredients) {
            this._ingredients = [];

            // let i = 0
            // ingredients.forEach(el => {
            //     this._ingredients.push(new Ingredient(i++, el));    
            // });
        }
     }


    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get effect(): string {
        return this._effect;
    }
    public set effect(v: string) {
        this._effect = v;
    }
    public get ingredients(): Ingredient[] {
        return this._ingredients;
    }
}
