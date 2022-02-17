import img1 from "../images/card/hagiang.jpg";
import img2 from "../images/card/friend.jpg";
import img3 from "../images/card/song.jpg";

console.log(img1);
const dataCard = [
  {
    title: "Plan",
    description:
      "Since life is a journey, we have no reason to stop searching and discovering new places.  Tired days, exhausted both body and soul, just wish I could leave everything behind, then pick up my backpack and go.",
    img: img1,
    path: "/plan",
  },
  {
    title: "Memory",
    description:
      "As we grow older and more mature, we realize that having a lot of friends in quantity is not as important as having really quality friends.",
    img: img2,
    path: "/memory",
  },
  {
    title: "Video",
    description:
      "When a person has passion, they have a life goal, there will be a life purpose, from which they try to persevere and succeed.",
    img: img3,
    path: "/memory",
  },
];

export default dataCard;
