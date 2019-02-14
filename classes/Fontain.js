class Fontain {
	constructor(container, src) {
		this.container = container
		this.src = src

		this.load()
	}
	async load(){
		this.img = await this.addImageProcess(this.src)
		this.onload()
	}
	addImageProcess(src){
		return new Promise((resolve, reject) => {
	    let img = new Image()
	    img.onload = () => resolve(img)
	    img.onerror = reject
	    img.src = src
  		})
	}
	onload(){
		var scene = new THREE.Scene();
		var loader = new THREE.TextureLoader();
		loader.load(
			this.src,
			(function ( texture ) {
				var imageWidth = texture.image.width;
				var imageHeight = texture.image.height;
				var width = 700,
					height = width*imageHeight/imageWidth,
					halfHeight = height/2;

				var camera = new THREE.PerspectiveCamera(45, imageWidth / imageHeight, 0.001, 1000);
				camera.position.z = halfHeight / Math.tan(Math.PI / 8);

				const vertexShader = `
					varying vec2 vUv;
    
				  	void main() {
						vUv = uv;        
				    	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
				    	gl_Position = projectionMatrix * mvPosition;
				    }
				`

				var uniforms = {
					texture: {
				      value: texture //new THREE.TextureLoader().load("https://threejs.org/examples/textures/UV_Grid_Sm.jpg")
				    },
				    time: {
				      value: 0
				    },
				    color: { value: new THREE.Color( 0xffffff ) } ,
				    fall: {
				    	value: -1
				    }
				};
				const fragmentShader = `
					#define PI 3.1415926
				    
				    vec3 mod289(vec3 x) {
				  		return x - floor(x * (1.0 / 289.0)) * 289.0;
					}
					vec2 mod289(vec2 x) {
					  return x - floor(x * (1.0 / 289.0)) * 289.0;
					}
					vec3 permute(vec3 x) {
					  return mod289(((x*34.0)+1.0)*x);
					}
					float snoise(vec2 v)
					  {
					  const vec4 C = vec4(0.211324865405187,  
					                      0.366025403784439, 
					                     -0.577350269189626, 
					                      0.024390243902439);
					  vec2 i  = floor(v + dot(v, C.yy) );
					  vec2 x0 = v -   i + dot(i, C.xx);
					  vec2 i1;
					  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
					  vec4 x12 = x0.xyxy + C.xxzz;
					  x12.xy -= i1;
					  i = mod289(i);
					  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
							+ i.x + vec3(0.0, i1.x, 1.0 ));
					  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
					  m = m*m ;
					  m = m*m ;
					  vec3 x = 2.0 * fract(p * C.www) - 1.0;
					  vec3 h = abs(x) - 0.5;
					  vec3 ox = floor(x + 0.5);
					  vec3 a0 = x - ox;
					  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
					  vec3 g;
					  g.x  = a0.x  * x0.x  + h.x  * x0.y;
					  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
					  return 130.0 * dot(m, g);
					}


				  	uniform sampler2D texture;
				    uniform float time;
				    uniform float fall;
				    uniform vec3 color;
				  	varying vec2 vUv;
				    
				    void main() {
				    	vec2 uv = vUv;
				    	vec4 tcolor;
				    	vec4 couleur;
			    		
		    			//uv.y += (1.2*sin(uv.x * 200.0 + time) * 3.5*sin(uv.x * 5.6 + time) * 1.*sin(uv.x * 10. + time)) * 0.01;//C=0.8
		    			//uv.y -= (2.2*sin(uv.x * 200.0 + time) * 3.5*sin(uv.x * 5.6 + time) *  snoise(uv)*2. *sin(uv.x * 10. + time)) * 0.01;
		    			//uv.y += (snoise(uv*60.)*sin(uv.x * 1.0 + 5.) * 0.4*sin(uv.x * 1. + time) * 0.3*sin(uv.x * 200. + 5.))*fall;
		    			uv.y += (snoise(uv*30.)*sin(uv.x * 50.0 + time/2.))/20.;
		    			//uv.y += (snoise(uv*30.)*sin(uv.x * 48.0 + time) * 0.4*sin(uv.x * 50. + time) * 0.3*sin(uv.x * 190. + time));
			    		
			    		tcolor = texture2D( texture, uv );
						gl_FragColor = tcolor;
				    }
				`


				var shaderMaterial = new THREE.ShaderMaterial({
					uniforms: uniforms,
					vertexShader: vertexShader,
					fragmentShader: fragmentShader
				})

				var geometry = new THREE.PlaneBufferGeometry( width, height, 0);
				var plane = new THREE.Mesh( geometry, shaderMaterial );
				plane.position.set(0, 0, 0);
			    scene.add( plane );

				var renderer = new THREE.WebGLRenderer();
				renderer.setSize( width, height );
				this.container.appendChild( renderer.domElement );

				var clock = new THREE.Clock();
				var des = 0.5;
				renderer.setAnimationLoop(() => {
				  plane.material.uniforms.time.value = clock.getElapsedTime();

				  /*if(plane.material.uniforms.time.value > 5){
				  	clock = new THREE.Clock();
				  }*/

				  if(plane.material.uniforms.fall.value >= 1.2){
				  	des = -0.5;
				  }else if(plane.material.uniforms.fall.value <= -1.2){
				  	des = 0.5;
				  }
				  plane.material.uniforms.fall.value += des;
				  renderer.render(scene, camera)
				});
				 //renderer.render(scene, camera)
			}).bind(this)
		);
	}
}


export default Fontain;