// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { switchClassStyle } from './actions'

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // eslint-disable-next-line no-console
    console.log('Congratulations, your extension "vue-class-converter" is now active!')

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    context.subscriptions.push(
        vscode.commands.registerCommand('vue-class-converter.switchClassStyle', (data) => {
            const fileExtension = data?.path?.match(/.*\.([a-zA-Z]+)$/)?.[1] || ''
            const type = fileExtension.toLowerCase() === 'vue' ? 'vue' : 'jsx'
            switchClassStyle(type)
        })
    )
}

// This method is called when your extension is deactivated
// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate() {}
