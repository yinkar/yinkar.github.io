#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(void) {
    vec2 uv = gl_FragCoord.xy;
    uv = uv / u_resolution.xy;
	uv.x *= (u_resolution.x / u_resolution.y);

	vec3 color = vec3(0.0, 0.2, 0.5);
	
	if (mod(length(vec2(uv.x - 0.85, uv.y - 0.5)) - u_time / 9.0, 0.05) < 
        0.01 / length(vec2(uv.x - 0.85, uv.y - 0.5)) * 0.04) {
		color += 0.25;
	}
	
	gl_FragColor = vec4( color, 1.0 );
}
