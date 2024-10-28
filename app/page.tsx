import { Footer } from "./components/BuzzvelHome/common/Footer";
import { Header } from "./components/BuzzvelHome/common/Header";
import { PowerAvailable } from "./components/BuzzvelHome/common/PowerAvailable";
import { SomethingAwesome } from "./components/BuzzvelHome/common/SomethingAwesome";
import { PersonalizedServices } from "./components/BuzzvelHome/PersonalizedServices";
import { PickTheSun } from "./components/BuzzvelHome/PickTheSun";
import { PowerfulFeatures } from "./components/BuzzvelHome/PowerfulFeatures";
import { SunPower } from "./components/BuzzvelHome/SunPower";

export default function Home() {
  return (
    <>
      <Header />
      <SunPower />
      <PickTheSun />
      <PersonalizedServices />
      <PowerfulFeatures />
      <SomethingAwesome />
      <PowerAvailable />
      <Footer />
    </>
  )
}