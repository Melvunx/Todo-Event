import Navbar from "@/components/Navbar";
import LetterPullup from "../components/ui/letter-pullup";

const Home = () => {
  return (
    <div>
      <Navbar />
      <LetterPullup words="Home" delay={0.05} className="text-left font-bold" />
    </div>
  );
};

export default Home;
