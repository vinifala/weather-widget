import { degreesToCompassDirection } from "./degreesToCompassDirection"

describe("convert wind direction in degrees to compass directions", () => {
  it("should be N", () => {
    expect(degreesToCompassDirection(337.5)).toBe("N")
    expect(degreesToCompassDirection(0)).toBe("N")
    expect(degreesToCompassDirection(22.4)).toBe("N")
  })
  it("should be NE", () => {
    expect(degreesToCompassDirection(22.5)).toBe("NE")
    expect(degreesToCompassDirection(45)).toBe("NE")
    expect(degreesToCompassDirection(67.4)).toBe("NE")
  })
  it("should be E", () => {
    expect(degreesToCompassDirection(67.5)).toBe("E")
    expect(degreesToCompassDirection(90)).toBe("E")
    expect(degreesToCompassDirection(112.4)).toBe("E")
  })
  it("should be SE", () => {
    expect(degreesToCompassDirection(112.5)).toBe("SE")
    expect(degreesToCompassDirection(135)).toBe("SE")
    expect(degreesToCompassDirection(157.4)).toBe("SE")
  })
  it("should be S", () => {
    expect(degreesToCompassDirection(157.5)).toBe("S")
    expect(degreesToCompassDirection(180)).toBe("S")
    expect(degreesToCompassDirection(202.4)).toBe("S")
  })
  it("should be SW", () => {
    expect(degreesToCompassDirection(202.5)).toBe("SW")
    expect(degreesToCompassDirection(225)).toBe("SW")
    expect(degreesToCompassDirection(247.4)).toBe("SW")
  })
  it("should be W", () => {
    expect(degreesToCompassDirection(247.5)).toBe("W")
    expect(degreesToCompassDirection(270)).toBe("W")
    expect(degreesToCompassDirection(292.4)).toBe("W")
  })
  it("should be NW", () => {
    expect(degreesToCompassDirection(292.5)).toBe("NW")
    expect(degreesToCompassDirection(315)).toBe("NW")
    expect(degreesToCompassDirection(337.4)).toBe("NW")
  })
})
