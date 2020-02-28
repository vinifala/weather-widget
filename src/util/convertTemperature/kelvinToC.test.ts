import { kelvinToC } from "."

describe("convert temperature units", () => {
  it("should convert Kelvin to Celcius", () => {
    expect(kelvinToC(0)).toBeCloseTo(-273.15)
    expect(kelvinToC(273.15)).toBeCloseTo(0)
    expect(kelvinToC(373.15)).toBeCloseTo(100)
  })
})
