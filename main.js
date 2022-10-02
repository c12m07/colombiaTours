let c = console.log;
let fragmento = document.createDocumentFragment();

let toursAmazonas = `[
  {
    "name": "Amazon Jungle Overnight at Tarapoto Lake Tour",
    "hours": "2 Days",
    "price": "277,00$",
    "description": "Explore the magic Lake Tarapoto and interact with amazing wildlife in Puerto Nariño.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2022/02/amazon-jungle-overnight-1-scaled-680x500.jpg" 
  },
  {
    "name": "Amazonas Natural and Cultural 5 Days Tour",
    "hours": "5 days",
    "price": "658,00$",
    "description": "Don’t think twice and let this journey to the magical Colombian Amazon take your breath away",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/08/amazonas-five-days-tour-1-680x500.jpg" 
  },
  {
    "name": "Amazon Three Borders – 3-Day Tour",
    "hours": "3 days",
    "price": "381,00$",
    "description": "Visit three countries in one tour. Get ready to explore the Amazon with local indigenous communities!",
    "img": "https://grancolombiatours.com/wp-content/uploads/2022/02/amazon-three-borders-tour-1-680x500.jpg" 
  },
  {
    "name": "Wild Amazon Adventure Tour – 4 Day Tour",
    "hours": "4 days",
    "price": "415,00$",
    "description": "Get ready to explore the Amazon on its wildest side. Let your adventurous dreams come to life with a local guide and local indigenous communities!",
    "img": "https://grancolombiatours.com/wp-content/uploads/2022/02/amazon-wild-exotic.tour-1-1-680x500.jpeg" 
  }
]`
let toursBarranquilla = `[
  {
    "name": "Gran Malecón + Carnaval Museum + Downtown Barranquilla City Tour 6H",
    "hours": "6 hours",
    "price": "46,00$",
    "description": "Get to know the best of Colombia’s Golden Gate: the amazing coastal city of Barranquilla",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/08/barranquilla-city-tour-1-1-680x500.jpeg" 
  },
  {
    "name": "Boat Tour on the Magdalena River",
    "hours": "4 hours",
    "price": "99,00$",
    "description": "Live the unique experience of sailing on the breathtaking Magdalena River and mesmerize with its immensity",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/08/barranquilla-boat-tour-1-680x500.jpeg" 
  },
  {
    "name": "Food Tour in Barranquilla Downtown",
    "hours": "4 hours",
    "price": "38,00$",
    "description": "How about diving into Barranquilla’s real spirit through the thing that talks best about a culture or country: its food",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/08/barranquilla-city-tour-4-680x500.jpeg" 
  },
  {
    "name": "Private Arrival or Departure Transfer: Ernesto Cortissoz Airport (One Way)",
    "hours": "1 hour",
    "price": "29,00$",
    "description": "Whether arriving or leaving, Gran Colombia Tours offers an amazing transfer service from or to your lodgings: safe and hassle-free!",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/08/Aeropuerto-Barranquilla-680x500.jpg" 
  }
]`
let toursBogota = `[
  {
    "name": "La Candelaria + Optional Monserrate + Optional Gold Museum Bogotá City Tour 5-7H",
    "hours": "5-7 hours",
    "price": "51,00$",
    "description": "Discover Colombia’s beauty through its capital with this fulfilling tour to everywhere you need to explore in La Candelaria",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/1A-680x500.jpeg" 
  },
  {
    "name": "Salt Cathedral of Zipaquira & Lake Guatavita Tour + Optional Lunch",
    "hours": "10 hours",
    "price": "100,00$",
    "description": "Live with us a thorough day trip of two of the most iconic towns near Bogotá: Guatavita and Zipaquirá.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/tour-a-zipaquira-y-guatavita-1-680x500.jpg" 
  },
  {
    "name": "Monserrate Tour Bogotá + Tickets",
    "hours": "2 hours",
    "price": "17,00$",
    "description": "Be part of a fulfilling experience in Monserrate, the most touristic place of Bogotá with its official walking tour",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/barcelona-monserrate-5-680x500.jpg" 
  },
  {
    "name": "Free Biking Tour Bogotá",
    "hours": "3.5 hours",
    "price": "0,00$",
    "description": "Go beyond Bogota’s touristic district and discover what the rest of the city has to offer in this free biking tour",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/grancolombiatours-bikingtour-1-scaled-680x500.jpg" 
  },
  {
    "name": "Free Graffiti Tour Bogotá",
    "hours": "2.5 hours",
    "price": "0,00$",
    "description": "Explore Bogotá's downtown through graffiti and witness the legacy muralism and urban art has given to La Candelaria and the city",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/graffiti-tour-bogota-031-1-scaled-680x500.jpg" 
  },
  {
    "name": "Free Monserrate Tour Bogotá",
    "hours": "2 hours",
    "price": "0,00$",
    "description": "Be part of a fulfilling experience in Monserrate, the most touristic place of Bogotá with its official walking tour",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/2-bogota-monserrate-680x500.jpg" 
  },
  {
    "name": "La Candelaria Private City Tour in Bogotá 3H",
    "hours": "3 hours",
    "price": "28,00$",
    "description": "Adventure is just around the corner in La Candelaria district in this guided tour through the city's history, art, culture, and cuisine",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/1A-680x500.jpeg" 
  },
  {
    "name": "Caño Cristales 3 Days Tour from Bogotá",
    "hours": "3 Days",
    "price": "729,00$",
    "description": "Get lost with us in Caño Cristales, the river that escaped from paradise, and discover the wonders of the Colombian east",
    "img": "https://grancolombiatours.com/wp-content/uploads/2022/01/caño-cristales-1-scaled-680x500.jpg" 
  },
  {
    "name": "Bogota Biking Tour in Downtown",
    "hours": "4 hours",
    "price": "25,00$",
    "description": "See Bogotá by bicycle! Free your adventurous spirit and join us in this tour to the less known areas of the city",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/grancolombiatours-bikingtour-1-scaled-680x500.jpg" 
  },
  {
    "name": "Graffiti Tour in La Candelaria Bogotá",
    "hours": "4 hours",
    "price": "24,00$",
    "description": "Want to learn how graffiti fits into Bogotá’s history and allure? Don’t miss this 3-hour tour with us!",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/Portada-nueva-2-680x500.jpg" 
  }
]`
let toursCali = `[
  {
    "name": "Cali City tour: Cristo Rey + Tertulia Museum + Downtown",
    "hours": "6 hours",
    "price": "44,00$",
    "description": "Get a view from high above, learn tons, and walk through the living streets of Cali on this fun city tour",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/cristo-rey-colombian-statue-e1611183418193-680x500.jpg" 
  },
  {
    "name": "Food Tour in Alameda Market",
    "hours": "3 hours",
    "price": "33,00$",
    "description": "Dive into Colombian culture and Cali’s flavors through this local experience of tasting fruits at La Alameda market.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/fruit-tour-in-alameda-market-cali-1-680x500.jpg" 
  },
  {
    "name": "Historical Walking City Tour Cali 3H",
    "hours": "3 hours",
    "price": "30,00$",
    "description": "Let this warm city conquer your heart with its music and dance on this walking tour through Cali’s main sites.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/cali-private-walking-tour-1-680x500.jpg" 
  },
  {
    "name": "Private Salsa Lesson Experience with Locals",
    "hours": "4 hours",
    "price": "35,00$",
    "description": "Challenge yourself and get to know Cali through it best cultural expression: salsa. Dance and mingle with us!",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/cali-salsa-lesson-experience-1-680x500.jpg" 
  },
  {
    "name": "San Cipriano & River Adventure Day Tour",
    "hours": "9 hours",
    "price": "79,00$",
    "description": "Venture in the mountains of Cauca Valley and be one with nature in this full day tour to San Cipriano.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/26685210_10155664632258124_6075340288466083141_o-680x500.jpg" 
  },
  {
    "name": "Sugar Cane El Paraiso Hacienda & Nature Day Tour",
    "hours": "7 hours",
    "price": "61,00$",
    "description": "Enjoy this unique tour about sugar cane, and discover why is one of the most important crops in Cali and Colombia.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/sugarcane-hacienda-el-paraiso-tour-1-680x500.jpg" 
  },
  {
    "name": "Whale Watching in the Colombian Pacific Coast (Jul 15 – Oct 15)",
    "hours": "12 hours",
    "price": "104,00$",
    "description": "Watch this stunning wildlife episode right in person, it is a seasonal event, so you might be lucky for the whale watching tour.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/whale-watching-colombian-pacific-coast-tour-1-680x500.jpg" 
  },
  {
    "name": "Private Arrival or Departure Transfer: Alfonso Bonilla Aragón Airport (One way)",
    "hours": "1-2 hours",
    "price": "32,00$",
    "description": "Whether arriving or leaving, Gran Colombia Tours offers an amazing transfer service from or to your lodgings: safe and hassle-free!",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/cali-airport-transfer-1-680x500.jpg" 
  },
  {
    "name": "Private Transfer to or from Buenaventura (One way)",
    "hours": "3 hours",
    "price": "93,00$",
    "description": "Stay comfortable before starting a new adventure in a whole different place: Let us take you across the Pacific.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/layover-bogota-8-680x500.jpg" 
  }
]`
let toursCartagena = `[
  {
    "name": "Walled City + San Felipe Castle + Optional Popa Convent Cartagena City Tour 5-7H",
    "hours": "5-7 hours",
    "price": "57,00$",
    "description": "Live the unique experience of traveling back in time to the magical Cartagena’s Walled City and San Felipe Castle",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/cartagena-walled-city-san-felipe-tour-1-680x500.jpg" 
  },
  {
    "name": "Food Tour in Cartagena Walled City",
    "hours": "4 hours",
    "price": "39,00$",
    "description": "How about diving into Cartagena’s real spirit through the thing that talks best about a culture or country: its food",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/cartagena-food-tour-1-680x500.jpg" 
  },
  {
    "name": "Graffiti Private Tour in Getsemani Cartagena",
    "hours": "2.5 hours",
    "price": "22,00$",
    "description": "Explore the most colorful side of the historical Cartagena in this graffiti tour around Getsemani neighborhood.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/cartagena-graffiti-tour-in-getsemani-neighborhood-1-680x500.jpg" 
  },
  {
    "name": "Bazurto Market + La Popa Convent Cartagena City Tour 4H",
    "hours": "4 hours",
    "price": "47,00$",
    "description": "Complete your experience in Cartagena by going to two amazing but quite different places: a fruit market and a city viewpoint.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/bazurto-market-la-popa-convent-tour-cartagena-1-680x500.jpg" 
  },
  {
    "name": "Rosario Islands Private Boat Tour",
    "hours": "8 hours",
    "price": "167,00$",
    "description": "Take your trip to the next level and have the unforgettable experience of sailing to Rosario islands.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/rosario-islands-day-trip-from-cartagena-4-680x500.jpg" 
  },
  {
    "name": "Arrival or Departure Transfer: Rafael Nuñez Airport (One way)",
    "hours": "45 minutes",
    "price": "20,00$",
    "description": "Whether arriving or leaving, Gran Colombia Tours offers an amazing transfer service from or to your lodgings: safe and hassle-free!",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/cartagena-airport-transfer-1-680x500.jpg" 
  },
  {
    "name": "Transfer to Tayrona Park, Santa Marta or Barranquilla from Cartagena",
    "hours": "2-5 hours",
    "price": "112,00$",
    "description": "Stay comfortable before starting a new adventure in a whole different place: Let us take you across the Caribbean.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/cartagena-airport-transfer-7-680x500.jpg" 
  },
  {
    "name": "Tranquila Beach and Aquarium Day Tour",
    "hours": "8 hours",
    "price": "77,00$",
    "description": "Spend a beachy relaxing day with us in Tranquila Beach and forget about your worries for a moment",
    "img": "https://grancolombiatours.com/wp-content/uploads/2022/02/tranquila-beach-and-aquarium-1-680x500.jpeg" 
  },
  {
    "name": "El Totumo and Manzanillo Private Day Tour",
    "hours": "7 hours",
    "price": "68,00$",
    "description": "Live an experience like no other: take a bath in a mud volcano and then finish your day in a paradisiac beach",
    "img": "https://grancolombiatours.com/wp-content/uploads/2022/02/volvan-totumo-tour-1-680x500.png" 
  },
  {
    "name": "San Basilio de Palenque Private Day Tour",
    "hours": "7 hours",
    "price": "72,00$",
    "description": "Come and meet the first free territory of America and discover their authentic roots and culture",
    "img": "https://grancolombiatours.com/wp-content/uploads/2022/02/san-bacilio-de-palenque-tour-1-680x500.jpg" 
  },
  {
    "name": "Free Walking Tour Cartagena Walled City and Getsemani",
    "hours": "3 hours",
    "price": "0,00$",
    "description": "Dive into Cartagena’s heart in this 3-hour free tour through the old streets of the Walled City and Getsemani and make friends along the way",
    "img": "https://grancolombiatours.com/wp-content/uploads/2022/07/free-walking-tour-cartagena-1-scaled-680x500.jpg" 
  },
  {
    "name": "Walled City and Getsemani Cartagena City Tour 4H",
    "hours": "4 hours",
    "price": "33,00$",
    "description": "Get to know all the stories, traditions, and diversity of the most touristic coastal city of Colombia.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/IMG_5804-680x500.jpg" 
  },
]`
let toursMedellin = `[
  {
    "name": "Graffiti at Comuna 13 + Downtown Medellín City Tour 6H",
    "hours": "6 hours",
    "price": "42,00$",
    "description": "See beyond the horizon by taking this informative and complete city tour to everywhere you need to explore in Medellín.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/Medellin-680x500.jpg" 
  },
  {
    "name": "Jardín Cultural Town + Coffee Farm Experiences Day Tour",
    "hours": "8 hours",
    "price": "81,00$",
    "description": "Come with us to the most beautiful town in Antioquia: Jardín, and learn about our famous Colombian coffee.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/jardin-antioquia-coffee-tour-medellin-day-trip-1-680x500.jpg" 
  },
  {
    "name": "Medellín or Guatapé Transfer: José María Córdova Airport (One way)",
    "hours": "1 hours",
    "price": "38,00$",
    "description": "Whether arriving or leaving, Gran Colombia Tours offers an amazing transfer service from or to your lodgings: safe and hassle-free!",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/medellin-airport-transfer-1-680x500.jpg" 
  },
  {
    "name": "Medellín Private Transfer to or from Guatapé (One way)",
    "hours": "2 hours",
    "price": "84,00$",
    "description": "Stay comfortable before starting a new adventure in a whole different place: Let us take you across Antioquia",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/layover-bogota-8-680x500.jpg" 
  },
  {
    "name": "Tejo & Beer Private Medellín Tour",
    "hours": "4 hours",
    "price": "42,00$",
    "description": "Get to experience the unique traditional Colombian game: tejo, and become one with culture among local beer and friends.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/tejo-tour-grancolombia-11-680x500.jpg" 
  },
  {
    "name": "Graffiti Tour in Comuna 13 Medellin",
    "hours": "4 hours",
    "price": "36,00$",
    "description": "Take this tour and discover why Comuna 13 had such an impact in the world through graffiti and tourism overcoming a long-lasting war.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/medellin-graffiti-tour-in-comuna-13-1-680x500.jpeg" 
  },
  {
    "name": "Memory House Museum + Medellín Downtown Historical Tour 4H",
    "hours": "4 hours",
    "price": "27,00$",
    "description": "If you want to learn tons of detailed history while walking around downtown Medellin this 4-hours tour is your best choice.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/16179606_1822013694682394_9087504420087893157_o-680x500.jpg" 
  },
  {
    "name": "Botanical Garden + Comuna 4 Medellín City Tour 5H",
    "hours": "5 hours",
    "price": "39,00$",
    "description": "Enjoy breathing at the Botanical Garden, one of the Medellín’s lungs and jump to Comuna 4 to learn its unbelievable transformation process.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/20191026_124755-scaled-680x500.jpg" 
  },
  {
    "name": "Arvi Park + Comuna 2 Medellin City Tour 6H",
    "hours": "6 hours",
    "price": "49,00$",
    "description": "Just a hop from busy Medellin there’s the comuna 2 and the hidden Arvi Park. Let’s explore it together!",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/arvi-park-comuna-2-tour-medellin-1-680x500.jpg" 
  },
  {
    "name": "Behind Pablo Escobar’s Steps Tour",
    "hours": "5 hours",
    "price": "36,00$",
    "description": "Get familiarized with the life and doings of the most recognized drug lord in Colombia from a neutral perspective.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/pablo-escobar-private-tour-1-680x500.jpg" 
  },
  {
    "name": "Guatapé Lake on a Boat + El Peñol Rock Hike Day Tour",
    "hours": "90,00$",
    "price": "10 hours",
    "description": "Let Guatape landscape speak by itself and get amazed by the Peñol Rock and one of the biggest Hydroelectric dams in Colombia.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/guatape-lake-on-a-boat-el-penol-rock-tour-1-1-680x500.jpg" 
  },
  {
    "name": "Flying Paragliding Over Medellin",
    "hours": "4 hours",
    "price": "87,00$",
    "description": "There are no limits when discovering Medellín’s beauty. Come and have this paragliding experience and see unforgettable landscapes.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/flying-paragliding-over-medellin-1-680x500.jpg" 
  },
  {
    "name": "Río Claro Valley Adventure Day Tour",
    "hours": "8 hours",
    "price": "107,00$",
    "description": "Leave city noise and get lost in nature with us. Live this unique experience of exploring Rio Claro Reservoir",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/rio-claro-valley-adventure-medellin-day-trip-1-680x500.jpg" 
  },
  {
    "name": "Santa Fe de Antioquia Heritage Day Tour",
    "hours": "8 hours",
    "price": "73,00$",
    "description": "Join us in this Santa Fe de Antioquia tour, an experience to fill yourself with color, history and architecture.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/santa-fe-antioquia-heritage-medellin-day-trip-3-680x500.jpeg" 
  }
]`
let toursSantamarta = `[
  {
    "name": "Tour Tayrona Park: San Juan´s Cape, Arrecifes & Crystal-Clear Beaches",
    "hours": "10 hours",
    "price": "95,00$",
    "description": "Take this trip to remember and discover Colombia’s beauty in this fulfilling tour to Tayrona National Park.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/tayrona-park-tour-2-scaled-680x500.jpg" 
  },
  {
    "name": "Santa Marta Old City, Museum, Quinta San Pedro & Taganga’s Bay Tour",
    "hours": "7 hours",
    "price": "49,00$",
    "description": "Be a witness of the contrasts between Santa Marta’s past and present in this city tour around its main spots.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/santa-marta-city-tour-1-680x500.jpg" 
  },
  {
    "name": "Food Tour in Santa Marta Old City Half-Day",
    "hours": "4 hours",
    "price": "41,00$",
    "description": "Tasting a city or country’s cuisine is knowing its true spirit. Come and discover Santa Marta’s through its food.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/santa-marta-food-tour-2-680x500.jpg" 
  },
  {
    "name": "Minca + Marinka Waterfalls + Coffee Farm La Victoria Tour 7H",
    "hours": "8 hours",
    "price": "89,00$",
    "description": "Discover why Santa Marta’s motto is “The magic of having it all” by visiting the amazing hidden Minca town.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/cascadas-marinka-2-scaled-680x500.jpg" 
  },
  {
    "name": "Lost City Trek in La Sierra Nevada Natural Park 4 Days Tour",
    "hours": "4 days",
    "price": "450,00$",
    "description": "Live the unique experience of traveling back in time in this 4-day tour to the breathtaking Lost City.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/lost-city-trek-1-scaled-680x500.jpg" 
  },
  {
    "name": "La Guajira Desert + Punta Gallinas 4 Days Tour",
    "hours": "4 days",
    "price": "346,00$",
    "description": "Keep exploring the Caribbean coast and take your trip to the next level by going to La Guajira Desert.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/la-guajira-desert-punta-gallinas-10-680x500.jpg" 
  },
  {
    "name": "Private Arrival or Departure Transfer: Simón Bolívar Airport (One way)",
    "hours": "1 hour",
    "price": "24,00$",
    "description": "Whether arriving or leaving, Gran Colombia Tours offers an amazing transfer service from or to your lodgings: safe and hassle-free!",
    "img": "https://grancolombiatours.com/wp-content/uploads/2019/05/santa-marta-airport-transfer-1-680x500.jpg" 
  },
  {
    "name": "Graffiti Tour in Santa Marta Old City",
    "hours": "3 hours",
    "price": "24,00$",
    "description": "Explore Santa Marta’s artistic streets and let its urban art and graffiti show you a different side of the city.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/santa-marta-graffiti-tour-2-680x500.jpg" 
  },
  {
    "name": "Santa Marta City Tour: Old City + Gold Museum",
    "hours": "3 hours",
    "price": "27,00$",
    "description": "Have a glimpse of everything Santa Marta offers to your enjoyment, in this 3-hour walking tour.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/santa-marta-city-tour-2-1-680x500.jpg" 
  },
  {
    "name": "Private Transfer from Santa Marta to Cartagena or Barranquilla",
    "hours": "3-4 hours",
    "price": "104,00$",
    "description": "Stay comfortable before starting a new adventure in a whole different place: Let us take you across the Caribbean.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/layover-bogota-8-680x500.jpg" 
  },
  {
    "name": "Private Transfer to or from Palomino, Tayrona Park or Minca from Santa Marta",
    "hours": "1-2 hours",
    "price": "50,00$",
    "description": "Stay comfortable before starting a new adventure in a whole different place: Let us take you across the Caribbean.",
    "img": "https://grancolombiatours.com/wp-content/uploads/2021/01/layover-bogota-8-680x500.jpg" 
  },
  {
    "name": "Santa Marta Beaches Private Boat Tour",
    "hours": "8 hours",
    "price": "179,00$",
    "description": "Make your trip unforgettable with an exclusive experience of sailing to the paradisiac beaches in Santa Marta",
    "img": "https://grancolombiatours.com/wp-content/uploads/2022/02/boat-tour-santa-marta-1-680x500.jpeg" 
  }
]`

const container = document.getElementById('tours__main__principal');

function cardsAmazonas() {
  c('funcion')
  async function printData(){
    try {
      c('data')
      const json = JSON.parse(toursAmazonas)

      json.forEach((e) => {
        c('ciclo')
        const cards = document.createElement('div');
        cards.className = 'principal__box'
        cards.innerHTML = `
          <img class="principal__box__img" src="${e.img}" alt="tourImg">
          <h3 class="principal__box__title">${e.name}</h3>
          <p class="principal__box__text">${e.description}</p>
          <p class="principal__box__text"><b>${e.hours}</b> from <b>${e.price}</b></p>
        `
        fragmento.appendChild(cards);
      });

      container.appendChild(fragmento);
    } catch (error) {
      let message = error.statusText || "Ocurrio un error"
    }
  };
  printData();
}
function cardsBarranquilla() {
  c('funcion')
  async function printData(){
    try {
      c('data')
      const json = JSON.parse(toursBarranquilla)

      json.forEach((e) => {
        c('ciclo')
        const cards = document.createElement('div');
        cards.className = 'principal__box'
        cards.innerHTML = `
          <img class="principal__box__img" src="${e.img}" alt="tourImg">
          <h3 class="principal__box__title">${e.name}</h3>
          <p class="principal__box__text">${e.description}</p>
          <p class="principal__box__text"><b>${e.hours}</b> from <b>${e.price}</b></p>
        `
        fragmento.appendChild(cards);
      });

      container.appendChild(fragmento);
    } catch (error) {
      let message = error.statusText || "Ocurrio un error"
    }
  };
  printData();
}
function cardsBogota() {
  c('funcion')
  async function printData(){
    try {
      c('data')
      const json = JSON.parse(toursBogota)

      json.forEach((e) => {
        c('ciclo')
        const cards = document.createElement('div');
        cards.className = 'principal__box'
        cards.innerHTML = `
          <img class="principal__box__img" src="${e.img}" alt="tourImg">
          <h3 class="principal__box__title">${e.name}</h3>
          <p class="principal__box__text">${e.description}</p>
          <p class="principal__box__text"><b>${e.hours}</b> from <b>${e.price}</b></p>
        `
        fragmento.appendChild(cards);
      });

      container.appendChild(fragmento);
    } catch (error) {
      let message = error.statusText || "Ocurrio un error"
    }
  };
  printData();
}
function cardsCali() {
  c('funcion')
  async function printData(){
    try {
      c('data')
      const json = JSON.parse(toursCali)

      json.forEach((e) => {
        c('ciclo')
        const cards = document.createElement('div');
        cards.className = 'principal__box'
        cards.innerHTML = `
          <img class="principal__box__img" src="${e.img}" alt="tourImg">
          <h3 class="principal__box__title">${e.name}</h3>
          <p class="principal__box__text">${e.description}</p>
          <p class="principal__box__text"><b>${e.hours}</b> from <b>${e.price}</b></p>
        `
        fragmento.appendChild(cards);
      });

      container.appendChild(fragmento);
    } catch (error) {
      let message = error.statusText || "Ocurrio un error"
    }
  };
  printData();
}
function cardsCartagena() {
  c('funcion')
  async function printData(){
    try {
      c('data')
      const json = JSON.parse(toursCartagena)

      json.forEach((e) => {
        c('ciclo')
        const cards = document.createElement('div');
        cards.className = 'principal__box'
        cards.innerHTML = `
          <img class="principal__box__img" src="${e.img}" alt="tourImg">
          <h3 class="principal__box__title">${e.name}</h3>
          <p class="principal__box__text">${e.description}</p>
          <p class="principal__box__text"><b>${e.hours}</b> from <b>${e.price}</b></p>
        `
        fragmento.appendChild(cards);
      });

      container.appendChild(fragmento);
    } catch (error) {
      let message = error.statusText || "Ocurrio un error"
    }
  };
  printData();
}

function cardsMedellin() {
  c('funcion')
  async function printData(){
    try {
      c('data')
      const json = JSON.parse(toursMedellin)
      c(json)

      json.forEach((e) => {
        c('ciclo')
        const cards = document.createElement('div');
        cards.className = 'principal__box'
        cards.innerHTML = `
          <img class="principal__box__img" src="${e.img}" alt="tourImg">
          <h3 class="principal__box__title">${e.name}</h3>
          <p class="principal__box__text">${e.description}</p>
          <p class="principal__box__text"><b>${e.hours}</b> from <b>${e.price}</b></p>
        `
        fragmento.appendChild(cards);
      });

      container.appendChild(fragmento);
    } catch (error) {
      let message = error.statusText || "Ocurrio un error"
    }
  };
  printData();
}

function cardsSanta() {
  c('funcion')
  async function printData(){
    try {
      c('data')
      const json = JSON.parse(toursSantamarta)

      json.forEach((e) => {
        c('ciclo')
        const cards = document.createElement('div');
        cards.className = 'principal__box'
        cards.innerHTML = `
          <img class="principal__box__img" src="${e.img}" alt="tourImg">
          <h3 class="principal__box__title">${e.name}</h3>
          <p class="principal__box__text">${e.description}</p>
          <p class="principal__box__text"><b>${e.hours}</b> from <b>${e.price}</b></p>
        `
        fragmento.appendChild(cards);
      });

      container.appendChild(fragmento);
    } catch (error) {
      let message = error.statusText || "Ocurrio un error"
    }
  };
  printData();
}

document.getElementById("amazonas").addEventListener("click", (e) => {
  e.preventDefault();
  c('entra')
  cardsAmazonas();
});
document.getElementById("barranquilla").addEventListener("click", (e) => {
  e.preventDefault();
  c('entra')
  cardsBarranquilla();
});
document.getElementById("bogota").addEventListener("click", (e) => {
  e.preventDefault();
  c('entra')
  cardsBogota();
});
document.getElementById("cali").addEventListener("click", (e) => {
  e.preventDefault();
  c('entra')
  cardsCali();
});
document.getElementById("cartagena").addEventListener("click", (e) => {
  e.preventDefault();
  c('entra')
  cardsCartagena();
});
document.getElementById("medellin").addEventListener("click", (e) => {
  e.preventDefault();
  c('entra')
  cardsMedellin();
});
document.getElementById("santaMarta").addEventListener("click", (e) => {
  e.preventDefault();
  c('entra')
  cardsSanta();
});
