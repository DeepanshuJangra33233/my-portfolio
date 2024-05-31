import ParallaxCircles from "@/components/common/ParallaxCircles";
import Profile from "@/components/homepage/Profile";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex container 2xl:max-w-[1140px] px-3 mx-auto">
        {/* <Profile /> */}
        <ParallaxCircles />
      </div>
    </div>
  );
}
