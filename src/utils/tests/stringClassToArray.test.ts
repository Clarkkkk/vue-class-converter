import { describe, expect, test } from 'vitest'
import { stringClassToArray } from '../stringClassToArray'

describe('stringClassToArray', () => {
    test('string', () => {
        expect(stringClassToArray('class="flex items-center"')).toMatchInlineSnapshot('":class=\\"[\'flex\', \'items-center\']\\""')
    })
})
