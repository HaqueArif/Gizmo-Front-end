import Lottie from "react-lottie";
import animationData from "../../../public/iphone.json";
import styles from "../../styles/HeroSection.module.css";
import Container from "../../components/Shared/Container";

const HeroSection = () => {
  const lottieOptions = {
    loop: false, // Loop the animation
    autoplay: true, // Play automatically
    animationData: animationData, // Lottie JSON animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Ensures the animation is responsive
    },
  };

  return (
    <section className={styles.main_container}>
      <div className={styles.background}></div>
      <Container className="  flex flex-col-reverse lg:flex-row items-center">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-white text-4xl lg:text-6xl font-bold mb-4">
            Welcome to <span className="text-purple-400 ">GizmoGalaxy</span>
          </h1>
          <p className="text-white text-lg lg:text-xl mb-6">
            Explore the latest smartphones, accessories, and unbeatable deals.
            Upgrade your tech game with the best gadgets in the galaxy.
          </p>
          <div className="space-x-4">
            <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transition">
              Shop Now
            </button>
            <button className="bg-white text-purple-500 hover:text-purple-600 border border-purple-500 py-3 px-6 rounded-lg font-semibold shadow-lg transition">
              Browse Categories
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center items-center relative">
          <Lottie options={lottieOptions} height={400} width={400} />
          <div className="absolute bg-purple-400 rounded-full h-64 w-64 lg:h-96 lg:w-96 top-10 left-10 blur-3xl opacity-20"></div>
        </div>
      </Container>

      {/* Decorative Background Elements */}
    </section>
  );
};

export default HeroSection;
