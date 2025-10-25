import { color } from "motion/react";
import { Marquee } from "./Marquee";
import { twMerge } from "tailwind-merge";

const reviews = [
  {
    name: "WEBTALK ",
    body: "A real-time chat application with one-on-one and group messaging, built using the MERN stack.",
   
  },
  {
    name: "EduNova",
    body: "An online learning platform built with HTML5, CSS3, and Javascript.",
   
  },
  {
    name: "Bookify",
    body: "An online Bookstore built with React,Tailwind CSS,JSON Server and Razorpay ",
   
  },
  {
    name: "My Portfolio",
    body: "A personal portfolio website built with React,Three,and Tailwind CSS ",
 
  },
 
];

const firstRow = reviews;


const ReviewCard = ({ name,  body }) => {
  return (
    <figure 
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 transition-transform duration-500 hover:rotate-y-6 hover:scale-105 bg-gradient-to-t from-neutral-500  to-white",
    
      )}
      style={{ transformStyle: "preserve-3d" ,border:"1px solid #ccc",boxShadow:"0px 2px 2px black",color:"black" }}
    >
      <div className="flex flex-row items-center gap-2">
    
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold dark:text-white ">
            {name}
          </figcaption>

        </div>
      </div>
      <blockquote className="mt-2 text-sm text-neutral-300" style={{color:"black"}}>{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden perspective-[1000px]">
      <Marquee pauseOnHover className="[--duration:10s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
