class ProgramWindow {
    constructor(x = 100, y = 100, width = 300, height = 400) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.closeButton = new WindowButton(
            'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDU1LjExMSA0NTUuMTExIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUuMTExIDQ1NS4xMTE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0UyNEM0QjsiIGN4PSIyMjcuNTU2IiBjeT0iMjI3LjU1NiIgcj0iMjI3LjU1NiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0QxNDAzRjsiIGQ9Ik00NTUuMTExLDIyNy41NTZjMCwxMjUuMTU2LTEwMi40LDIyNy41NTYtMjI3LjU1NiwyMjcuNTU2Yy03Mi41MzMsMC0xMzYuNTMzLTMyLjcxMS0xNzcuNzc4LTg1LjMzMw0KCWMzOC40LDMxLjI4OSw4OC4xNzgsNDkuNzc4LDE0Mi4yMjIsNDkuNzc4YzEyNS4xNTYsMCwyMjcuNTU2LTEwMi40LDIyNy41NTYtMjI3LjU1NmMwLTU0LjA0NC0xOC40ODktMTAzLjgyMi00OS43NzgtMTQyLjIyMg0KCUM0MjIuNCw5MS4wMjIsNDU1LjExMSwxNTUuMDIyLDQ1NS4xMTEsMjI3LjU1NnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzMxLjM3OCwzMzEuMzc4Yy04LjUzMyw4LjUzMy0yMi43NTYsOC41MzMtMzEuMjg5LDBsLTcyLjUzMy03Mi41MzNsLTcyLjUzMyw3Mi41MzMNCgljLTguNTMzLDguNTMzLTIyLjc1Niw4LjUzMy0zMS4yODksMGMtOC41MzMtOC41MzMtOC41MzMtMjIuNzU2LDAtMzEuMjg5bDcyLjUzMy03Mi41MzNsLTcyLjUzMy03Mi41MzMNCgljLTguNTMzLTguNTMzLTguNTMzLTIyLjc1NiwwLTMxLjI4OWM4LjUzMy04LjUzMywyMi43NTYtOC41MzMsMzEuMjg5LDBsNzIuNTMzLDcyLjUzM2w3Mi41MzMtNzIuNTMzDQoJYzguNTMzLTguNTMzLDIyLjc1Ni04LjUzMywzMS4yODksMGM4LjUzMyw4LjUzMyw4LjUzMywyMi43NTYsMCwzMS4yODlsLTcyLjUzMyw3Mi41MzNsNzIuNTMzLDcyLjUzMw0KCUMzMzkuOTExLDMwOC42MjIsMzM5LjkxMSwzMjIuODQ0LDMzMS4zNzgsMzMxLjM3OHoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K', 
        this.x + this.width - 50, 
        this.y + 10);
    }

    launch() {
        
    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.fillStyle = 'rgb(255, 255, 255, 1)';
        ctx.strokeStyle = 'rgb(0, 0, 0, .3)';
        
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.fill();

        this.closeButton.draw(ctx);
    }
}