const Home = () => {
  return (
    <section className="h-[calc(100vh-var(--navbar-height))] relative">
      <img
        src="/homes.png"
        alt=""
        className="w-full h-full object-cover sm:hidden"
      />
      <img
        src="/homem.png"
        alt=""
        className="w-full h-full object-cover hidden sm:block lg:hidden"
      />
      <img
        src="/home.png"
        alt=""
        className="w-full h-full object-cover hidden lg:block"
      />
      <button className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-1/3 lg:bottom-1/3 !bg-[#ffdd6c] !text-black !outline-none">
        Start Yout Pathway
      </button>
    </section>
  );
};

export default Home;
