import { kelvinToC } from "./"

export const kelvinToF = (degrees: number): number =>
  kelvinToC(degrees) * (9 / 5) + 32
