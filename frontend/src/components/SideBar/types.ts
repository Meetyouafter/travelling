type Rating = {
  population: number,
  area: number,
  density: number,
  GDP: number,
}

type Country = {
  country: string,
  description: string,
  capital: string,
  currency: string,
  population: number,
  area: number,
  density: number,
  count_of_cities: number,
  GDP: number,
  rating_in_world: Rating
}

export default Country;
