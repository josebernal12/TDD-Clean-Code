import { Food } from "../models/food-model"

describe('FoodModel', () => {
    it('Class Food', () => {
        const foodModel = new Food('Seafood', 'the Seafood is very expensive', 500)
        expect(foodModel.getName()).toEqual('Seafood')
        expect(foodModel.getDescription()).toEqual('the Seafood is very expensive')
        expect(foodModel.getPrice()).toBe(500)
    })
})