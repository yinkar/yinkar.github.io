class Program {
    constructor({name, title, icon, action, programWindow} = {}) {
        this.name = name;
        this.title = title;
        this.icon = icon;
        this.action = action;
        this.programWindow = programWindow;
    }

    action() {
        this.action();
    }
}