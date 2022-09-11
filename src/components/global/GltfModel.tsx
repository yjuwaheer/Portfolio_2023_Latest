import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = ({ modelPath, scale = 40, position = [0, 0, 0], rotation }: any) => {
  const ref = useRef();
  const gltf: any = useLoader(GLTFLoader, modelPath);
  const [hovered, hover] = useState(false);

  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={hovered ? scale * 1.2 : scale}
        rotation={rotation}
        onPointerOver={(event: any) => hover(true)}
        onPointerOut={(event: any) => hover(false)}
      />
    </>
  );
};

export default GltfModel;
