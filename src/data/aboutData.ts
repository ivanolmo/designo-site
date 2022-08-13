interface Description {
  top: string;
  bottom: string;
}

interface TileImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface About {
  name: string;
  description: Description;
  tileImage: TileImage;
}

export const aboutData: About[] = [
  {
    name: 'World-class talent',
    description: {
      top: 'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
      bottom:
        'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
    },
    tileImage: {
      mobile: '/assets/mobile/about/image-world-class-talent.jpg',
      tablet: '/assets/mobile/about/image-world-class-talent.jpg',
      desktop: '/assets/mobile/about/image-world-class-talent.jpg',
    },
  },
  {
    name: 'The real deal',
    description: {
      top: 'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.',
      bottom:
        'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
    },
    tileImage: {
      mobile: '/assets/mobile/about/image-real-deal.jpg',
      tablet: '/assets/mobile/about/image-real-deal.jpg',
      desktop: '/assets/mobile/about/image-real-deal.jpg',
    },
  },
];
