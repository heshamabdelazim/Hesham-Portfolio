import Particles from "./Particles";

function BG_particles() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Particles
        particleColors={["#0083ff6e", "#ffa500"]}
        particleCount={200}
        particleSpread={15}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
}

export default BG_particles;
