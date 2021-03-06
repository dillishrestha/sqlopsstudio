/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';
import { FileNode } from 'sql/parts/fileBrowser/common/fileNode';

/**
 * File tree info needed to render initially
 */
export class FileBrowserTree {
	public rootNode: FileNode;
	public selectedNode: FileNode;
	public expandedNodes: FileNode[];
}
