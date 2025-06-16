const { MathUtils, obj, sayHelloWorld } = require("../index.js")

describe("test MathUitls", () => {
  let math
  beforeEach(() => {
    math = new MathUtils()
  })

  it("test subtract", () => {
    expect(math.substract(1, 1)).toEqual(0)
    expect(math.substract(2, 1)).toBe(1)
    expect(math.substract(1, 1)).toEqual(jasmine.any(Number))
  })

  it("test multiply", () => {
    expect(math.multiply(1, 1)).toEqual(1)
    expect(math.multiply(3, 2)).toBe(6)
    expect(math.multiply(1, 1)).toEqual(jasmine.any(Number))
  })

  it("test divide", () => {
    expect(math.divide(1, 1)).toEqual(1)
    expect(math.divide(3, 2)).toBe(1.5)
    expect(math.divide(1, 0)).toBe(Infinity)
    expect(math.divide(1, 1)).toEqual(jasmine.any(Number))
  })

  it("test average", () => {
    expect(math.average(1, 1)).toEqual(1)
    expect(math.average(3, 2)).toBe(2.5)
    expect(math.average(1, 0)).toBe(0.5)
    expect(math.average(1, 1)).toEqual(jasmine.any(Number))
  })

  it("test factorial", () => {
    expect(math.factorial(1)).toEqual(1)
    expect(math.factorial(0)).toBe(1)
    expect(math.factorial(3)).toBe(6)
    expect(() => math.factorial(-1)).toThrowError()
    expect(math.factorial(1)).toEqual(jasmine.any(Number))
  })
})

describe("test world function", () => {
  beforeAll(() => {
    spyOn(obj, "world")
    sayHelloWorld(obj)
  })
  it("", () => {
    expect(obj.world).toHaveBeenCalled()
    expect(obj.world).toHaveBeenCalledTimes(1)
    expect(obj.world).toHaveBeenCalledWith()
  })
})
