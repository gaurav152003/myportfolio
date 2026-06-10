import React, { useState } from "react";
import MyProjectDetails from "./MyProjectDetails";

function Myproject({
  title,
  tags,
  description,
  subDescription,
  href,
  image,
  setpreview,
}) {
  const [isHidden, setisHidden] = useState(false);
  return (
    <>
      <div
        className="
    group
    relative
    rounded-2xl
    border border-neutral-800
    p-6
    transition-all duration-300
    hover:border-blue-500/50
    hover:bg-neutral-900/30
    hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]
  "
        onMouseEnter={() => setpreview(image)}
        onMouseLeave={() => setpreview(null)}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <h2 className="text-2xl font-bold text-white group-hover:text-blue-500 transition-all">
              {title}
            </h2>

            <div className="flex flex-wrap gap-2 mb-5 mt-3">
              {tags.map((t) => (
                <span
                  key={t.id}
                  className="
              px-3 py-1
              text-xs
              rounded-full
              border border-neutral-700
              text-blue-500
            "
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setisHidden(true)}
            className="
    mt-4
    md:mt-0
    self-start
    text-white
    hover:text-blue-400
    transition-all
    hover:translate-x-2
  "
          >
            Read More →
          </button>
        </div>

        {/* Corner Accent */}
        <div
          className="
      absolute
      top-0
      right-0
      h-12
      w-12
      border-t-2
      border-r-2
      border-cyan-500/40
      rounded-tr-2xl
    "
        />
      </div>
      {isHidden && (
        <MyProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setisHidden(false)}
        />
      )}
    </>
  );
}

export default Myproject;
