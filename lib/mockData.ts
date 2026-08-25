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
    slug: 'location/ahmedabad-to-statue-of-unity',
    title: 'Ahmedabad to Statue of Unity Taxi - Book Safe & Affordable Cab Service | AAVORide',
    excerpt: "Statue of Unity is the world’s tallest statue, dedicated to the Iron Man of India - Sardar Vallabhbhai Patel. This grand statue is built on the banks of the Narmada River in Kevadia and is a must-visit on every Indian traveller’s bucket list.",
    coverImage: "https://visitsou.com/wp-content/uploads/Travel-Guide-to-the-World-Tallest-Statue-Statue-of-Unity.jpg",
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

// data/ahmedabadVadodara.js
export const tripData = [
  {
    id: 1,
    slug: "ahmedabad-to-vadodara",
    heading: "Ahmedabad to Vadodara Taxi - Book a Cab Online at Best Fare",
    description: [
      "Vadodara is also culturally vibrant and full of history. Either go and see the nearby statue of Unity or spend time with the museums, temples and the Laxmi Vilas Palace. The city caters for the tourist on all accounts with educational experiences, Royal history and exciting local life. It is also commonly referred to as Baroda and is most famous for its Royal past.",
      "Travelling by taxi from Ahmedabad to Vadodara is very easy and comfortable. Along an uncluttered highway, you will generally take approximately 2 - 2.5 hours for the approximate 110 km trip from Ahmedabad to Vadodara, which is a city that is popular for its rich cultural universities, museums and palaces and provides an ideal location for either a family outing, business trip or even a simple day return trip."
    ],
    coverImage: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/52/24/3b/lukshmi-vilas-palace.jpg?w=800&h=500&s=1",
    sections: [
      {
        subHeading: "Ahmedabad to Vadodara Cab Fare - Cultural Capital Journey Pricing",
        description: [
          "Your cab booking from Ahmedabad to Vadodara will be Inclusive of: Driver allowance, night charges, fuel cost and normal waiting on your trip.Other charges are for Ahmedabad to Vadodara Taxi price : Toll charges if toll inclusive price is not choosen, 5% GST applicable on Ahmedabad to Vadodara cab price and any extra waiting cost.",
          "To experience a comfortable Ahmedabad to Vadodara journey according to your preference and group size, select the vehicle. You can also explore outstation cabs near me, and you don't need to depend on the bus or train, and you can travel relaxed. Select the best car for the taxi service from Ahmedabad to Vadodara."
        ],
        table: [
          {
            vehicle: "Hatchback",
            model: "WagonR, Indica, or similar",
            capacity: "4 seater",
            oneWay: "-",
            roundTrip: "-",
            bestFor: "Couples and budget travelers",
          },
          {
            vehicle: "Sedan",
            model: "Dzire, Etios or Similar",
            capacity: "4 seater",
            oneWay: "-",
            roundTrip: "-",
            bestFor: "Small families seeking comfort",
          },
          {
            vehicle: "SUV",
            model: "Xylo, Ertiga or similar",
            capacity: "6 seater",
            oneWay: "-",
            roundTrip: "-",
            bestFor: "Large families or small groups",
          },
          {
            vehicle: "Assured Innova",
            model: "Innova, Innova Crysta",
            capacity: "6 seater",
            oneWay: "-",
            roundTrip: "-",
            bestFor: "Elderly passengers relaxed travel",
          },
          {
            vehicle: "Tempo Traveller",
            model: "Force Travellers similar",
            capacity: "12-17 seater",
            oneWay: "-",
            roundTrip: "-",
            bestFor: "Group pilgrimage",
          },
        ],
      },
      {
        subHeading: "Why is AAVORide Ahmedabad to Vadodara Taxi Fare lower?",
        description: [
          "So if you're wondering why we are charging only ₹1,399 for a cab from Ahmedabad to Vadodara and not ₹3,600- ₹4,500 like some others. Our model falls somewhere between price and services offered.We always offer clear distance-based pricing to maintain transparency and trust.",
        ],
        "what we provide": [
          "We always offer clear distance-based pricing to maintain transparency and trust.",
          "Our platform lets you book directly with drivers, helping keep fares simple along with smooth ride.",
          "You get an affordable one way cab Ahmedabad to Vadodara at genuine one way pricing.",
          "Total openness and no hidden fees in the taxi fare from Ahmedabad to Vadodara."
        ]
      },
      {
        subHeading: "Ahmedabad to Vadodara Car Rental - Travel Packages",
        description:
          "Hiring our car rental from Ahmedabad to Vadodara will give you personalized and tailored trip experience. Whether you're travelling for adventure or a leisurely vacation, our service offers comfort, reliability, and competitive pricing.",
        "Ahmedabad to Vadodara Direct Transfer": [
          "Simple highway travel for business and pleasure",
          "Drop off in any Vadodara location, including residences, workplaces, hotels and colleges.",
          "Quick 2-2.5 hour journey on an expressway",
          "Ideal for: Family vacation, business meetings, college visits and shopping.",
        ],
        "Vadodara Same Day Return Ahmedabad": [
          "Experience the entire city of Vadodara in one day.",
          "Depart Ahmedabad early in the morning.",
          "Sightseeing in Vadodara: Laxmi Vilas Palace, universities, museum, and Sayaji Garden.",
          "Return to Ahmedabad in the evening.",
          "Perfect for: Day visitors and business meetings that include sightseeing.",
        ],
        "Statue of Unity Day Trip from Ahmedabad": [
          "The tallest statue excursion in the world via Vadodara.",
          "Statue of Unity, Ahmedabad (200 Km, 3.5-4 hours via Vadodara).",
          "Complete tour of Sardar Sarovar Dam, the statue, and the Valley of Flowers.",
          "Return directly to Ahmedabad or via Vadodara.",
          "Ideal for: Families, tourists, and lovers of monuments.",
        ],
        "Vadodara-Champaner-Pavagadh Circuit":
          [
            "Exploration of UNESCO World Heritage sites.",
            "Champaner-Pavagadh to Vadodara (47 miles away).",
            "UNESCO site: historic temple and mosque, including the hilltop temple of Kalika Mata.",
            "Sightseeing in Vadodara.",
            "Return to Ahmedabad.",
          ],
        "Gujarat Cultural Triangle - Ahmedabad-Vadodara-Surat":
          [
            "Three significant cities included in the extended Gujarat exploration.",
            "Multi-day business and culture cycle.",
            "Flexible scheduling based on interests.",
            "Covers business culture and Diamond City.",
            "Price varies according to days and routing.",
          ]
      },
      {
        subHeading: "Ahmedabad to Vadodara by Car - Complete Expressway Route",
        description: [
          "Journey Overview: Ahmedabad to Vadodara by Road",
          "Ahmedabad to Vadodara distance by Taxi: 110 Km via NH48 (National Highway 48, formerly NH8)",
          "Expected Trip Duration: 2 to 2.5 hours, depending on traffic and stops.",
          "Route Character: Excellent four-lane highway with constant smoothness",
          "Terrain: Easy, comfortable driving, Flat Gujarat Plains.",
          "Highway Quality: Excellent, well kept national highway",
          "Complete Highway Journey (110 Km, 2 to 2.5 hours)",
          "Your vehicle trip from Ahmedabad to Vadodara goes smoothly thanks to first rate infrastructure; moreover, searching for outstation cabs near me makes it simple to book a comfortable ride for long distance travel."
        ],
        "Routes Features": [
          "Well maintained national highway",
          "Clear signage everywhere",
          "A well-lit, secure freeway",
          "Several meal stops and gas stations"
        ],
        "jourany Highlights": [
          "Leave Ahmedabad by connecting to NH48 via the Sarkhej - Gandhinagar Highway.",
          "Views of Gujarat's rural areas and agricultural landscapes.",
          "Excellent road quality all around.",
          "Enter the smooth well-maintained NH48, a four-lane divided highway.",
          "Various entry points based on the final goal (University area, Productivity Road, Sayaji Road).",
          "Baroda can be efficiently reached by a cab from Ahmedabad to Vadodara.",
          "Enter Vadodara (110 Km) for a sense of a cultured city right away.",
          "Travel through the midway town of Nadiad, which is 60 Km from Ahmedabad.",
          "Most taxi trips from Ahmedabad to Vadodara are direct freeway runs that effectively reach the cultural centre."
        ]
      },
      {
        subHeading: "Strategic Stops During Ahmedabad to Vadodara Taxi Service",
        description: ["The distance of 110 Km from Ahmedabad to Vadodara can be covered in about 2-2.5 hours and is not far enough to not be completed in one sitting without a break. However, there are some significant cities and towns to break for some snacks and refreshments."],

        "Nadiad (60 Km from Ahmedabad) - Optional Mid-Point":
          [
            "A small town suitable for a short break.",
            "10-15 mins for tea and snacks.",
            "Area dotted with tea stalls, highway food joints, and petrol pumps."
          ],
        "Anand (45 Km from Ahmedabad) - Optional Food Stop": [
          "Centre of Amul Dairy and milk co-operative movement.",
          "Visitors can stop for 15-20 mins to buy Amul products and learn history."
        ]
      },
      {
        subHeading: "Optimal Travel Timing for Ahmedabad to Vadodara Cab Service",
        description: [
          "Vadodara is a tourist destination year-round, but afternoons in summer can be inhospitable.",
          "Morning and evening are the best times to travel.",
          "The most festive time to visit is during Navratri, when the state is decorated with Garba celebrations."
        ]
      },
      {
        subHeading: "Ahmedabad to Vadodara Cab Services - Travel Savings",
        description: ["AAVORide is one of the most favourite outstation taxi providers in the taxi services business and has the most satisfied and good reviews. We have numerous taxi services on the various routes in India. On the Ahmedabad to Vadodara routes, we have one way Ahmedabad to Vadodara, round trip Ahmedabad to Vadodara or rental car service that provides you safe and secure ride and comfort."
        ],
        "one Way": {
          description: "For your Ahmedabad to Vadodara one way taxi booking, you can look towards AAVORide as you are guaranteed to get service at the fixed rate, since other Cab providers will charge more for you. AAVORide is one of the websites that charges a fixed rate from you. This feature makes our one way service stand out in the industry.",
          comparisonTable: [
            { vehicleType: "Sedan", traditionalFare: "₹2,520", AAVORideFare: "₹1,399", youSave: "₹1,121" },
            { vehicleType: "SUV", traditionalFare: "₹3,330", AAVORideFare: "₹1,749", youSave: "₹1,581" },
            { vehicleType: "Innova", traditionalFare: "₹4,860", AAVORideFare: "₹3,239", youSave: "₹1,621" }
          ]
        },
        "round Trip": ["Our Ahmedabad to Vadodara round trip is perfect for your outstation trip to Vadodara from Ahmedabad. Every time you get sanitised vehicles, professional drivers with guaranteed cheap fares for any round trip, available even during the busiest days of travel."
        ],
        "local Cabs": ["If you are trying to hire a local cab, booking one with AAVORide is super quick and super convenient! So, you can hire a local cab in Ahmedabad, if you need one within the city, and you can count on us when it comes to your business meetings, casual get-togethers and also short plans to roam around Ahmedabad; similarly, in Vadodara."
        ],
        "value Added Services": [
          "Safe Luggage Space: Your bags and suitcases can be carried safely during the trip with our assured luggage space facility. Just avail during booking and Eejoy safe space for your luggage.",
          "Drivers speaking your language: You can also get a driver who understands and speaks a common language to make communication easier during the journey. By just choosing our preferred driver language service.",
          "Pet-friendly travel: We also offers pet friendly cab service as an additional service. With just one click, you can take your pets on the trip. Our drivers are cooperative and have experience travelling with pets.",
          "Corporate cabs: If you need a corporate cab service, just mention you need during booking. We offer reliable Ahmedabad to Vadodara cabs suitable for meetings, office trips, and professional travel."
        ]
      },
      {
        subHeading: "Vadodara Attractions After Your Journey",
        description: "Once you arrive at the cultural capital after taking a taxi from Ahmedabad to Vadodara, you may explore below.",
        "royal Heritage": [
          "Laxmi Villas Palace: Indo Saracenic architecture, four times larger than Buckingham Palace, Museum, Gaekwad royal residence.",
          "Maharaja Fateh Singh Museum: European paintings, Raja Ravi Varma works, Royal collection, and sculptures.",
          "Nazarbaug Palace: Gardens, Former Gaekward residence"
        ],
        "parks And Gardens": [
          "Sayaji Baug (Kamati Baug): Gujarat's biggest public garden, zoo, planetarium, museum, toy train.",
          "Sursagar Lake: Boating, illuminated evenings."
        ],
        "education And Culture": [
          "MS University: Prestigious campus with museums."
        ],
        "temples": [
          "Kirti Mandir: Architecture, Gaekwad royal crematorium.",
          "EME Temple: Dakshinamurthy, unique aluminium structure.",
          "Kirti Mandir Temple: Near Kirti Mandir"
        ],
        "near by Attractions": [
          "Statue of Unity (90 Km): Sardar Patel, Kevadia, World's tallest statue (182m)",
          "Champaner-Pavagadh (47 Km): UNESCO site, Hilltop Kalika Mata Temple,, ancient mosque"
        ],
        "shopping And Food": [
          "Mandvi: Jewellery, textiles, traditional market.",
          "Alkapuri: Modern shopping area.",
          "Gujarati Cuisine: Jalebi, Undhiya, thalis, fafda."
        ]
      },
      {
        subHeading: "Frequently Asked Questions - Ahmedabad to Vadodara cab",
        description: "",
        faqs: [
          {
            question: "How long is the taxi from Ahmedabad to Vadodara?",
            answer: "The journey usually takes around two to two and a half hours, depending on traffic and your pickup location. Morning travel is generally faster. If you plan extra stops on the way, your total travel time may increase slightly."
          },
          {
            question: "What is the Ahmedabad to Vadodara cab price?",
            answer: "The one-way fare starts at about ₹1399 for a sedan. SUVs and Innova cost a little more. Round trips are available at higher rates. The price usually includes fuel, driver, Ahmedabad to Vadodara car charges, and a minimum 45 minutes waiting charge. Other applicable charges are Tolls, GST, and Parking, etc."
          },
          {
            question: "Are taxis easily available from Ahmedabad to Vadodara?",
            answer: "Yes, taxis are easily available on this busy route. You can book in advance or even on the same day, depending on availability. Both one-way and round-trip options are commonly offered throughout the week."
          },
          {
            question: "Is Innova suitable for Ahmedabad to Vadodara family trip?",
            answer: "Yes, Innova is a good choice for families. It offers more seating space and extra room for luggage. The comfortable ride makes the short highway journey pleasant, especially when travelling with children or elderly family members."
          },
          {
            question: "Can I hire a cab with a driver from Ahmedabad to Vadodara?",
            answer: "Yes, our outstation taxi from Ahmedabad to Vadodara comes with a professional driver, no self-drive option. The driver manages the route, fuel, and tolls while you sit back and enjoy a relaxed journey."
          },
          {
            question: "Is the Ahmedabad airport to Vadodara cab service available?",
            answer: "Yes, airport pickup and drop off services are available. You can book a cab as per your flight arrival or departure, so our driver will arrive there on time. This option is convenient for travellers heading directly to Vadodara after landing."
          }
        ]
      }
    ],
  },
  {
    id: 2,
    slug: "ahmedabad-to-statue-of-unity",
    heading: "Ahmedabad to Statue of Unity Taxi - Book Safe & Affordable Cab Service",
    description: [
      "Statue of Unity is the world’s tallest statue, dedicated to the Iron Man of India - Sardar Vallabhbhai Patel. This grand statue is built on the banks of the Narmada River in Kevadia and is a must-visit on every Indian traveller’s bucket list. On the other hand, Ahmedabad - the vibrant city of Gujarat - is known for its rich heritage, booming business hubs, and cultural essence.",
      "If you are planning a family trip, a weekend getaway with friends, or a corporate outing, a cab ride from Ahmedabad to the Statue of Unity is absolutely the best and hassle-free option. The distance between them is only 200 km, and easily covered in 4 4-hour comfortable journey that is full of scenic views.",
      "AAVORide provide Ahmedabad to Statue of Unity taxi service that offers you clean and sanitised cabs, experienced drivers, and multiple booking options - one-way or round-trip, as suits you. It's time for stress-free travel.",
      "So what's the delay? Book your Ahmedabad to Statue of Unity cab now on AAVORide!"
    ],
    coverImage:"https://visitsou.com/wp-content/uploads/Travel-Guide-to-the-World-Tallest-Statue-Statue-of-Unity.jpg", 
    sections: [
      {
        subHeading: "Why Book an Ahmedabad to Statue of Unity Cab with AAVORide?",
        description: [
          "AAVORide is the most trusted cab service provider in India. It is well known for the best taxi service from Ahmedabad to the Statue of Unity. To keep its promise, AAVORide offers a variety of taxi services from Ahmedabad to the Statue of Unity. You can hire a one-way cab from Ahmedabad to Statue of Unity or an Ahmedabad to Statue of Unity round-trip cab with AAVORide at the best price and book an Ahmedabad to Statue of Unity taxi to make your trip remarkable. We take immense pride in ensuring an exceptional and reliable transportation experience for our valued customers. We offer Ahmedabad to Statue of Unity taxis to ensure last-mile connectivity."
        ],
        "Verified and experienced drivers": [
          "The safety and comfort of the passenger is a priority for AAVORide. To ensure we took a rigorous driver verification process before making them partners. The drivers are also very skilled and experts in local culture and hilly routes, and destinations."
        ],
        "One-way and round-trip cab options": [
          "To make the travel easy and convenient, AAVORide offers multiple cab options for one-way and round-trip journeys at the most reasonable fare with no hidden charges."
        ],
        "Clean and sanitised AC vehicles": [
          "To make every journey comfortable and hassle-free, AAVORide provides clean and well-maintained cabs or taxis to its passengers. We make sure that every taxi undergoes timely services and is in good condition."
        ],
        "Transparent pricing": [
          "AAVORide ensures complete transparency in its pricing structure, offering an all-inclusive fare. We ensure passengers have a clear understanding of their total expenses upfront without any hidden costs, providing peace of mind throughout the journey."
        ],
        "Doorstep pickup": [
          "AAVORide offers doorstep pickup from Ahmedabad hotels, stations, or the airport for the maximum convenience of passengers. Where you don't need to wait for a cab at any other stoppage. Our cab driver will pick you up on time from the doorstep."
        ],
        "24x7 customer support": [
          "For smooth service, AAVORide provides 24/7 customer support. It allows passengers to connect with executives for booking whenever they require. AAVORide has a significant presence across India and promises an easy transportation service.",
          "Book your Ahmedabad to Statue of Unity taxi with AAVORide today! For a hassle-free and comfortable trip to the Statue of Unity."
        ]
      },
      {
        subHeading: "Distance, Time & Route Details",
        description: [
          "The Statue of Unity is one of the most popular tourist attractions in Gujarat state that attracting tourists from all over the country. Also, people of Ahmedabad and tourists often plan a trip to this beautiful destination. It is one of the perfect weekend getaways and holiday locations near Ahmedabad that offers lots of fun and enjoyment. From Ahmedabad, several routes connect to the Statue of Unity. Below are given the best routes with their respective times and route information."
        ],
        "Route: ia NE1 and SH11 (Ahmedabad → Vadodara → Kevadia )": [
          "It is one of the most common routes that connects both destinations. It is the fastest and well-maintained direct route from Ahmedabad via Vadodara. That provides a very convenient and comfortable experience for the travellers. Also, your trip becomes more comfortable with AAVORide trained drivers that has great driving expertise. The Ahmedabad to Statue of Unity distance from this route is approximately 200km and takes nearly 4 hours of continuous driving to reach there. You can also take short breaks at Vadodara, Dabhoi, Rajpipla and Kevadia for snacks and sightseeing."
        ],
        "Best Travel Time": [
          "Statue of Unity is one of the all-time perfect destinations from Ahmedabad. Not only do the people of the city travel to this, but tourists also plan the Ahmedabad to Statue of Unity route trip. For travellers, the best travel time from Ahmedabad to the Statue of Unity is between October to March. As the weather in the region becomes pleasant and offers comfortable and memorable."
        ],
      },
      {
        subHeading: "Ahmedabad to Statue of Unity Taxi Fare & Car Options",
        description: [
          "AAVORide is a top-tier cab service provider in India. Promise to make your trip budget-friendly. You don’t need to pay extra charges for fuel and driver's allowance; they are included in your cab charges from Ahmedabad to the Statue of Unity. However, you have to pay a little additional charge for tolls and parking, but you have the option to choose a toll and state tax-inclusive price, too. You can pay your bill online with a card and UPI for the Ahmedabad to Statue of Unity taxi fare. AAVORide provides cheap cabs from Ahmedabad to the Statue of Unity for its passengers."
        ],
        "Ahmedabad to Statue of Unity Taxi Fare": {
          comparisonTable: [
            { vehicleType: "Hatchback (WagonR, Indica)", "Seating Capacity": 4, "One-Way Fare (₹)": "-", "Round-Trip Fare (₹)": "-" },
            { vehicleType: "Sedan (Dzire, Etios)", "Seating Capacity": 4, "One-Way Fare (₹)": "-", "Round-Trip Fare (₹)": "-" },
            { vehicleType: "SUV (Ertiga, Marazzo)", "Seating Capacity": 6, "One-Way Fare (₹)": "-", "Round-Trip Fare (₹)": "-" },
            { vehicleType: "Assured Innova", "Seating Capacity": 6, "One-Way Fare (₹)": "-", "Round-Trip Fare (₹)": "-" },
            { vehicleType: "Tempo Traveller", "Seating Capacity": 12, "One-Way Fare (₹)": "-", "Round-Trip Fare (₹)": "-" }
          ]
        },
        "Additional costs :": [
          "Parking charges are extra.",
          "Toll and state tax are included in the One-way fare. For round trip, it is extra, but you have the option to choose a toll and state tax inclusive price too.",
          "5% GST extra"
        ]

      },
      // {
      //   subHeading: "Car Rental Service for Ahmedabad to Statue of Unity",
      //   description: [
      //     "AAVORide is one of India's splendid car rental service providers. We aim to make cab booking easy and comfortable for travellers. For that, AAVORide offers its Ahmedabad to Statue of Unity car rental service. For flexible pickups from Ahmedabad railway station, airport, or hotel, hire a taxi from Ahmedabad to the Statue of Unity with AAVORide. Travellers will get complete flexibility in their trip planning, and perfect for Char Dham Yatra pilgrims, group travel, or elderly passengers. Whether you need a one-way cab or a round-trip, AAVORide ensures affordable, clean, and safe cabs with experienced hill drivers for the Statue of Unity cab service for its passengers."
      //   ],
      //   "Ahmedabad to Statue of Unity Car Rental Prices": {
      //     comparisonTable: [
      //       { "car Type": "Hatchback (WagonR, Indica)", "Seating Capacity": 4, "One-Way Fare (₹)": "-" },
      //       { "car Type": "Sedan (Dzire, Etios)", "Seating Capacity": 4, "One-Way Fare (₹)": "-" },
      //       { "car Type": "SUV (Ertiga, Marazzo)", "Seating Capacity": 6, "One-Way Fare (₹)": "-" },
      //       { "car Type": "Assured Innova", "Seating Capacity": 6, "One-Way Fare (₹)": "-" }
      //     ]
      //   },
      //   "Key advantage of AAVORide’s Ahmedabad to Statue of Unity car rental service:": [
      //     "Perfect for sightseeing trips, school tours, or corporate visits.",
      //     "Clean and comfortable vehicles with on-time pickup and professional drivers.",
      //     "Flexible plans for same-day return or overnight stays"
      //   ]

      // },
      {
        subHeading: "How to Book an Ahmedabad to Statue of Unity Taxi Online?",
        description: [
          "AAVORide is a premium cab service provider in India, renowned for exceptional cab services with a focus on comfort and safety. There are multiple cab booking options on AAVORide for online cabs from Ahmedabad to the Statue of Unity. To book a cab from Ahmedabad to the Statue of Unity, AAVORide offers multiple platforms, such as our website and mobile application. Further, you can also directly contact our customer service executive for any process issues regarding taxi booking from Ahmedabad to the Statue of Unity.",
          "Through the Website: AAVORide has a user-friendly website, https://aavoride.in, where travellers can easily book their cab service from Ahmedabad to the Statue of Unity. Here, you get a form where you fill in your pickup and destination addresses. Then on the next page, you get the car option; choose wisely according to your needs.",
          "Mobile Application: You can also book a cab with the AAVORide mobile app. It is easy to download the AAVORide mobile application on your phone from the Play Store and Apple Store. Here you can easily book your cab from Ahmedabad to the Statue of Unity.",
          "Customer care: You can also contact AAVORide customer executives to get direct human assistance. We provide 24/7 active customer support to our passengers for timely issue resolution."
        ],
        "Step-by-step process for how to book a cab service from Ahmedabad to Statue of Unity with a driver at AAVORide.": [
          "Visit the AAVORide website or mobile app.",
          "Enter your pickup location and destination.",
          "Choose your preferred car type.",
          "Select your trip type (one-way or round-trip).",
          "Confirm the booking and make a payment online.",
          "Receive booking confirmation & driver details."
        ]

      },
      {
        subHeading: "Places to Visit En Route",
        description: [
          "Ahmedabad to Statue of Unity road trip has ample sightseeing and tourist attractions. You can enjoy all these beautiful sights by just adding them to your itinerary. AAVORide offers a comfortable ride and reliable service, ensuring you enjoy your trip thoroughly. For more convenience, we handpick some of the most visited places between Ahmedabad and Statue of Unity",
          "Vadodara: Vadodara is one such city which is known for its royal history and greenery. The Laxmi Vilas Palace here is very famous, which is known for its beautiful architecture, large lawns and for being the historical residence of the Gaekwad royal family. This palace gives a very royal feel, where there is a glimpse of heritage in every corner. On the other hand, Sayaji Baug, i.e. Kamati Baug, is a big garden and zoo where everyone from children to adults gets something or the other to see and enjoy.",
          "Zarwani Waterfall: Zarwani Waterfall is a calm and beautiful nature spot near Kevadia that is visited for trekking and picnic spots amidst its falling waters, lush green jungle and Shoolpaneshwar Wildlife Sanctuary. This place is perfect for those who wish to spend some time close to nature, away from the hustle and bustle of the city. The peaceful atmosphere and natural beauty of this place touch the heart, seeing which the mind of every traveller stops there.",
          "Sardar Sarovar Dam: The Sardar Sarovar Dam is a popular spot where people enjoy amazing scenic views and photo clicks, especially inside the Statue of Unity complex. From the viewing gallery and selfie points here, you get a panoramic view of the Narmada River, the grand structure of the dam, and the beautiful landscape around. This place is perfect for those who want to see the blend of modern engineering with nature and want to capture unforgettable moments in their camera."
        ],
      },
      {
        subHeading: "Frequently Asked Questions - Ahmedabad to Vadodara cab",
        description: "",
        faqs: [
          {
            question: "What is the distance from Ahmedabad to Statue Of Unity by car?",
            answer: "The distance from Ahmedabad to Statue Of Unity by car is 200 km."
          },
          {
            question: "How long does it take from Ahmedabad to Statue Of Unity by road?",
            answer: "It takes approx. 3.5 to 4.5 hours depending on traffic."
          },
          {
            question: "How much is Ahmedabad to Statue Of Unity taxi fare?",
            answer: "Ahmedabad to Statue Of Unity taxi fare is approx. ₹2300 for a good sedan car like Etios, Dzire and is approx. ₹2800 for SUV car.For best price on your travel date for various car rental options, please enter trip details and check."
          },
          {
            question: "How much is Ahmedabad to Statue Of Unity Innova fare?",
            answer: "Ahmedabad to Statue Of Unity Innova fare is approx. ₹3800. For best price on your travel date for various car rental options, please enter trip details and check."
          },
          {
            question: "Does price includes Driver charges and Night charges?",
            answer: "Yes, Ahmedabad to Statue Of Unity cab price includes Driver charges and Night charges."
          },
          {
            question: "Do I need to make payment in advance to book Ahmedabad to Statue Of Unity cab?",
            answer: "You will need to pay just 10-20% amount in advance for booking Ahmedabad to Statue Of Unity cab."
          },

          {
            "question": "Is local sightseeing included in Ahmedabad to Statue Of Unity outstation trip?",
            "answer": "For round trip and one way multi-stop cab bookings, all local sightseeing in Ahmedabad, Statue Of Unity, and other destination cities in the itinerary is included. For one way cab with only Ahmedabad and Statue Of Unity in the itinerary, sightseeing is not included."
          },
          {
            "question": "How much in advance do I need to book the cab from Ahmedabad to Statue Of Unity?",
            "answer": "You can book up to 1 hour prior to departure, but it is recommended to book at least 1 day in advance to avoid last minute rush."
          },
          {
            "question": "Can I book cab for Ahmedabad to Statue Of Unity by calling customer support?",
            "answer": "Customer support can provide clarifications, but cab booking must be done through the website or the AAVORide mobile app (Android/iOS)."
          },
          {
            "question": "Can we pickup additional passengers on the way in Ahmedabad to Statue Of Unity one way taxi?",
            "answer": "For one way multi-stop cab, you can add additional stops in the itinerary. For one way cab with only Ahmedabad and Statue Of Unity, additional pickup or drop will incur extra charges."
          },
          {
            "question": "Do I need to pay both side Toll tax for Ahmedabad to Statue Of Unity one way cab?",
            "answer": "No, for one way cab you only need to pay one side Toll tax."
          },
          {
            "question": "When will I get car and driver details after booking Ahmedabad to Statue Of Unity cab?",
            "answer": "Car and driver details are usually shared within minutes after booking, but in rare cases may take up to two hours before departure."
          },
          {
            "question": "Can I travel with pets?",
            "answer": "Yes, pets are allowed with an additional charge. Please select the 'Pet Allowed' add-on while booking."
          }



        ]
      }
    ],
  },
];
