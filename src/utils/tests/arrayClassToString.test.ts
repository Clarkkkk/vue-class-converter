import { expect, describe, test } from 'vitest'
import { arrayClassToString } from '../arrayClassToString'

describe('arrayClassToString', () => {
    test('array', () => {
        expect(arrayClassToString(':class="[\'flex\', \'items-center\']"')).toMatchInlineSnapshot('"class=\\"flex items-center\\""')
    })
})
