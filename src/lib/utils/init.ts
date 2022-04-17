declare global {
  export interface Number {
    clamp: (min: number, max: number) => number
  }
}

Number.prototype.clamp = function clamp(min, max) {
  return Math.min(Math.max(this.valueOf(), min), max)
}

export {}
