import { stringClassRegExp } from './regExp'

export function stringClassToArray(text: string, type: 'vue' | 'jsx') {
    text = text.trim()
    const stringStr = text.match(stringClassRegExp)?.[1]

    if (stringStr) {
        if (type === 'vue') {
            return text.replace(
                stringClassRegExp,
                `:class="[${stringStr
                    .split(' ')
                    .map((item) => `'${item}'`)
                    .join(', ')}]"`
            )
        } else {
            return text.replace(
                stringClassRegExp,
                `class={[${stringStr
                    .split(' ')
                    .map((item) => `'${item}'`)
                    .join(', ')}]}`
            )
        }
    }

    return ''
}
