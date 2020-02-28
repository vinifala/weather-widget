import { convertDegreesToCompassDirection } from "./degreesToCompassDirection"

describe("convert wind direction in degrees to compass directions", () => {
  it("should be N", () => {
    expect(convertDegreesToCompassDirection(337.5)).toBe("N")
    expect(convertDegreesToCompassDirection(0)).toBe("N")
    expect(convertDegreesToCompassDirection(22.4)).toBe("N")
  })
  it("should be NE", () => {
    expect(convertDegreesToCompassDirection(22.5)).toBe("NE")
    expect(convertDegreesToCompassDirection(45)).toBe("NE")
    expect(convertDegreesToCompassDirection(67.4)).toBe("NE")
  })
  it("should be E", () => {
    expect(convertDegreesToCompassDirection(67.5)).toBe("E")
    expect(convertDegreesToCompassDirection(90)).toBe("E")
    expect(convertDegreesToCompassDirection(112.4)).toBe("E")
  })
  it("should be SE", () => {
    expect(convertDegreesToCompassDirection(112.5)).toBe("SE")
    expect(convertDegreesToCompassDirection(135)).toBe("SE")
    expect(convertDegreesToCompassDirection(157.4)).toBe("SE")
  })
  it("should be S", () => {
    expect(convertDegreesToCompassDirection(157.5)).toBe("S")
    expect(convertDegreesToCompassDirection(180)).toBe("S")
    expect(convertDegreesToCompassDirection(202.4)).toBe("S")
  })
  it("should be SW", () => {
    expect(convertDegreesToCompassDirection(202.5)).toBe("SW")
    expect(convertDegreesToCompassDirection(225)).toBe("SW")
    expect(convertDegreesToCompassDirection(247.4)).toBe("SW")
  })
  it("should be W", () => {
    expect(convertDegreesToCompassDirection(247.5)).toBe("W")
    expect(convertDegreesToCompassDirection(270)).toBe("W")
    expect(convertDegreesToCompassDirection(292.4)).toBe("W")
  })
  it("should be NW", () => {
    expect(convertDegreesToCompassDirection(292.5)).toBe("NW")
    expect(convertDegreesToCompassDirection(315)).toBe("NW")
    expect(convertDegreesToCompassDirection(337.4)).toBe("NW")
  })
})
