import React from "react";
import TeamMember from "./TeamMember";
import useFetch from "../../CustomHook/useFetch";

const url =
  "https://raw.githubusercontent.com/developerHub01/Event-managemenet-fake-data/main/teamMemeberList.json";

const TeamSection = () => {
  const { data, isLoading, getError } = useFetch(url);
  return (
    <section className="w-[90%] mx-auto max-w-6xl min-h-screen py-10 flex flex-col gap-6">
      <div className="w-full flex flex-col justify-center gap-6 text-center md:text-left max-w-3xl mx-auto">
        <h2 className="text-center font-bold text-4xl relative leading-relaxed text-pink-700 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-32 before:h-1 before:bg-pink-700">
          Our Team Members
        </h2>
        <p className="text-center text-slate-700 leading-relaxed text-base">
          Our team is a group of dedicated professionals who bring a wealth of
          talent and expertise to the table. With a shared commitment to
          excellence, we work collaboratively to deliver outstanding results for
          our clients. Get to know the individuals behind our success, each
          contributing their unique skills to our mission of creating memorable
          experiences.
        </p>
      </div>
      {getError && <span>{getError}</span>}
      {isLoading ||
        (data && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((item) => (
              <TeamMember key={item.id} {...item} />
            ))}
          </div>
        ))}
    </section>
  );
};

export default TeamSection;
