#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(void) {
    float mx = max(u_resolution.x, u_resolution.y);
    vec2 uv = gl_FragCoord.xy / mx;

    vec3 color = vec3(0.0, 0.1, 0.3);

    const int waveCount = 6;
    float yDir = cos(u_time * 3.0) * 0.08;

    for (int i = 0; i < waveCount; i++) {

        if (mod(float(i), 2.0) == 0.0) {
            yDir *= -1.0;
        }
        if (uv.y <
                sin(
                uv.x * 60.0 / (1.0 + (float(i) / 10.0)) - u_time
                * (float(waveCount * 3) - float(i) * 3.0)
            )
            * 0.01
            + 0.2
            + (float(i) + yDir * (float(i) * 0.8))
            / 25.0)
        {
            color.bg += 0.01 + float(i) / 25.0;
        }
    }

	gl_FragColor = vec4(color, 1.0);
}

