import { expect, describe, test } from 'vitest'
import { arrayClassToString } from '../arrayClassToString'

describe('arrayClassToString', () => {
    test('vue sfc array', () => {
        expect(arrayClassToString(":class=\"['flex', 'items-center']\"")).toMatchInlineSnapshot(
            '"class=\\"flex items-center\\""'
        )

        expect(
            arrayClassToString(":class=\"['flex', 'items-center', 'w-[120px]']\"")
        ).toMatchInlineSnapshot('"class=\\"flex items-center w-[120px]\\""')

        expect(
            arrayClassToString("<div :class=\"['flex', 'items-center']\">")
        ).toMatchInlineSnapshot('"<div class=\\"flex items-center\\">"')
    })

    test('jsx array', () => {
        expect(arrayClassToString("class={['flex', 'items-center']}")).toMatchInlineSnapshot(
            '"class=\\"flex items-center\\""'
        )

        expect(arrayClassToString("<div class={['flex', 'items-center']}>")).toMatchInlineSnapshot(
            '"<div class=\\"flex items-center\\">"'
        )

        expect(
            arrayClassToString("class={['flex', 'items-center', 'w-[120px]']}")
        ).toMatchInlineSnapshot('"class=\\"flex items-center w-[120px]\\""')
    })
})
