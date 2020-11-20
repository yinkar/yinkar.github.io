let desktop, wallpaper, mouse, pMouse, programs, memory;

const app = document.getElementById('app');
const canvas = document.createElement('canvas');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight - 4;

app.appendChild(canvas);

const ctx = canvas.getContext('2d');

function start() {
    desktop = new Desktop(0, 0, canvas.width, canvas.height);
    wallpaper = new Wallpaper('wallpaper1.png');
    mouse = new Mouse(canvas.width / 2, canvas.height / 2);
    pMouse = new Mouse(mouse.x, mouse.y);
    memory = [];
    
    programs = [
        new Program(
            {
                name: 'paint',
                title: 'Paint',
                icon: new Icon('icons/paint-palette.png'),
                action: () => {
                    console.log('Paint opened');                    
                },
                programWindow: new ProgramWindow()
            }
        ),
    ];
}

function update() {
    pMouse.x = mouse.x;
    pMouse.y = mouse.y;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    wallpaper.draw(ctx, 0, 0, desktop.width, desktop.height);

    programs.forEach((e, i, o) => {
        e.icon.x = 100;
        e.icon.y = i * 100 + 100;
        e.icon.draw(ctx, e.icon.x, e.icon.y);
    });

    memory.forEach((e, i, o) => {
        e.programWindow.draw(ctx);
    });
    
    if (mouse.leftClick) {
        mouse.selectionRectangle(ctx);
    }

    if (mouse.leftClick) {
        mouse.size = 13;
    }
    else {
        mouse.size = 15 - Math.min(Math.abs(mouse.x - pMouse.x), 5) / 2;
    }

    mouse.drawCursor(ctx);

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000';

    requestAnimationFrame(draw);
}

start();
draw();

const updateInterval = setInterval(function() {
    update();
}, 100);

window.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener('mousedown', function(e) {
    if (e.button === 0) {
        mouse.leftClick = true;
        mouse.clickedX = e.clientX;
        mouse.clickedY = e.clientY;

        programs.forEach((e, i, o) => {
            if (
                e.icon.x < mouse.x &&
                e.icon.x + e.icon.size > mouse.x &&
                e.icon.y < mouse.y &&
                e.icon.y + e.icon.size > mouse.y
            ) {
                memory.push(e);
                e.action();
            }
        });
    }

    if (e.button === 2) {
        mouse.rightClick = true;
    }
});

window.addEventListener('mouseup', function(e) {
    if (e.button === 0) {
        mouse.leftClick = false;
    }

    if (e.button === 2) {
        mouse.rightClick = false;
    }
});
