import { expect, describe, test } from 'vitest'
import { arrayItemRegExp } from '../regExp'

describe('arrayItemRegExp', () => {
    test('tailwind css class', () => {
        expect(arrayItemRegExp.test("'mx-auto'")).toBe(true)
        expect(arrayItemRegExp.test("'w-[1000px]'")).toBe(true)
        expect(arrayItemRegExp.test("'min-h-[calc(100%-80px)]',")).toBe(true)
        expect(arrayItemRegExp.test("'bg-[url('/what_a_rush.png')]',")).toBe(true)
        expect(arrayItemRegExp.test("'before:content-['hello\_world']',")).toBe(true)
        expect(arrayItemRegExp.test("'lg:[&:nth-child(3)]:hover:underline',")).toBe(true)
    })
})
