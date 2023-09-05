import { describe, expect, test } from 'vitest'
import { stringClassToArray } from '../stringClassToArray'

describe('stringClassToArray', () => {
    test('vue sfc string', () => {
        expect(stringClassToArray('class="flex items-center"', 'vue')).toMatchInlineSnapshot(
            '":class=\\"[\'flex\', \'items-center\']\\""'
        )

        expect(stringClassToArray('<div class="flex items-center">', 'vue')).toMatchInlineSnapshot(
            '"<div :class=\\"[\'flex\', \'items-center\']\\">"'
        )
    })

    test('jsx string', () => {
        expect(stringClassToArray('class="flex items-center"', 'jsx')).toMatchInlineSnapshot('"class={[\'flex\', \'items-center\']}"')

        expect(stringClassToArray('<div class="flex items-center">', 'jsx')).toMatchInlineSnapshot('"<div class={[\'flex\', \'items-center\']}>"')
    })
})
