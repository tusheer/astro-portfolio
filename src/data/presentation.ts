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
    "Tusher, i'm a *Bangladeshi frontend developer* with over *4 years* of web experience. I am currently working with *NextJS and Typescript*. Outside of work I play football and learning *Threejs*.",
  socials: [
    {
      label: "Twiiter",
      link: "https://twitter.com/tusheeer",
    },
        {
      label: "Github",
      link: "https://github.com/tusheer",
    },
    {
      label : 'Facebook',
      link : 'https://www.facebook.com/tusheer.me'
    }
  ],
};

export default presentation;
