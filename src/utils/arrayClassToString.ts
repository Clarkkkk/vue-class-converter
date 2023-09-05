import { arrayClassRegExp } from './regExp'

export function arrayClassToString(text: string) {
    text = text.trim()

    const match = text.match(arrayClassRegExp)
    const classStr = match?.[1] || match?.[2]
    if (classStr) {
        const classArr = classStr.replaceAll(/[{}'" ]/g, '').split(',')
        return text.replace(arrayClassRegExp, `class="${classArr.join(' ')}"`)
    }

    return ''
}
