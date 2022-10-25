import { TypeAnimation } from "react-type-animation";

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        "Sophomore at VIT-C", // Types 'One'
        3000, // Waits 1s
        "Frontend Developer", // Deletes 'One' and types 'Two'
        3000, // Waits 2s
        /*
        "Movie Buff",
        3000, // Types 'Three' without deleting 'Two'
      */
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
    />
  );
};

export default Typing;
