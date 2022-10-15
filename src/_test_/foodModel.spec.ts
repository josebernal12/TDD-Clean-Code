import { Food } from "../models/food-model"

describe('FoodModel', () => {
    it('Class Food', () => {
        const foodModel = new Food({
            name: 'Seafood',
            description: 'the Seafood is very expensive',
            price: 500
        })
        expect(foodModel.getName()).toEqual('Seafood')
        expect(foodModel.getDescription()).toEqual('the Seafood is very expensive')
        expect(foodModel.getPrice()).toBe(500)
    })
})