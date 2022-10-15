import { FoodHelpers } from "../helpers/food-model-helpers"

export class Food {

    constructor(
        private readonly food: FoodHelpers) { }

    getName(): string {
        return this.food.name
    }
    getDescription(): string {
        return this.food.description
    }
    getPrice(): number {
        return this.food.price
    }
}

