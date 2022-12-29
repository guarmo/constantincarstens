const data = {
  bio: {
    description: `
    Constantin	Carstens	is	a	Berlin	based	Sound	Designer	and	-Engineer.	At	the	age	of	22 he	finished	with	a	distinction	in	“Advanced	Diploma	in	Music	Production	and	Sound Engineering”	at	the	renowned	Abbey	Road	Institute.	Right	after	school,	Constantin	took on	various	internships	and	worked	as	recording	&	mixing	engineer	in	different	Studios (Bewake	Berlin,	Paraverse	Studio). \n\n Constantin	combines	his	knowledge	with	his	curiosity	and	sense	for	experimentation in	audio	to	achieve	something	unique	and	suitable	for	every	project.	Through	his fascination	for	audio	and	music,	he	has	developed	a	wide	range	of	advanced	skills,	from recording	and	mixing	to	spatialization,	sound	design	and	music	production.`,
  },
  contacts: [
    { src: "https://www.instagram.com/heduda_flinkeswiesel", icon: "insta" },
    { src: "mailto:constantincarstens@gmail.com ", icon: "email" },
    { src: "tel:+4915781921071 ", icon: "phone" },
  ],
  work: [
    {
      id: "FlorianPaul",
      text: `Florian Paul und die Kapelle der letzten Hoffnung - Tipi Am Kanzleramt`,
      category: `live sound`,
    },
    {
      id: "FlorianPaul",
      href: `https://www.serralves.pt/en/atividades-serralves/diana-deutsch-phantom-words-spatial-in-collaboration-with-jan-st-werner/`,
      text: `Diana Deutsch & Jan St. Werner - Spatial Phantom Words (Serralves, Porto)`,
      category: "setup installation",
    },
    {
      id: "RosaBarba",
      text: `Rosa Barba - In a Perpetual Now`,
      category: "recording, edit & mix",
    },
    {
      id: "MouseOnMarsAai",
      text: `Mouse on Mars AAI - Cologne`,
      category: "live sound",
    },
    {
      id: "MouseOnMarsSpatial",
      text: `Mouse on Mars - Spatial Jitter`,
      category: "setup installation",
    },
    {
      id: "SvenRatzke",
      text: `Sven Ratzke We Are We Now - BAR JEDER VERNUNFT`,
      category: "live sound",
    },
    {
      id: "SvenRatzke",
      text: `Hjîrok (Andi Toma & Hani Mojtahedy (unreleased))`,
      category: "production assistance & sound design",
    },
    {
      id: "Reema",
      href: "https://www.instagram.com/p/CbKhaZWN1oP/",
      text: `Reema - Riversides & Rooftops - Acoustic Session`,
      category: "production assistance & sound design",
    },
    {
      id: "Stoked",
      href: "https://www.youtube.com/watch?v=jozbu8dGYuU&t=5s",
      text: `Stoked Documentary - Jamal Jamule`,
      category: "restauration & Mix",
    },
    {
      id: "Hani",
      href: "https://www.youtube.com/watch?v=CSHU0DKCynA&t=320s",
      text: `Hani Mojtahedy - Mang Project`,
      category: "recording",
    },
    {
      id: "JunkECat",
      href: "https://www.instagram.com/junk_e_cat/",
      text: `Junk-E-cat (2020-2022)`,
      subCategory: "production, sound design, mix & live sound",
    },
    {
      id: "MouseOnMarsLublin",
      text: `Mouse on Mars AAI - Lublin`,
      subCategory: "live sound",
    },
    {
      id: "ReemaRiversides",
      href: "https://www.youtube.com/watch?v=1HD1P6ZYZtw&list=OLAK5uy_l_NzQuKuKf38RIN8kNwiyd8B0fPJoyjj0",
      text: `Reema Riversides & Rooftops EP`,
      category: "production & mix",
    },
    {
      id: "ForbiddenEchoes",
      href: "https://www.instagram.com/p/CVN705foi_6/",
      text: `Hani Mojtahedy & Andi Toma - Forbidden Echoes`,
      category: "sound design, production & setup installation",
    },
    {
      id: "Teniyayi",
      href: "https://www.instagram.com/p/CNfjn0RH-Ef/",
      text: `Hani Mojtahedy - Teniyayi`,
      category: "recording, mix & master",
    },
    {
      id: "Fluid",
      text: `Marlon Nicolaisen - Fluid Festival`,
      category: "sound design for installation",
    },
    {
      id: "TLGG",
      href: "https://www.instagram.com/p/CUKvlGsq0Bo/",
      text: `TLGG - Mont Blanc x Basil Alhadi`,
      category: "VO recording",
    },
    {
      id: "Lele",
      href: "https://www.instagram.com/p/CUIajijKnmy/",
      text: `TLGG - Mont Blanc x Lele`,
      category: "VO recording",
    },
    {
      id: "IsaacHernandez",
      href: "https://www.instagram.com/p/CUDALGIqk8Q/",
      text: `TLGG - Mont Blanc x Isaac Hernandez`,
      category: "VO recording",
    },
    {
      id: "TomFelton",
      href: "https://www.instagram.com/p/CUFlpZEKvkd/",
      text: `TLGG - Mont Blanc x Tom Felton`,
      category: "VO recording",
    },
    {
      id: "TomFelton",
      href: "https://www.instagram.com/p/CUFlpZEKvkd/",
      text: `TLGG - Mont Blanc x Tom Felton`,
      category: "VO recording",
    },
    {
      id: "CTM",
      text: `preparation week of CTM Festival`,
      category:
        "sound engineer for spatialization software (Space Map Go) of Meyer Sound",
    },
    {
      id: "Meyer",
      href: "https://meyersound.com/news/mouse-on-mars-bewake/",
      text: `multichannel monitoring System of Meyer Sound (Bewake Studios)`,
      category: "assistance for installing",
    },
    {
      id: "Perpetual",
      href: "https://www.instagram.com/p/CNZ6A_AJYbj/",
      text: `Marlon Nicolaisen - Perpetual`,
      category: "sound design for installation",
    },
    {
      id: "TomasSaraceno",
      href: "https://arachnophilia.net/romeconcert2020-3/ ",
      text: `Tomas Saraceno - Spider Universe Performance Rom`,
      category: "sound design, arrangement & binaural mix",
    },
    {
      id: "Wort",
      text: `Studio Wort (Berlin) - variety of projects`,
      category: "audio editing & restauration",
    },
    {
      id: "LeeScratch",
      href: "https://www.instagram.com/p/CbSIXz6sxdl/",
      text: `Lee Scratch Perry & Mouse On Mars (unreleased)`,
      category: "production & recording assistance",
    },
    {
      id: "Rehberg",
      text: `Peter Rehberg & Oren Ambarchi`,
      category: "overdub recording",
    },
    {
      id: "KLT",
      href: "https://www.discogs.com/master/1787272-KTL-VII",
      text: `KLT (Peter Rehberg & Stephen O’Malley) - VII`,
      category: "recording",
    },
    {
      id: "Malone",
      text: `Stephen O’Malley & Kali Malone (unreleased)`,
      category: "recording",
    },
    {
      id: "DimensionalPeople",
      text: `Mouse On Mars - Dimensional People - Leipzig`,
      category: "live sound assistance",
    },
    {
      id: "SavingSerafino",
      href: "https://www.youtube.com/watch?v=SIy2SaTYx3Q",
      text: "Saving Serafino - Gin Tonic",
      category: "Recording",
      imgSrc:
        "https://res.cloudinary.com/dqqhf85vd/image/upload/v1669562597/contantin_carstens/SavingSerafino_zab2sh.png",
      imgAlt: "Saving serafino",
    },
    {
      id: "Leer",
      href: "https://www.youtube.com/watch?v=3i-NmcDiNBI",
      text: "Churn Out Clique - Leer",
      category: "Recording",
      imgSrc:
        "https://res.cloudinary.com/dqqhf85vd/image/upload/v1669562597/contantin_carstens/Leer_mtw19t.png",
      imgAlt: "Leer",
    },
    {
      id: "Floatin",
      href: "https://www.youtube.com/watch?v=I2zj129qJrM",
      text: "Churn Out Clique - Floatin'",
      category: "Recording",
      imgSrc:
        "https://res.cloudinary.com/dqqhf85vd/image/upload/v1669562596/contantin_carstens/Floatin_hki736.png",
      imgAlt: "Floatin",
    },
    {
      id: "Churn Out Clique - Blubberblasen",
      href: "https://www.youtube.com/watch?v=yFNQMrqlw0o",
      text: "Churn Out Clique - Blubberblasen",
      category: "Recording",
      imgSrc:
        "https://res.cloudinary.com/dqqhf85vd/image/upload/v1669562490/contantin_carstens/Blubberblasen_jgumgi.png",
      imgAlt: "Blubberblasen",
    },
    {
      id: "HeDuDa",
      href: "/heduda",
      text: "HeDuDa",
      imgSrc:
        "https://res.cloudinary.com/dqqhf85vd/image/upload/v1669562600/contantin_carstens/Heduda_irhew9.png",
      imgAlt: "Heduda",
    },
  ],
  heduda: {
    description:
      "The project HeDuDa was founded in 2019 by Constantin Carstens. The idea originating from his fascination with the way we perceive our daily surroundings. All the small stories and narratives we can find in everyday life, the experiences we collect and all the conditions we are surrounded by. This creates a vibrant and dynamic world of impressions and forms the basic foundation of his work. He invites us on a journey to explore this world together, not focusing on his own perception, more as an invitation for the perceiver's own engagement. His approach of exploring is often intuitive and musically or sonically influenced. HeDuDa's work focuses on music of any genre ,sound and video works as well as installations and live acts (DJ/Liveset).",
    links: [
      {
        href: "https://linktr.ee/heduda",
        imgSrc: "https://res.cloudinary.com/dqqhf85vd/image/upload/v1672328914/contantin_carstens/mania_oyr16n.png",
        imgAlt: "HeDuDa - Mania EP",
        text: "HeDuDa - Mania EP",
      },
      {
        href: "https://www.instagram.com/p/CdLt8zEIrj0",
        imgSrc: "https://res.cloudinary.com/dqqhf85vd/image/upload/v1672329234/contantin_carstens/ausstellung_oqouja.png",
        imgAlt: "",
        text: "Installation - Perspektiven - Interims Gallery (Berlin)",
      },
      {
        href: "https://www.instagram.com/p/CiQSXvvjbAM/",
        imgSrc: "https://res.cloudinary.com/dqqhf85vd/image/upload/v1672328645/Blurr_Frappant_ydbypi.png",
        imgAlt: "",
        text: "Installation - Blurr - Frappant (Hamburg)",
      },
      {
        href: "https://cashmereradio.com/episode/cashmere-guest-mixes-heduda-live-from-cashmere-hq/",
        imgSrc: "https://res.cloudinary.com/dqqhf85vd/image/upload/v1672328880/contantin_carstens/Cashmere_Radio_iwm3b0.png",
        imgAlt: "",
        text: "Live at Cashmere Radio (Berlin)",
      },
      {
        href: "https://soundcloud.com/denied-area/subliminal",
        imgSrc:
          "https://res.cloudinary.com/dqqhf85vd/image/upload/v1669562597/contantin_carstens/Subliminal_umexpc.png",
        imgAlt: "Subliminal",
        text: "Subliminal",
      },
      {
        href: "https://vimeo.com/535892840",
        imgSrc:
          "https://res.cloudinary.com/dqqhf85vd/image/upload/v1669562598/contantin_carstens/Perzeption_w2k5ua.png",
        imgAlt: "Perzeption (Installationsaufbau) - Marlon Nicolaisen",
        text: "Perzeption (Installationsaufbau) - Marlon Nicolaisen",
      },
      {
        href: "https://vimeo.com/536014499",
        imgSrc:
          "https://res.cloudinary.com/dqqhf85vd/image/upload/v1669562597/contantin_carstens/Installation2_elpyfb.png",
        imgAlt: "Sound Installation Janis Binder und Constantin Carstens",
        text: "Sound Installation Janis Binder und Constantin Carstens",
      },
      {
        href: "https://vimeo.com/536008116",
        imgSrc:
          "https://res.cloudinary.com/dqqhf85vd/image/upload/v1669562598/contantin_carstens/Installation_dn2mqt.png",
        imgAlt:
          "Sound Installation Janis Binder und Constantin Carstens (Documentation)",
        text: "Sound Installation Janis Binder und Constantin Carstens (Documentation)",
      },
      {
        href: "https://soundcloud.com/quotationmarks/lyte-confinement-radio-session-9-heduda",
        imgSrc:
          "https://res.cloudinary.com/dqqhf85vd/image/upload/v1669562600/contantin_carstens/LyteConfinement9_sbvdby.png",
        imgAlt: "The lyte confinement radio - session 9 - Heduda",
        text: "The lyte confinement radio - session 9 - Heduda",
      },
      {
        href: "https://soundcloud.com/quotationmarks/the-lyte-confinement-radio-session-7",
        imgSrc:
          "https://res.cloudinary.com/dqqhf85vd/image/upload/v1669562598/contantin_carstens/LyteConfinement7_mp8dng.png",
        imgAlt: "The lyte confinement radio - session 7 - Heduda",
        text: "The lyte confinement radio - session 7 - Heduda",
      },
      {
        href: "https://soundcloud.com/quotationmarks/the-lyte-confinement-radio-session-2-heduda",
        imgSrc:
          "https://res.cloudinary.com/dqqhf85vd/image/upload/v1669562597/contantin_carstens/Session_fub5ey.png",
        imgAlt: "the lyte confinement radio - session 2",
        text: "the lyte confinement radio - session 2",
      },
      {
        href: "https://soundcloud.com/microbrew/heduda-guddi",
        imgSrc:
          "https://res.cloudinary.com/dqqhf85vd/image/upload/v1669562598/contantin_carstens/Guddi_i28jqi.png",
        imgAlt: "GUDDI",
        text: "GUDDI",
      },
      {
        href: "https://soundcloud.com/hedudaflinkeswiesel/sets/frohnatur",
        imgSrc:
          "https://res.cloudinary.com/dqqhf85vd/image/upload/v1669562597/contantin_carstens/Frohnatur_hdodk7.png",
        imgAlt: "Frohnatur",
        text: "Frohnatur",
      },
    ],
  },
};

export default data;
