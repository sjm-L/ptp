const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-background text-secondary"
    >
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm <span className="text-primary">Your Name</span>
      </h1>
      <p className="text-xl">
        A creative developer who loves building digital experiences.
      </p>
    </section>
  );
};
export default Hero;
