const numberedImages = (folder: string, prefix: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/img/${folder}/${prefix}${i + 1}.jpg`);

export const works = [
  {
    type: "illust",
    tags: ["イラスト"],
    title: "魔女のバカンス",
    thumbnail: "/img/blue2/blue21.jpg",
    images: numberedImages("blue2", "blue2", 2),
  },
  {
    type: "illust",
    tags: ["イラスト"],
    title: "PINK",
    thumbnail: "/img/pinku/illustp1.jpg",
    images: numberedImages("pinku", "illustp", 1),
  },

  {
    type: "illust",
    tags: ["イラスト"],
    title: "GREEN",
    thumbnail: "/img/midori/illustm1.jpg",
    images: numberedImages("midori", "illustm", 2),
  },
  
  /*
  {
    type: "comic",
    tags: ["漫画"],
    title: "マジシャン達の珍道中",
    thumbnail: "/img/parahote1/enter1.jpg",
    images: numberedImages("parahote1", "itiwa", 35),
  },
 */
  
  {
    type: "illust",
    tags: ["イラスト"],
    title: "WHITE",
    thumbnail: "/img/siro/illust11.jpg",
    images: numberedImages("siro", "illust1", 3),
  },
  {
    type: "illust",
    tags: ["イラスト"],
    title: "白のお姫様",
    thumbnail: "/img/illust9.jpg",
  },
  
  {
    type: "illust",
    tags: ["イラスト"],
    title: "マジシャン達",
    thumbnail: "/img/illust1.jpg",
  },
  {
    type: "illust",
    tags: ["イラスト"],
    title: "主人公案",
    thumbnail: "/img/illust5.jpg",
  },
];