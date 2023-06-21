import { stringClassRegExp } from './regExp'

export function stringClassToArray(text: string) {
    text = text.trim()
    if (stringClassRegExp.test(text)) {
        const stringStr = text.match(stringClassRegExp)?.[1]

        if (stringStr) {
            return `:class="[${stringStr
                .split(' ')
                .map((item) => `'${item}'`)
                .join(', ')}]"`
        }
    }

    return ''
}
