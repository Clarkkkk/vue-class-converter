import * as vscode from 'vscode'
import {
    arrayClassRegExp,
    arrayClassToString,
    arrayItemRegExp,
    partialArrayClassEndRegExp,
    partialArrayClassRegExp,
    stringClassRegExp,
    stringClassToArray
} from '../utils'

export function switchClassStyle() {
    const editor = vscode.window.activeTextEditor
    if (!editor) return

    const selection = editor.selection
    const document = editor.document
    const startLine = document.lineAt(selection.start.line)
    let endLine = document.lineAt(selection.start.line)
    const indentation = startLine.text.match(/^[ ]*/)?.[0] || ''
    const text = startLine.text.trim()

    let result = ''
    if (arrayClassRegExp.test(text)) {
        result = arrayClassToString(text)
    } else if (stringClassRegExp.test(text)) {
        result = stringClassToArray(text)
    } else if (partialArrayClassRegExp.test(text)) {
        let wholeText = text
        let lineIndex = selection.start.line + 1
        let valid = true
        while (true) {
            const item = document.lineAt(lineIndex).text.trim()
            if (arrayItemRegExp.test(item)) {
                wholeText += item
                lineIndex++
            } else if (isPartialArrayClassEnd(item)) {
                wholeText += item
                break
            } else {
                valid = false
                break
            }
        }
        if (valid) {
            result = arrayClassToString(wholeText)
            endLine = document.lineAt(lineIndex)
        } else {
            vscode.window.showErrorMessage('Only pure string array can be converted.')
        }
    }

    if (result) {
        result = indentation + result
        editor.edit((editBuilder) => {
            editBuilder.replace(new vscode.Range(startLine.range.start, endLine.range.end), result)
        })
    } else {
        vscode.window.showErrorMessage(
            'Cannot recognize valid vue class. Please place the cursor on the first line of vue class'
        )
    }
}

function isPartialArrayClassEnd(text: string) {
    return partialArrayClassEndRegExp.test(text)
}
