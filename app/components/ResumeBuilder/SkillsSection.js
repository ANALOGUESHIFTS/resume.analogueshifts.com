"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function SkillsSection({ submit, back }) {
  const [skills, setSkills] = useState([
    { id: `skill-${crypto.randomUUID()}`, skill: "" },
  ]);

  const updateSkill = (id, newValue) => {
    setSkills((previous) =>
      previous.map((data) => {
        if (data.id !== id) {
          return data;
        } else {
          return { ...data, skill: newValue };
        }
      })
    );
  };

  useEffect(() => {
    const storedData = JSON.parse(Cookies.get("userData"));
    if (storedData && storedData.skillsData) {
      setSkills(storedData.skillsData);
    }
  }, []);

  return (
    <div className="w-full flex flex-col">
      <p className="font-extrabold text-3xl text-black/80 pb-5">Skills</p>
      <p className="text-base text-black/80 pb-6">
        You're on a roll. Let's find relevant skills for the job your applying
        for. Listing 6-10 skills is best.
      </p>

      <div className="w-full flex flex-col gap-5">
        {skills.map((data, index) => {
          return (
            <div key={data.id} className="w-full relative h-14 ">
              <input
                value={data.skill}
                onChange={(e) => updateSkill(data.id, e.target.value)}
                placeholder={`Skill #${index + 1}`}
                className="w-full rounded-2xl bg-white outline-AnalogueShiftsTextColor pr-8 pl-4 max-h-14 py-4 border text-base text-black/80"
              />
              <button
                onClick={() =>
                  setSkills((prev) =>
                    prev.filter((item) => item.id !== data.id)
                  )
                }
                className="absolute top-[30%] right-5"
              >
                <i className="fa-solid fa-trash text-black/60 text-base"></i>
              </button>
            </div>
          );
        })}
      </div>

      <button
        onClick={() =>
          setSkills((previous) => [
            ...previous,
            { id: `skill-${crypto.randomUUID()}`, certification: "" },
          ])
        }
        className="mt-8 flex items-center gap-2 text-black/80 font-semibold text-base"
      >
        <i className="fa-solid fa-plus"></i>
        <p>Add another skill</p>
      </button>

      <div className="pt-7 flex gap-5 justify-between">
        <button
          onClick={back}
          type="button"
          className="px-12 max-[613px]:px-3 border max-[613px]:w-full duration-300 hover:-translate-y-1 text-black/80 font-semibold py-3.5 rounded-xl"
        >
          Go Back
        </button>
        <button
          onClick={() => submit(skills)}
          type="button"
          className="px-12 max-[613px]:px-3 bg-black/90 max-[613px]:w-full duration-300 hover:-translate-y-1 text-white font-semibold py-3.5 rounded-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
