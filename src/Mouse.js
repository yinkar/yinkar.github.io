class Mouse {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.leftClick = false;
        this.rightClick = false;
        this.size = 15;
        this.clickedX = 0;
        this.clickedY = 0;
    }

    drawCursor(ctx, x, y) {
        ctx.lineWidth = 5;
        
        ctx.strokeStyle = 'rgba(0, 0, 0, .3)';
        ctx.filter = 'blur(2px)';
        ctx.fillStyle = 'rgba(0, 0, 0, .3)';

        ctx.beginPath();
        ctx.moveTo(mouse.x + 2, mouse.y + 3);
        ctx.lineTo(mouse.x + this.size + 2, mouse.y + 3);
        ctx.lineTo(mouse.x + 2, mouse.y + this.size + 3);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.strokeStyle = 'rgba(0, 0, 0, .9)';
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.filter = 'blur(0px)';

        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(mouse.x + this.size, mouse.y);
        ctx.lineTo(mouse.x, mouse.y + this.size);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }

    selectionRectangle(ctx) {
        ctx.strokeStyle = 'rgba(50, 50, 50, .7)';
        ctx.fillStyle = 'rgba(50, 50, 50, .3)';

        ctx.rect(this.clickedX, this.clickedY, this.x - this.clickedX, this.y - this.clickedY);
        ctx.stroke();
        ctx.fill();
    }
}