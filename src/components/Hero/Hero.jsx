import Grid from "./Grid";
import Text from "./Text";
import { styles } from "../../styles/styles";

export default function Hero() {
  return (
    <div className="relative w-full  overflow-hidden bg-gray-50">
      <div
        className={`w-full container mx-auto relative flex flex-wrap justify-center items-center sm:justify-between sm:gap-0 gap-5 ${styles.paddingX}`}
      >
        {/* Hero Text */}
        <Text />

        {/* Decorative image grid */}
        <Grid />
      </div>
    </div>
  );
}
