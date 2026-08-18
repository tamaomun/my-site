const numberedImages = (folder: string, prefix: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/img/${folder}/${prefix}${i + 1}.jpg`);

export const works = [
  {
    type: "illust",
    tags: ["イラスト"],
    title: "BLUE",
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
    type: "comic",
    tags: ["舞台裏"],
    title: "無配＃6",
    thumbnail: "/img/muhai6/muhai6_1.jpg",
    images: numberedImages("muhai6", "muhai6_", 2),
    showInAll: false,
  },
  {
    type: "illust",
    tags: ["イラスト"],
    title: "GREEN",
    thumbnail: "/img/midori/illustm1.jpg",
    images: numberedImages("midori", "illustm", 2),
  },
  {
    type: "comic",
    tags: ["舞台裏"],
    title: "無配＃5",
    thumbnail: "/img/muhai5/muhai.jpg",
    images: numberedImages("muhai5", "muhai5_", 3),
    showInAll: false,
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
    type: "comic",
    tags: ["舞台裏"],
    title: "無配＃4",
    thumbnail: "/img/muhai4/illust10.jpg",
    images: numberedImages("muhai4", "muhai4_", 3),
    showInAll: false,
  },

  {
    type: "comic",
    tags: ["舞台裏"],
    title: "無配＃3",
    thumbnail: "/img/muhai3/muhai3_1.jpg",
    images: numberedImages("muhai3", "muhai3_", 2),
    showInAll: false,
  },
  {
    type: "comic",
    tags: ["舞台裏"],
    title: "無配＃2",
    thumbnail: "/img/muhai2/muhai2_1.jpg",
    images: numberedImages("muhai2", "muhai2_", 2),
    showInAll: false,
  },
  {
    type: "comic",
    tags: ["舞台裏"],
    title: "無配＃1",
    thumbnail: "/img/muhai1/muhai1_1.jpg",
    images: numberedImages("muhai1", "muhai1_", 2),
    showInAll: false,
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