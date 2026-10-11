export interface TeamMember {
  name: string;
  role: string;
  tenure: string;
  avatarSeed: string;
  image: string;
  featured?: boolean;
}

export const team: TeamMember[] = [
  {
    name: "Abdulsalam Ibrahim",
    role: "UX RESEARCHER",
    tenure: "12 years as a Designer",
    avatarSeed: "abdulsalam-ibrahim",
    image: "/team1.png",
    featured: true,
  },
  {
    name: "Abdulhakeem Aliyu",
    role: "Product Designer",
    tenure: "25 years as a Designer",
    avatarSeed: "abdulhakeem-aliyu",
     image: "/team2.png",
  },
  {
    name: "Muhammed AbdulQudus",
    role: "Product Designer",
    tenure: "12 years as a Designer at Cypherdev",
    avatarSeed: "muhammed-abdulqudus",
     image: "/team3.png",
  },
  {
    name: "Kaothar Abdulsalam",
    role: "UI Designer",
    tenure: "12 years as a Designer at Cypherdev",
    avatarSeed: "kaothar-abdulsalam",
     image: "/team4.png",
  },
  {
    name: "Sururat Loke",
    role: "UI Designer",
    tenure: "12 years as a Designer at Cypherdev",
    avatarSeed: "sururat-loke",
     image: "/team5.png"
  },
];
