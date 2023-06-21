import { arrayClassRegExp } from './regExp'

export function arrayClassToString(text: string) {
    text = text.trim()

    const classStr = text.match(arrayClassRegExp)?.[1]
    if (classStr) {
        const classArr = classStr.replaceAll(/['" ]/g, '').split(',')
        return text.replace(arrayClassRegExp, `class="${classArr.join(' ')}"`)
    }

    return ''
}
