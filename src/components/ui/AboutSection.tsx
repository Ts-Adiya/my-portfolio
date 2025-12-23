import Image from "next/image";
export const AboutSection = ({ scale }: { scale: number }) => {
  return (
    <section
      className=" relative flex flex-col items-center justify-center min-h-screen w-full mx-auto"
      style={{
        scale: scale,
      }}
      id="about"
    >
      <div className="text-blue-400 text-5xl font-semibold">About me!</div>
      <div className=" flex flex-col lg:flex-row items-center justify-center text-white gap-10 px-20 py-10">
        <div className="flex flex-col items-center justify-center text-white w-full">
          <div className="relative w-full aspect-square">
            <Image
              className="aspect-square "
              src="/images/profile.png"
              alt="Dia Profile"
              fill
            />
          </div>
          <h2 className="text-3xl mb-6">Hi there, I'm Dia</h2>
          <p className="text-2xl text-center px-20">
            I am a motivated Front-end Developer with three months of formal
            training at ERXES Academy. I enjoy turning designs into functional,
            responsive websites using modern web technologies. I am committed to
            continuous self-improvement and building real-world projects.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-white mix-blend-lighten overflow-hidden z-0 w-full">
          <video
            className=" h-120  pointer-events-none "
            src="/videos/glob.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
          <h2 className="text-3xl mt-7 px-30 text-center">
            I’m very flexible with time zone communications & locations.
          </h2>
        </div>
      </div>
    </section>
  );
};
