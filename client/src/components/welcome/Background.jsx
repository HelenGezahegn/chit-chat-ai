import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import options from "./linkTriangles";

const Background = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default Background;
