import { InfiniteMovingCards } from ".";

export function InfiniteMovingCardsDemo() {
  return (
    // <div className="m-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden border-3 border-green-300">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    // </div>
  );
}

const testimonials = [
  {
    url: "https://thesmscentral.com/img/clientlogos1.png",
  },
  {
    url: "https://thesmscentral.com/img/clientlogos2.png",
  },
  {
    url: "https://thesmscentral.com/img/clientlogos3.png",
  },
  {
    url: "https://thesmscentral.com/img/clientlogos4.png",
  },
  {
    url: "https://thesmscentral.com/img/clientlogos5.png",
  },
  {
    url: "https://thesmscentral.com/img/clientlogos6.png",
  },
  {
    url: "https://thesmscentral.com/img/clientlogos7.png",
  },
  {
    url: "https://thesmscentral.com/img/clientlogos8.png",
  },
  {
    url: "https://thesmscentral.com/img/clientlogos9.png",
  },
  {
    url: "https://thesmscentral.com/img/clientlogos10.png",
  },
];
