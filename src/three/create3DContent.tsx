import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
// import ThreeD from "./static/3D.gltf"
import { WebGLRenderer } from "three"
import {
  SMAAEffect,
  EdgeDetectionMode,
  BloomEffect,
  BlurPass,
  EffectComposer,
  RenderPass,
  BlendFunction,
  EffectPass,
  KernelSize,
  SMAAPreset,
  SMAAImageLoader,
} from "postprocessing"
const clock = new Clock()
import { Clock } from "three"

export default function create3DContent(canvasID){
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  const renderer = new WebGLRenderer({
    powerPreference: "high-performance",
    antialias: false,
    stencil: false,
    depth: false,
    alpha: true,
  })

  renderer.setSize(window.innerWidth, window.innerHeight)
  var canvas = document.getElementById("threeCanvas")
  renderer.domElement.style =
    "display: block; width: " +
    window.window.innerWidth +
    "px; height: " +
    window.window.innerHeight +
    "px;max-width:100%"

  canvas.appendChild(renderer.domElement)
  const loader = new GLTFLoader()
  const scene = new THREE.Scene()
  // scene.background = new THREE.Color( 0xff0000 );
  loader.load(
    "./static/3D.gltf",
    function (gltf) {
      const model = gltf.scene
      const whiteMaterial = new THREE.MeshBasicMaterial({
        color: "rgb(255,255,255)",
        transparent: true,
        opacity: 0.09,
      })
      model.children[0].children.forEach(mesh => {
        mesh.material = whiteMaterial
      })
      const light = new THREE.PointLight("white", 2, 100)
      light.position.set(-1, 5, 5)
      scene.add(light)
      scene.add(model)
      camera.position.z = 3.5
      const raycaster = new THREE.Raycaster()
      const boundingbox = new THREE.Box3()
      boundingbox.setFromObject(model)
      model.position.y = -boundingbox.min.y
      boundingbox.setFromObject(model)
      const minX = new THREE.Vector3().subVectors(
        boundingbox.min,
        camera.position
      ).x
      const maxX = new THREE.Vector3().subVectors(
        boundingbox.max,
        camera.position
      ).x
      const minY = new THREE.Vector3().subVectors(
        boundingbox.min,
        camera.position
      ).y
      const maxY = new THREE.Vector3().subVectors(
        boundingbox.max,
        camera.position
      ).y
      const Z = new THREE.Vector3().subVectors(
        boundingbox.max,
        camera.position
      ).z
      const intersectingVectors = []
      const scale = (n, min, max, steps) => min + (max - min) * (n / steps)
      const steps = 60
      for (let X = 0; X <= steps; X++) {
        for (let Y = 0; Y <= steps; Y++) {
          const x = scale(X, minX, maxX, steps)
          const y = scale(Y, minY, maxY, steps)
          raycaster.set(
            new THREE.Vector3(0, 0, camera.position.z),
            new THREE.Vector3(x, y, Z).normalize()
          )
          var intersects = raycaster.intersectObjects(scene.children, true)
          if (intersects.length !== 0) {
            intersectingVectors.push([x, y])
          }
        }
      }

      const cubes = []
      const cubesColor = []
      intersectingVectors.forEach(pos => {
        const randomNumber = Math.random() * camera.position.z
        const scaleSize = 0.05
        const randomAgain = 0.7 + (Math.random() - 0.5) * 1.3
        const geometry = new THREE.BoxGeometry(
          scaleSize * randomNumber * randomAgain,
          scaleSize * randomNumber * randomAgain,
          0.005
        )
        // const r = parseInt(
        //   Math.max(0, 50 + (Math.random() - 0.5) * 100),
        //   10
        // )
        // const b = parseInt(
        //   Math.min(220, Math.max(0, 255 + (Math.random() - 0.5) * 100)),
        //   10
        // )
        // const g = parseInt(100 + (Math.random() - 0.5) * 100, 10)
        // console.log("rgb("+r+", "+g+", "+b+")")
        const r =255
        const g =255
        const b =255
        const material = new THREE.MeshBasicMaterial({
          color: "rgba(" + r + ", " + g + ", " + b + ",5)",
          transparent: true,
          opacity: 0.5 + (Math.random() - 0.5) * 0.5,
        })
        // cubesColor.push(material.color.getHex())
        // cubesColor.push([material.opacity, Math.random()])
        const cube = new THREE.Mesh(geometry, material)
        cube.position.z = camera.position.z * (1 - randomNumber)
        cube.position.x =
          (pos[0] + (Math.random() - 0.5) * 0.03) * randomNumber
        cube.position.y =
          (pos[1] + (Math.random() - 0.5) * 0.03) * randomNumber
        cubes.push(cube)
        scene.add(cube)
        cubes.forEach(cube => {
          cube.material.needsUpdate = true
        })
      })
      const composer = new EffectComposer(renderer)
      composer.addPass(new RenderPass(scene, camera))
      const bloomOptions = {
        blendFunction: BlendFunction.SCREEN,
        kernelSize: KernelSize.MEDIUM,
        luminanceThreshold: 0.1,
        luminanceSmoothing: 0.09,
        intensity: 1,
        resolutionScale: 0.01,
        height: 720,
        width: 720,
      }
      const bloomEffect = new BloomEffect(bloomOptions)
      new SMAAImageLoader().load(([search, area]) => {
        const blurPass = new BlurPass({
          height: 720,
        })
        blurPass.scale = 0.1
        // composer.addPass(blurPass);

        const smaaEffect = new SMAAEffect(
          search,
          area,
          SMAAPreset.HIGH,
          EdgeDetectionMode.DEPTH
        )
        composer.addPass(new EffectPass(camera, smaaEffect))

        smaaEffect.edgeDetectionMaterial.setEdgeDetectionThreshold(0.01)

        const bloomPass = new EffectPass(camera, smaaEffect, bloomEffect)
        composer.addPass(bloomPass)
      })

      // composer.render();
      var origine = camera.position.y
      var origineItensity = 1
      var origineOpacity = 1
      // camera.position.z = -1
      function updateCamera(ev) {
        // camera.position.x = 10 - window.scrollY / 500.0;
        camera.position.y = origine - window.scrollY / 1000.0
        canvas.opacity = origineOpacity - window.scrollY / 1000.0
        bloomEffect.intensity = origineItensity + window.scrollY / 700.0
      }
      window.addEventListener("scroll", updateCamera)
      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.updateProjectionMatrix()
      })
      requestAnimationFrame(function render() {
        // cubes.forEach((cube, index) => {
        //   const color = cubesColor[index]
        //   // cube.material.color.setHex(color[0] + 50*((color[1]-0.5)*Math.cos(clock.elapsedTime)))
        //   cube.material.opacity =
        //     color[0] +
        //     1.3 * color[1] * Math.cos(13 * color[1] + clock.elapsedTime)
        // })
        if (clock.elapsedTime > 0.3) {
          if (camera.position.z < 3.49) {
            camera.position.z =
              -10 + 13.5 * Math.sin(clock.elapsedTime * 0.5) ** 2
          }
        }

        requestAnimationFrame(render)
        composer.render(clock.getDelta())
      })
    },
    function (xhr) {
      // console.log(xhr);
    },

    function (error) {
      console.error(error)
    }
  )
}
