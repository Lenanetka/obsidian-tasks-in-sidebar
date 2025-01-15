import { App, PluginSettingTab, Setting } from 'obsidian';
import TasksSidebarPlugin from './main';

export default class TasksSidebarSettingTab extends PluginSettingTab {
    plugin: TasksSidebarPlugin;

    constructor(app: App, plugin: TasksSidebarPlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;

        containerEl.empty();

        new Setting(containerEl)
            .setName('Show tasks without date')
            .setDesc('Tasks without a date will be shown in the bottom after all other tasks.')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.showTasksWithoutDate)
                .onChange(async (value) => {
                    this.plugin.settings.showTasksWithoutDate = value;
                    await this.plugin.saveSettings();
                }));
    }
}