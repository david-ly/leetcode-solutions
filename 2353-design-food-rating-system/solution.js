import {PriorityQueue} from '@datastructures-js/priority-queue'

export default class FoodRatings {
  /**
   * @param {string[]} foods
   * @param {string[]} cuisines
   * @param {number[]} ratings
   */
  constructor(foods, cuisines, ratings) {
    this.food_cuisine = new Map()
    this.food_rating = new Map()
    this.cuisines = new Map()

    for (let i = 0; i < foods.length; i++) {
      const [food, cuisine, rating] = [foods[i], cuisines[i], ratings[i]]
      this.food_cuisine.set(food, cuisine)
      this.food_rating.set(food, rating)

      if (!this.cuisines.has(cuisine)) {
        this.cuisines.set(cuisine, new PriorityQueue((a, b) => {
          if (a.rating === b.rating) return a.food.localeCompare(b.food)
          return b.rating - a.rating
        }))
      }
      this.cuisines.get(cuisine).push({food, rating})
    }
  }

  /**
   * @param {string} food
   * @param {number} newRating
   * @return {void}
   */
  changeRating(food, newRating) {
    const cuisine = this.food_cuisine.get(food)
    this.food_rating.set(food, newRating)
    this.cuisines.get(cuisine).push({food, rating: this.food_rating.get(food)})
  }

  /**
   * @param {string} cuisine
   * @return {string}
   */
  highestRated(cuisine) {
    const heap = this.cuisines.get(cuisine)
    while (!heap.isEmpty()) {
      const {food, rating} = heap.front()
      if (this.food_rating.get(food) === rating) return food
      heap.pop()
    }
  }
}
