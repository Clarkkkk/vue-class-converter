import { stringClassRegExp } from './regExp'

export function stringClassToArray(text: string) {
    text = text.trim()
    const stringStr = text.match(stringClassRegExp)?.[1]

    if (stringStr) {
        return text.replace(
            stringClassRegExp,
            `:class="[${stringStr
                .split(' ')
                .map((item) => `'${item}'`)
                .join(', ')}]"`
        )
    }

    return ''
}
