type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "jaanealamtusher@gmail.com",
  title: "Hi, I’m Jane Alam 👋",
  description:
    "Tusher, i'm a *bangladeshi frontend developer* with over *4 years* of web experience. I am currently working with *NextJS and Typescript*. Outside of work I play football and learning Threejs*.",
  socials: [
    {
      label: "Twiiter",
      link: "https://twitter.com/itsstormzz_",
    },
    {
      label: "Bento",
      link: "https://bento.me/m-wolff",
    },
    {
      label: "Github",
      link: "https://github.com/MaeWolff",
    },
  ],
};

export default presentation;
