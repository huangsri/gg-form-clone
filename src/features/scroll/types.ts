export type Passenger = {
  name: string
  trips: number
  __v: number
  _id: string
  airline: [Airline]
}

type Airline = {
  country: string
  established: string
  head_quaters: string
  id: number
  logo: string
  name: string
  slogan: string
  website: string
}
