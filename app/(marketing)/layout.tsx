import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-gray-950 relative">
      <Navbar />
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[24.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[35rem] h-[35.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <div className="pt-40 pb-20">{children}</div>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
