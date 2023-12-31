import CoverLetterOne from "@/public/cover-letter-one.webp";
import CoverLetterTwo from "@/public/cover-letter-two.webp";
import CoverLetterThree from "@/public/cover-letter-three.webp";
import ResumeFormat from "@/public/resume-format.webp";
import ResumeSummary from "@/public/resume-summary-hero.webp";
import CvVsResume from "@/public/resume-vs-cv.webp";
import UserOne from "@/public/corissa-peterson.jpg";
import UserTwo from "@/public/conrad-benz.jpg";

export const resumeTemplates = [
  {
    image: CoverLetterOne,
    name: "Advanced",
    description:
      "Color helps highlights your contact information and skills sections on the “Advanced” resume template.",
    path: "/cover-letter-builder/app",
  },
  {
    image: CoverLetterTwo,
    name: "Clean",
    description:
      'The "Clean" resume template features a color bar on the left that still leaves room for your experience to take center stage.',
    path: "/cover-letter-builder/app",
  },
  {
    image: CoverLetterThree,
    name: "Corporate",
    description:
      "With its simple, bold design, the “Corporate” resume template is ideal for confident business professionals.",
    path: "/cover-letter-builder/app",
  },
];

export const blogData = [
  {
    path: "/blog/resume-help/resume-format",
    image: ResumeFormat,
    title: "The Best Resume Format for 2023",
    description:
      "From the gold-standard format to variations that help you highlight your top qualifications, we’ll teach you how to format your resume like a pro.",
    userImage: UserOne,
    userName: "Corissa Peterson",
    date: "November 18 2023",
    color: "#4b94ea",
  },
  {
    path: "/blog/resume-help/resume-summary",
    image: ResumeSummary,
    title: "Professional Resume Summary Examples",
    description:
      "Your professional resume summary quickly shows employers you have the experience needed to do the job. Learn how to write one with our examples and tips.",
    userImage: UserTwo,
    userName: "Conrad Benz",
    date: "November 19 2023",
    color: "#ea723c",
  },
  {
    path: "/blog/resume-help/cv-vs-resume",
    image: CvVsResume,
    title: "CV vs Resume: What’s the Difference?",
    description:
      "The difference between a CV and a resume depends on the country and context. We explain further, and provide clear definitions of both.",
    userImage: UserTwo,
    userName: "Conrad Benz",
    date: "November 19 2023",
    color: "#2ca482",
  },
];
