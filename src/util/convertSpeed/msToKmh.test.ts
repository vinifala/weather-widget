import { msToKmh } from "."

describe("convert speed in m/s", () => {
  it("should convert to Km/h", () => {
    expect(msToKmh(0)).toBeCloseTo(0)
    expect(msToKmh(1)).toBeCloseTo(3.6)
    expect(msToKmh(3.6)).toBeCloseTo(12.96)
  })
})
