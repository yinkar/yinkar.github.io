class ImageClass {
    constructor(src) {
        this.image = new Image();
        this.image.src = src;
    }

    draw(ctx, x, y, width = null, height = null) {
        if (width) {
            this.image.width = width;
        }
        
        if (height) {
            this.image.height = height;
        }

        ctx.drawImage(this.image, x, y, this.image.width, this.image.height);
    }
}