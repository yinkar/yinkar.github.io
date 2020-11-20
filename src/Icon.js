class Icon extends ImageClass {
    constructor(src, x, y) {
        super(src);
        this.x = x;
        this.y = y;
        this.size = 32;
    }

    draw(ctx, x = this.x, y = this.y) {
        this.image.width = this.size;
        this.image.height = this.size;

        ctx.drawImage(this.image, x, y, this.image.width, this.image.height);
    }
}