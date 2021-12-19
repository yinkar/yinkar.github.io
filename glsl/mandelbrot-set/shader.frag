#extension GL_OES_standard_derivatives : enable

precision highp float;

uniform float u_time;
uniform vec2 u_resolution;

void main( void ) {

	vec2 pos = ( gl_FragCoord.xy / u_resolution.xy );
	pos.x = pos.x * (u_resolution.x / u_resolution.y);
	
	vec3 col = vec3(0.1);
	
	float a = pos.x * 0.8 * abs(sin(u_time * 0.5) + 4.0) - 3.0;
	float b = pos.y * 0.8 * abs(sin(u_time * 0.5) + 4.0) - 1.5;
	
	float oa = a;
	float ob = b;
	
	float r, i;
	
	const int maxIter = 100;
	
	int n = 0;
	
	for (int k = 0; k < maxIter; k++) {
		r = a * a - b * b;
		i = 2.0 * a * b;
		
		a = r + oa;
		b = i + ob;
		
		if (abs(r + i) > 16.0) break;
		
		n++;
	}
	
	float brightness = (float(n) / float(maxIter));
	
	if (n == maxIter) brightness = 0.0;
	
	col = vec3(brightness);

	gl_FragColor = vec4( col, 1.0 );

}