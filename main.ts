import { Plugin } from 'obsidian';
import TasksSidebarSettingTab from './settings';

interface TasksSidebarPluginSettings {
	showTasksWithoutDate: boolean;
}

const DEFAULT_SETTINGS: TasksSidebarPluginSettings = {
	showTasksWithoutDate: true
}

export default class TasksSidebarPlugin extends Plugin {
	settings: TasksSidebarPluginSettings;

	async onload() {
		await this.loadSettings();
		this.addSettingTab(new TasksSidebarSettingTab(this.app, this));
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}


