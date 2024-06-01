import Tabs from "@/components/common/Tabs";
import Profile from "@/components/homepage/Profile";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex container 2xl:max-w-[1140px] px-3 mx-auto justify-between">
        <Profile />
        {/* <ParallaxCircles /> */}
        <Tabs />
      </div>
    </div>
  );
}
