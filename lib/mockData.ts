export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category?: string
  coverImage: string;
  tag: string;
  readTime: string;
  publishDate: string;
  featured?: boolean;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  sections: Array<{
    type: 'paragraph' | 'heading' | 'quote' | 'image';
    content?: string;
    imageUrl?: string;
    caption?: string;
  }>;
  mustVisitSpots?: Array<{
    name: string;
    description: string;
  }>;
}

export interface Destination {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const CATEGORIES = [
  'All Stories',
  'Spiritual',
  'Pilgrimage',
  'Luxury',
  'Adventure',
  'Culture',
  'Road Trips',
];

// jaipur : 91.6KB
// varansi : 92.4Kb
// high-altitude : 34KB
// hampi : 89.4KB

export const MOCK_DESTINATIONS: Destination[] = [
  {
    id: '1',
    title: "Jaipur's Hidden Haveli Stays",
    category: 'Culture',
    image: '/images/jaipur.jpg',
  },
  {
    id: '2',
    title: 'Varanasi: Dawn on the Ganges',
    category: 'Spiritual',
    image: '/images/varanasi(1)(1).jpg',
  },
  {
    id: '3',
    title: 'Leh: High Altitude Comfort',
    category: 'Luxury Adventure',
    image: '/images/high-altitude.jpg',
  },
  {
    id: '4',
    title: 'Hampi: Ruins Reimagined',
    category: 'History',
    image: '/images/hampi.jpg',
  }
];

//features images
// feture1: 96KB
// feture2: <100Kb
// feture3: 95.6KB

export const MOCK_FEATURED_STORIES: Blog[] = [
  {
    id: 'featured-1',
    slug: 'ultimate-guide-char-dham-yatra',
    title: 'Char Dham Yatra Guide: Best Time to Visit | AAVORide',
    excerpt: "Plan your Char Dham Yatra to Yamunotri, Gangotri, Kedarnath & Badrinath. Get the best travel tips and timing with AAVORide's outstation cab service.",
    coverImage: '/images/featured-guide1.jpg',
    tag: 'Spiritual',
    readTime: '15 min read',
    publishDate: 'Jan 20, 2026',
    author: {
      name: 'Priya Sharma',
      role: 'Travel Writer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    },
    sections: [
      {
        type: 'paragraph',
        content: 'The Char Dham Yatra is one of the most sacred pilgrimages in Hinduism, covering four holy sites in Uttarakhand: Yamunotri, Gangotri, Kedarnath, and Badrinath.',
      },
      {
        type: 'heading',
        content: 'Best Time to Visit',
      },
      {
        type: 'paragraph',
        content: 'The pilgrimage season typically runs from May to October, with the best weather conditions in June and September. Avoid the monsoon months of July and August if possible.',
      },
    ],
    mustVisitSpots: [
      {
        name: 'Kedarnath Temple',
        description: 'One of the twelve Jyotirlingas, dedicated to Lord Shiva.',
      },
      {
        name: 'Badrinath Temple',
        description: 'Dedicated to Lord Vishnu, part of the Char Dham.',
      },
    ],
  },
  {
    id: 'featured-2',
    slug: 'luxury-heritage-hotels-rajasthan',
    title: 'Luxury Heritage Hotels in Rajasthan | Udaipur | AAVORide',
    excerpt: "Discover Rajasthan's finest luxury heritage hotels near Udaipur. Plan a scenic road trip with AAVORide — explore top stays, routes, and travel tips.",
    coverImage: '/images/featured-guide3.jpg',
    tag: 'Luxury',
    readTime: '12 min read',
    publishDate: 'Jan 18, 2026',
    author: {
      name: 'Rahul Mehta',
      role: 'Luxury Travel Expert',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=80',
    },
    sections: [
      {
        type: 'paragraph',
        content: 'Rajasthan\'s heritage hotels offer a unique opportunity to live like royalty. These properties were once the homes of maharajas and have been transformed into luxury accommodations.',
      },
      {
        type: 'heading',
        content: 'Taj Lake Palace, Udaipur',
      },
      {
        type: 'paragraph',
        content: 'Floating on Lake Pichola, this white marble palace is one of the most romantic hotels in the world. It offers stunning views and impeccable service.',
      },
    ],
    mustVisitSpots: [
      {
        name: 'Taj Lake Palace',
        description: 'A stunning white marble palace on Lake Pichola.',
      },
      {
        name: 'Rambagh Palace',
        description: 'Former residence of the Maharaja of Jaipur.',
      },
    ],
  },
  {
    id: 'featured-3',
    slug: 'hidden-gems-himalayas',
    title: 'Hidden Gems of Himalayas: Off Beaten Path | AAVORide',
    excerpt: 'Discover hidden gems in the Himalayas, from quiet valleys to scenic trails. Plan an unforgettable off-the-beaten-path journey with AAVORide.',
    coverImage: '/images/featured-guide2.jpg',
    tag: 'Adventure',
    readTime: '10 min read',
    publishDate: 'Jan 15, 2026',
    author: {
      name: 'Ankit Patel',
      role: 'Adventure Guide',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=80',
    },
    sections: [
      {
        type: 'paragraph',
        content: 'While popular destinations like Manali and Shimla attract millions of visitors, the Himalayas hide countless treasures waiting to be explored by intrepid travelers.',
      },
      {
        type: 'heading',
        content: 'Spiti Valley',
      },
      {
        type: 'paragraph',
        content: 'Often called "Little Tibet," Spiti Valley offers dramatic landscapes, ancient monasteries, and a chance to experience authentic Himalayan culture.',
      },
    ],
    mustVisitSpots: [
      {
        name: 'Key Monastery',
        description: 'The largest monastery in Spiti Valley.',
      },
      {
        name: 'Chandratal Lake',
        description: 'A stunning high-altitude lake.',
      },
    ],
  }
];


export const MOCK_BLOGS: Blog[] = [
  {
    id: '1',
    slug: 'manali-beyond-tourist-trails',
    title: 'Manali: Beyond the Tourist Trails',
    excerpt: 'Discover the hidden valleys, quaint local cafes, and snow-filled pine forests that make Manali a true adventure haven. Plan your trip with AAVORide.',
    category: 'Hill Stations Tour',
    tag: 'ADVENTURE',
    coverImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&auto=format&fit=crop&q=80',
    readTime: '10 min read',
    publishDate: 'Nov 15, 2026',
    author: {
      name: 'Amit Sen',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      role: 'Travel Explorer'
    },

    sections: [
      {
        type: 'paragraph',
        content: 'Manali, nestled in the mountains of the Indian state of Himachal Pradesh near the northern end of the Kullu Valley, is more than just a tourist destination. It\'s an emotion for the adventurous soul. As winter sets in, the valley transforms into a crystalline wonderland, offering experiences that stay with you forever.'
      },
      {
        type: 'image',
        imageUrl: 'https://images.unsplash.com/photo-1592548890095-cd2a7aeca5ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Misty winter mornings along the pine-lined ridges of Manali.'
      },
      {
        type: 'heading',
        content: 'The Best Time to Visit'
      },
      {
        type: 'paragraph',
        content: 'While Manali is a year-round destination, the months of December to February are truly magical. This is when the snowfall is frequent, and the entire landscape turns into a playground for winter sports. Whether you\'re into skiing in Solang Valley or simply enjoying a hot cup of tea by the Beas River, winter in Manali is unparalleled.'
      },
      // {
      //   type: 'quote',
      //   content: 'To travel is to discover that everyone is wrong about other countries. In Manali, you discover that nature has its own way of redefining luxury.'
      // }
    ],
    mustVisitSpots: [
      {
        name: 'Rohtang Pass',
        description: 'A high mountain pass providing connection between the Kullu Valley and Lahaul and Spiti Valleys, known for breathtaking panoramic snow views.'
      },
      {
        name: 'Hadimba Devi Temple',
        description: 'An ancient wooden temple located in the middle of a dense cedar forest (Dhungri Van Vihar), showcasing unique architectural style.'
      },
      {
        name: 'Old Manali',
        description: 'Famous for its quaint stone cafes, slow-paced lifestyle, apple orchards, and vibrant local handicraft shopping streets.'
      }
    ]
  },
  {
    id: '2',
    slug: 'sacred-path-guide-to-amritsar',
    title: 'The Sacred Path: A Soulful Guide to Amritsar',
    excerpt: "Embark on a spiritual journey to the golden city, exploring the Golden Temple and savoring Punjab's rich culture. Plan your trip with AAVORide.",
    category: 'Pilgrimage Tour',
    tag: 'SPIRITUAL',
    coverImage: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=1200&auto=format&fit=crop&q=80',
    readTime: '12 min read',
    publishDate: 'Oct 10, 2026',
    author: {
      name: 'Rahul Sharma',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=80',
      role: 'Cultural Documentarian'
    },

    sections: [
      {
        type: 'paragraph',
        content: 'Amritsar, home to the spectacular Golden Temple, is the spiritual and cultural center of the Sikh religion. Walking through the narrow streets of the old city is like stepping back in time, where the aroma of fresh ghee and devotional hymns fill the air.'
      },
      {
        type: 'heading',
        content: 'The Divine Experience of Harmandir Sahib'
      },
      {
        type: 'paragraph',
        content: 'The Golden Temple, or Sri Harmandir Sahib, is not just a building; it is a symbol of human equality and peace. The gold-plated structure is surrounded by a massive holy pool (sarovar) where devotees take cleansing dips. At night, the reflection of the illuminated temple in the still water is a sight that heals the restless mind.'
      },
      {
        type: 'heading',
        content: 'The World\'s Largest Free Kitchen'
      },
      {
        type: 'paragraph',
        content: 'One cannot visit Amritsar without experiencing the Langar at the Golden Temple. Feeding over 100,000 people daily regardless of race, religion, or background, the kitchen is entirely run by volunteers. The discipline and devotion involved in preparing and serving these hot, simple meals will leave you deeply humbled.'
      }
    ],
    mustVisitSpots: [
      {
        name: 'The Golden Temple',
        description: 'The holiest shrine of Sikhism, reflecting elegance, spirituality, and infinite peace.'
      },
      {
        name: 'Jallianwala Bagh',
        description: 'A historic public garden housing a memorial of national importance, reminding us of India\'s struggle for freedom.'
      },
      {
        name: 'Wagah Border Ceremony',
        description: 'A daily military practice that the security forces of India and Pakistan have jointly followed since 1959.'
      }
    ]
  },
  {
    id: '3',
    slug: 'future-of-road-travel-india',
    title: 'The Future of Road Travel in India',
    excerpt: "Explore how luxury caravans, highway corridors, and app-based cab rentals are revolutionizing India's travel experience — only with AAVORide.",
    category: 'Cab Rental Tips',
    tag: 'LUXURY',
    coverImage: 'https://images.unsplash.com/photo-1513313778780-9ae4807465f0?w=1200&auto=format&fit=crop&q=80',
    readTime: '8 min read',
    publishDate: 'Nov 3, 2026',
    author: {
      name: 'Priya Verma',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      role: 'Automotive Journalist'
    },

    sections: [
      {
        type: 'paragraph',
        content: 'India\'s highway infrastructure is expanding at an unprecedented rate. With new expressways connecting major metros, long-distance road trips are no longer tedious chores but premium, scenic journeys. Modern travelers are choosing comfort and personalization over crowded flights and rigid train schedules.'
      },
      {
        type: 'heading',
        content: 'The Rise of Chauffeur-Driven Luxury'
      },
      {
        type: 'paragraph',
        content: 'Why drive when you can ride in style? Premium cab rental services like AAVORide are redefining the road trip experience by offering luxury SUVs and sedans driven by highly trained, courteous professional chauffeurs. Passengers can take video calls, read books, or sleep comfortably while cruising smoothly on high-speed express corridors.'
      },
      {
        type: 'heading',
        content: 'Smart Highways and Connected Cars'
      },
      {
        type: 'paragraph',
        content: 'From automated toll plazas to GPS-tracked connected vehicle fleets, technology has made road trips exceptionally safe. Real-time updates on weather, road conditions, and dining stops mean you can customize your itinerary on the fly, creating a truly bespoke travel experience.'
      }
    ],
    mustVisitSpots: [
      {
        name: 'Delhi-Mumbai Expressway',
        description: 'India\'s longest greenfield expressway reducing travel time between the capital and financial hub to just 12 hours.'
      },
      {
        name: 'Mumbai-Pune Expressway',
        description: 'A scenic 6-lane concrete highway cutting through the beautiful Western Ghats.'
      }
    ]
  },
  {
    id: '4',
    slug: 'golden-triangle-redefining-classic-circuit',
    title: 'The Golden Triangle: Redefining the Classic Indian Circuit',
    excerpt: "Discover how luxury road travel is changing the way tourists experience the timeless heritage of Delhi, Agra, and Jaipur. Plan your trip with AAVORide.",
    category: 'Rajasthan Tour',
    tag: 'CULTURE',
    coverImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&auto=format&fit=crop&q=80',
    readTime: '6 min read',
    publishDate: 'Nov 24, 2026',
    author: {
      name: 'Vikas Malhotra',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      role: 'Heritage Specialist'
    },

    sections: [
      {
        type: 'paragraph',
        content: 'The Golden Triangle – comprising Delhi, Agra, and Jaipur – is India\'s most iconic tourist route. While traditionally covered by trains, smart travelers are shifting to luxury road transfers to absorb the transitioning landscapes, stop at heritage dhabas, and customize their travel pacing.'
      }
    ]
  },
  {
    id: '5',
    slug: 'planning-first-char-dham-yatra',
    title: 'Planning Your First Char Dham Yatra: A Complete Guide',
    excerpt: 'The spiritual journey of a lifetime requires meticulous planning. From routes to luxury stays, here is everything you need to know.',
    category: 'Pilgrimage Tour',
    tag: 'PILGRIMAGE',
    coverImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop&q=80',
    readTime: '15 min read',
    publishDate: 'Oct 20, 2026',
    author: {
      name: 'Sanjay Gupta',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
      role: 'Pilgrimage Coordinator'
    },

    sections: [
      {
        type: 'paragraph',
        content: 'Embarking on the Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, and Badrinath) high in the Himalayas is a deeply transformative experience. With high altitudes and challenging terrain, securing a premium cab and experienced driver is paramount to a safe, comfortable pilgrimage.'
      }
    ]
  },
  {
    id: '6',
    slug: 'rajasthan-road-trip-desert-land',
    title: 'Rajasthan Road Trip: A Week in the Desert Land',
    excerpt: 'Exploring Rajasthan by road is an experience like no other. From royal Havelis to sunset sand dunes, here is your definitive travel guide.',
    category: 'Rajasthan Tour',
    tag: 'ROAD-TRIPS',
    coverImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&auto=format&fit=crop&q=80',
    readTime: '9 min read',
    publishDate: 'Dec 5, 2026',
    author: {
      name: 'Sanjay Gupta',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
      role: 'Pilgrimage Coordinator'
    },

    sections: [
      {
        type: 'paragraph',
        content: 'From the pink facades of Jaipur to the golden sands of Jaisalmer, Rajasthan represents the pinnacle of Indian royalty and culture. Driving through the desert state exposes you to scenic fortresses rising from plains and rich traditions in small, local communities along the highway. A road trip through Rajasthan is an unforgettable journey that lets you experience the true essence of the land of kings at your own pace.'
      },
      {
        type: 'heading',
        content: 'Why Choose a Road Trip?'
      },
      {
        type: 'paragraph',
        content: 'While trains and flights connect major cities, they bypass the rustic charm of rural Rajasthan. Booking a premium outstation cab provides the flexibility to stop at lesser-known stepwells (baoris), authentic roadside dhabas serving spicy Laal Maas, and local artisan villages where you can purchase handmade textiles directly from the creators.'
      },
      {
        type: 'heading',
        content: 'The Ideal 7-Day Itinerary'
      },
      {
        type: 'paragraph',
        content: 'Start your journey in Jaipur, exploring the Amber Fort and Hawa Mahal. On day three, drive towards Jodhpur, the Blue City, to marvel at the imposing Mehrangarh Fort. Make sure to schedule a sunset visit to the Rao Jodha Desert Rock Park. Finally, head to Jaisalmer to experience a magical night camping under the stars amidst the Sam Sand Dunes.'
      },
      {
        type: 'heading',
        content: 'Essential Road Trip Tips'
      },
      {
        type: 'paragraph',
        content: '• Book in Advance: Ensure you reserve a comfortable SUV with a verified driver, especially during peak tourist season (October to March).\n• Stay Hydrated: The desert climate can be unforgiving. Always carry ample water in your vehicle.\n• Respect Local Customs: Dress modestly when visiting temples and interact respectfully with locals.'
      },
      {
        type: 'heading',
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'A Rajasthan road trip seamlessly blends adventure with luxury and history. By traveling by road, you not only connect with the majestic past but also support the local economies scattered across the vibrant desert landscape. Ready to explore? Rent a car with AAVORide today and embark on your royal expedition.'
      }
    ]
  },
  {
    id: '7',
    slug: 'budget-travel-tips-explore-india',
    title: 'Budget Travel Tips: How to Explore India Smartly',
    excerpt: 'Think you need a fortune to travel India? These smart cab-sharing, hostelling, and planning tips will help you travel more for less.',
    category: 'Budget Travel Tips',
    tag: 'BUDGET',
    coverImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80',
    readTime: '7 min read',
    publishDate: 'Dec 12, 2026',
    author: {
      name: 'Neha Patel',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
      role: 'Backpacker Advocate'
    },

    sections: [
      {
        type: 'paragraph',
        content: 'India is one of the most budget-friendly destinations globally if you know how to plan. By booking outstation cabs in advance with transparent pricing model and splitting rides, you can enjoy premium comfort without breaking the bank. Whether you are a solo backpacker or traveling with friends, exploring India smartly ensures you experience maximum culture with minimal expenditure.'
      },
      {
        type: 'heading',
        content: 'Smart Transportation Hacks'
      },
      {
        type: 'paragraph',
        content: 'Transportation can eat up a large portion of your budget. Instead of relying solely on expensive flights or unreserved train compartments, consider booking shared cabs or renting tempo travellers for group trips. Platforms like AAVORide allow you to request multiple quotes, ensuring you secure the cheapest cab fare without paying hidden commissions.'
      },
      {
        type: 'heading',
        content: 'Affordable Accommodation'
      },
      {
        type: 'paragraph',
        content: 'Skip the expensive international hotel chains and opt for authentic homestays, vibrant backpacker hostels, or budget-friendly guesthouses. Not only do these options save money, but they also offer invaluable opportunities to interact with local families and fellow travelers. Many homestays also provide delicious, home-cooked regional meals at a fraction of restaurant prices.'
      },
      {
        type: 'heading',
        content: 'Eat Like a Local'
      },
      {
        type: 'paragraph',
        content: 'Street food in India is legendary, delicious, and incredibly cheap. From spicy chaat in Delhi to buttery pav bhaji in Mumbai, eating where the locals eat is the best way to experience authentic flavors. Always look for busy stalls with high turnover to ensure the food is fresh.'
      },
      {
        type: 'heading',
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'Traveling India on a budget does not mean compromising on safety or comfort. By leveraging transparent taxi services, staying in community-focused accommodations, and embracing local culinary delights, you can create priceless memories on a shoestring budget. Start planning your affordable Indian adventure today!'
      }
    ]
  },
  {
    id: '8',
    slug: 'coorg-scotland-of-india-guide',
    title: 'Coorg: A Detailed Travel Guide to the Scotland of India',
    excerpt: 'Coorg is famous for its coffee plantations, misty hills, and lush forests. Here is how to plan your perfect weekend getaway.',
    category: 'Hill Stations Tour',
    tag: 'NATURE',
    coverImage: 'https://images.unsplash.com/photo-1661492359562-419ba0ebaece?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    readTime: '8 min read',
    publishDate: 'Dec 18, 2026',
    author: {
      name: 'Amit Sen',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      role: 'Travel Explorer'
    },

    sections: [
      {
        type: 'paragraph',
        content: 'Located in Karnataka, Coorg is a nature lover\'s paradise. Surrounded by coffee estates and misty waterfalls, it offers a peaceful respite from the urban hustle. Exploring Coorg by road is the best option to navigate the winding mountain turns at your own leisure. With its cool climate and lush greenery, it serves as the ultimate retreat for city dwellers.'
      },
      {
        type: 'heading',
        content: 'Why It Is Called the Scotland of India'
      },
      {
        type: 'paragraph',
        content: 'During the colonial era, the rolling hills, cool breezes, and lush green landscapes of Coorg reminded Scottish planters of their homeland. Today, the region retains that majestic, untouched beauty. The perpetual mist hovering over the emerald hills creates a deeply romantic and tranquil atmosphere perfect for a weekend getaway or a long relaxing vacation.'
      },
      {
        type: 'heading',
        content: 'Must-Visit Attractions'
      },
      {
        type: 'paragraph',
        content: '• Abbey Falls: A spectacular waterfall nestled between private coffee plantations and spice estates. A hanging bridge provides the perfect vantage point for photography.\n• Raja\'s Seat: A seasonal garden of flowers offering breathtaking sunset views across the valleys. This historic spot was a favorite among the kings of Kodagu.\n• Namdroling Monastery (Golden Temple): Located in nearby Bylakuppe, this beautiful Tibetan monastery is an architectural marvel offering spiritual peace and a glimpse into Tibetan culture.'
      },
      {
        type: 'heading',
        content: 'The Coffee Experience'
      },
      {
        type: 'paragraph',
        content: 'You cannot visit Coorg without diving into its rich coffee culture. Book a guided plantation tour to learn about the journey of coffee beans from harvesting to roasting. Conclude your tour with a freshly brewed cup of authentic local filter coffee, often accompanied by traditional Coorgi snacks.'
      },
      {
        type: 'heading',
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'Coorg is a magical destination that refreshes the soul with its natural beauty and cool climate. Booking a reliable outstation cab allows you to safely navigate the steep, winding ghats while enjoying the scenic views from the passenger seat. Pack your bags, book your ride, and escape to the misty hills of Karnataka today.'
      }
    ]
  }
];