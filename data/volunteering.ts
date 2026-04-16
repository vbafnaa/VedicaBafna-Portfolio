export type VolunteerExperience = {
  id: string;
  title: string;
  date: string;
  bullets: string[];
  image: string;
  imageAlt: string;
};

/** Latest first (reverse chronological). */
export const volunteerExperiences: VolunteerExperience[] = [
  {
    id: "01",
    title:
      "Leadership Team Volunteer – University of Washington (Allen School, Lavin Entrepreneurship Program, AIMS)",
    date: "University engagement",
    bullets: [
      "Organized a startup-focused career fair in collaboration with the Allen School, Lavin Entrepreneurship Program, and the Association of Information Management Students (AIMS).",
      "Coordinated logistics, partnerships, and student engagement initiatives to ensure successful event execution.",
    ],
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=900&fit=crop&q=80",
    imageAlt: "Conference and career fair venue",
  },
  {
    id: "02",
    title:
      "Sponsorship Team Volunteer – Women in Data Science Puget Sound (WiDS)",
    date: "Community programs",
    bullets: [
      "Collaborated with team members to secure sponsorships and partnerships for data science events.",
      "Assisted in outreach and relationship-building with potential sponsors.",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop&q=80",
    imageAlt: "Team discussion in a modern office",
  },
  {
    id: "03",
    title: "Volunteer – Bureau of Indian Standards (BIS)",
    date: "March 2024",
    bullets: [
      "Participated in the Youth-to-Youth Campaign, educating the public on quality standards and safe usage of household products.",
      "Engaged with diverse audiences to raise awareness about consumer rights and product reliability.",
    ],
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=900&fit=crop&q=80",
    imageAlt: "People collaborating at a community education event",
  },
  {
    id: "04",
    title: "Citizen Scientist - Spaceonova",
    date: "March 2024",
    bullets: [
      "2 preliminary asteroid detections using the Astrometrica software in the National Spaceonova Asteroid Search Campaign (NSASC) with the International Astronomical Search Collaboration (IASC) in the March 2024 campaign.",
    ],
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&h=900&fit=crop&q=80",
    imageAlt: "Night sky and stars",
  },
  {
    id: "05",
    title: "Social Media Marketing Intern (Volunteer) – Aashman Foundation",
    date: "February 2022 – May 2022",
    bullets: [
      "Supported digital campaigns to promote education initiatives for underserved children and single-income widows.",
      "Created and shared content to increase awareness, engagement, and community outreach.",
    ],
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&h=900&fit=crop&q=80",
    imageAlt: "Books and learning materials",
  },
];
