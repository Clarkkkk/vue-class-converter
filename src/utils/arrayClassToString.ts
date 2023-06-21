import { arrayClassRegExp } from './regExp'

export function arrayClassToString(text: string) {
    text = text.trim()

    if (arrayClassRegExp.test(text)) {
        const classStr = text.match(arrayClassRegExp)?.[1]
        if (classStr) {
            const classArr = classStr.replaceAll(/['" ]/g, '').split(',')
            return `class="${classArr.join(' ')}"`
        }
    }

    return ''
}
