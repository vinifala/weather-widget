import { CompassDirection } from "../../lib/CompassDirection"

const compassDirectionLookup: CompassDirection[] = [
  CompassDirection.N,
  CompassDirection.NE,
  CompassDirection.E,
  CompassDirection.SE,
  CompassDirection.S,
  CompassDirection.SW,
  CompassDirection.W,
  CompassDirection.NW,
  CompassDirection.N,
]

export const degreesToCompassDirection = (degrees: number): CompassDirection =>
  compassDirectionLookup[Math.round((degrees % 360) / 45)]
