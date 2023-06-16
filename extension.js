// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const { template, rReferences, readme } = require('./utils');
const { create } = require('domain');

function createFile(relativePath, content) {
	const wsedit = new vscode.WorkspaceEdit();
	const wsPath = vscode.workspace.workspaceFolders[0].uri.fsPath + "/" + relativePath; // gets the path of the first workspace folder
	const path = vscode.Uri.file(wsPath);
	wsedit.createFile(path, { ignoreIfExists: true, contents: Buffer.from(content) });
	vscode.workspace.applyEdit(wsedit);
	vscode.window.showInformationMessage('Created a new file: ' + relativePath);
}

function createTemplate(projectName) {
	createFile(projectName + '/source.Rmd', template);
	createFile(projectName + '/r-references.bib', rReferences);
	createFile(projectName + '/bibliography.bib', "");
	createFile(projectName + '/README.md', readme);
	createFile(projectName + '/raw_data/data.csv', '');
	createFile(projectName + '/processed_data/preprocessed_data.csv', '');
	createFile(projectName + '/doc/doc.json', '');
	createFile(projectName + '/0-Preprocessing.R', '')
	
	// Display a message box to the user
	vscode.window.showInformationMessage('Template created.');
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let newFolder = vscode.commands.registerCommand('papaja-template.newProjectNewFolder', async function () {
		// The code you place here will be executed every time your command is executed
		const name = await vscode.window.showInputBox({placeHolder: "Project name"});
		createTemplate(name)
	});

	let currentFolder = vscode.commands.registerCommand('papaja-template.newProjectCurrentFolder', async function () {
		// The code you place here will be executed every time your command is executed
		createTemplate('.')
	});

	context.subscriptions.push(newFolder);
	context.subscriptions.push(currentFolder);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
