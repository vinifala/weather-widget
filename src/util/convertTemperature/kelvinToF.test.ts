import { kelvinToF } from "."

describe("convert temperature in Kelvin", () => {
  it("shold convert Kelvin to Farenheight", () => {
    expect(kelvinToF(0)).toBeCloseTo(-459.67)
    expect(kelvinToF(273.15)).toBeCloseTo(32)
    expect(kelvinToF(373.15)).toBeCloseTo(212)
  })
})
