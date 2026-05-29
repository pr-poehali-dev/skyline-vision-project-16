import { Canvas, extend, useFrame } from "@react-three/fiber"
import { useAspect, useTexture } from "@react-three/drei"
import { useMemo, useRef, useState, useEffect } from "react"
import * as THREE from "three"
import { Button } from "@/components/ui/button"

const TEXTUREMAP = { src: "https://i.postimg.cc/XYwvXN8D/img-4.png" }
const DEPTHMAP = { src: "https://i.postimg.cc/2SHKQh2q/raw-4.webp" }

extend(THREE as unknown as Record<string, unknown>)

const WIDTH = 300
const HEIGHT = 300

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src])
  const meshRef = useRef<THREE.Mesh>(null)

  const material = useMemo(() => {
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      uniform sampler2D uTexture;
      uniform sampler2D uDepthMap;
      uniform vec2 uPointer;
      uniform float uProgress;
      uniform float uTime;
      varying vec2 vUv;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        vec2 uv = vUv;

        float depth = texture2D(uDepthMap, uv).r;
        vec2 displacement = depth * uPointer * 0.01;
        vec2 distortedUv = uv + displacement;

        vec4 baseColor = texture2D(uTexture, distortedUv);

        float aspect = ${WIDTH}.0 / ${HEIGHT}.0;
        vec2 tUv = vec2(uv.x * aspect, uv.y);
        vec2 tiling = vec2(120.0);
        vec2 tiledUv = mod(tUv * tiling, 2.0) - 1.0;

        float brightness = noise(tUv * tiling * 0.5);
        float dist = length(tiledUv);
        float dot = smoothstep(0.5, 0.49, dist) * brightness;

        float flow = 1.0 - smoothstep(0.0, 0.02, abs(depth - uProgress));

        vec3 mask = vec3(dot * flow * 10.0, 0.0, 0.0);

        vec3 final = baseColor.rgb + mask;

        gl_FragColor = vec4(final, 1.0);
      }
    `

    return new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: rawMap },
        uDepthMap: { value: depthMap },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uProgress: { value: 0 },
        uTime: { value: 0 },
      },
      vertexShader,
      fragmentShader,
    })
  }, [rawMap, depthMap])

  const [w, h] = useAspect(WIDTH, HEIGHT)

  useFrame(({ clock, pointer }) => {
    if (material.uniforms) {
      material.uniforms.uProgress.value = Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5
      material.uniforms.uPointer.value = pointer
      material.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  const scaleFactor = 0.3
  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
      <planeGeometry />
    </mesh>
  )
}

export const Hero3DWebGL = () => {
  const titleWords = "DynaSwitch".split(" ")
  const subtitle = "Enterprise-коммутаторы нового поколения от российского вендора."
  const [visibleWords, setVisibleWords] = useState(0)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [delays, setDelays] = useState<number[]>([])
  const [subtitleDelay, setSubtitleDelay] = useState(0)

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07))
    setSubtitleDelay(Math.random() * 0.1)
  }, [titleWords.length])

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800)
      return () => clearTimeout(timeout)
    }
  }, [visibleWords, titleWords.length])

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
      </div>

      {/* Product image overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-end pointer-events-none pr-4 md:pr-16">
        <div className="w-[55%] md:w-[45%] xl:w-[40%] opacity-90 drop-shadow-2xl">
          <img
            src="https://cdn.poehali.dev/projects/a1418cb8-6045-4d01-92d6-d67aa7be91d1/bucket/30ec337d-84f0-4894-a19e-449a7019442a.png"
            alt="DynaSwitch iDATA"
            className="w-full h-auto object-contain"
            style={{ filter: "drop-shadow(0 0 40px rgba(239,68,68,0.3))" }}
          />
        </div>
      </div>

      <div className="h-screen uppercase items-start w-full absolute z-[60] pointer-events-none px-8 md:px-16 flex justify-center flex-col">
        <div className="max-w-[55%] md:max-w-[50%]">
          {/* Brand label */}
          <div
            className={`font-space-mono text-red-500 text-xs md:text-sm tracking-[0.3em] mb-4 ${subtitleVisible ? "fade-in" : ""}`}
            style={{ opacity: subtitleVisible ? undefined : 0 }}
          >
            iDATA · РОССИЙСКИЙ ВЕНДОР
          </div>

          <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold font-orbitron">
            <div className="flex flex-wrap gap-2 lg:gap-4 overflow-hidden text-white">
              {titleWords.map((word, index) => (
                <div
                  key={index}
                  className={index < visibleWords ? "fade-in" : ""}
                  style={{
                    animationDelay: `${index * 0.13 + (delays[index] || 0)}s`,
                    opacity: index < visibleWords ? undefined : 0,
                  }}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>

          <div className="text-sm md:text-lg xl:text-xl 2xl:text-2xl mt-4 overflow-hidden text-gray-300 font-normal max-w-xl">
            <div
              className={subtitleVisible ? "fade-in-subtitle" : ""}
              style={{
                animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`,
                opacity: subtitleVisible ? undefined : 0,
                textTransform: "none",
              }}
            >
              {subtitle}
            </div>
          </div>

          {/* Stats row */}
          <div
            className={`flex gap-6 mt-8 ${subtitleVisible ? "fade-in" : ""}`}
            style={{
              animationDelay: `${titleWords.length * 0.13 + 0.6}s`,
              opacity: subtitleVisible ? undefined : 0,
              textTransform: "none",
            }}
          >
            <div className="text-left">
              <div className="font-orbitron text-2xl md:text-3xl font-bold text-red-500">100G</div>
              <div className="font-space-mono text-gray-400 text-xs">скорость портов</div>
            </div>
            <div className="w-px bg-red-500/30" />
            <div className="text-left">
              <div className="font-orbitron text-2xl md:text-3xl font-bold text-red-500">32</div>
              <div className="font-space-mono text-gray-400 text-xs">порта QSFP28</div>
            </div>
            <div className="w-px bg-red-500/30" />
            <div className="text-left">
              <div className="font-orbitron text-2xl md:text-3xl font-bold text-red-500">РФ</div>
              <div className="font-space-mono text-gray-400 text-xs">реестр Минпромторг</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex gap-4 mt-8 pointer-events-auto ${subtitleVisible ? "fade-in" : ""}`}
            style={{
              animationDelay: `${titleWords.length * 0.13 + 0.9}s`,
              opacity: subtitleVisible ? undefined : 0,
              textTransform: "none",
            }}
          >
            <Button className="bg-red-500 hover:bg-red-600 text-white font-geist border-0 text-sm md:text-base px-6 py-3">
              Получить КП
            </Button>
            <Button
              variant="outline"
              className="border-red-500/50 text-white hover:bg-red-500/10 font-geist text-sm md:text-base px-6 py-3 bg-transparent"
            >
              Смотреть каталог
            </Button>
          </div>
        </div>
      </div>

      <Canvas
        flat
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 1] }}
        style={{ background: "#000000" }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

export default Hero3DWebGL
