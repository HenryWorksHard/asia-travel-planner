const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// New travelRoute in the correct order with updated transport connections
const newTravelRoute = `const travelRoute = [
            // THAILAND - NORTH
            {
                id: 1, city: "Bangkok", country: "Thailand", lat: 13.7563, lng: 100.5018, duration: "4 days",
                description: "Start in the Land of Smiles",
                hostels: [
                    { name: "NapPark Hostel", price: "$8/night", rating: "8.8", info: "Khao San area, social" },
                    { name: "Bed Station Hostel", price: "$6/night", rating: "8.5", info: "Near MRT, basic but clean" }
                ],
                activities: ["Grand Palace & Wat Phra Kaew", "Chatuchak Weekend Market", "Khao San Road", "Floating markets"],
                nextTravel: [{ mode: "🚂 Train", destination: "Chiang Mai", price: "$18-40", duration: "10h (sleeper train)" }]
            },
            {
                id: 2, city: "Chiang Mai", country: "Thailand", lat: 18.7883, lng: 98.9853, duration: "5 days",
                description: "Temples, mountains, digital nomad hub",
                hostels: [
                    { name: "Deejai Backpackers", price: "$5/night", rating: "8.7", info: "Super cheap, Old City" },
                    { name: "Stamps Backpackers", price: "$7/night", rating: "9.1", info: "Best social hostel" }
                ],
                activities: ["Doi Suthep Temple", "Elephant Nature Park", "Sunday Walking Street", "Muay Thai class", "Cooking class"],
                nextTravel: [{ mode: "🚌 Minivan", destination: "Pai", price: "$5-8", duration: "3h" }]
            },
            {
                id: 3, city: "Pai", country: "Thailand", lat: 19.3597, lng: 98.4408, duration: "4 days",
                description: "Hippie mountain town, chill vibes",
                hostels: [
                    { name: "Pai Circus Hostel", price: "$6/night", rating: "9.0", info: "Pool, fire shows" }
                ],
                activities: ["Pai Canyon sunset", "Hot springs", "Pam Bok Waterfall", "Night market", "Rent a scooter"],
                nextTravel: [{ mode: "✈️ Flight", destination: "Luang Prabang", price: "$80-150", duration: "3-4h", route: "Minivan Pai → Chiang Mai Airport (3h) • Flight: Chiang Mai (CNX) → Luang Prabang (LPQ)" }]
            },
            // LAOS
            {
                id: 4, city: "Luang Prabang", country: "Laos", lat: 19.8850, lng: 102.1347, duration: "4 days",
                description: "UNESCO town on the Mekong",
                hostels: [
                    { name: "Safehouse Hostel", price: "$8/night", rating: "8.7", info: "Rooftop bar" }
                ],
                activities: ["Alms giving (sunrise)", "Kuang Si Waterfalls", "Night market", "Pak Ou Caves", "Mekong cruise"],
                nextTravel: [{ mode: "🚌 Bus", destination: "Vang Vieng", price: "$12-18", duration: "5-6h" }]
            },
            {
                id: 5, city: "Vang Vieng", country: "Laos", lat: 18.9220, lng: 102.4473, duration: "3 days",
                description: "Karst mountains, tubing, adventure",
                hostels: [
                    { name: "Nana Backpackers", price: "$6/night", rating: "8.8", info: "River views, social" }
                ],
                activities: ["River tubing", "Blue Lagoons", "Kayaking", "Hot air balloon", "Caves exploration"],
                nextTravel: [{ mode: "🚌 Bus", destination: "Vientiane", price: "$8-12", duration: "3-4h" }]
            },
            {
                id: 6, city: "Vientiane", country: "Laos", lat: 17.9757, lng: 102.6331, duration: "2 days",
                description: "Chill capital, Mekong riverside",
                hostels: [
                    { name: "Dream Home Hostel", price: "$5/night", rating: "8.6", info: "Budget, central" }
                ],
                activities: ["Patuxai Victory Gate", "Buddha Park", "Mekong sunset", "COPE Visitor Centre", "Night market"],
                nextTravel: [{ mode: "✈️ Flight", destination: "Hanoi", price: "$60-100", duration: "1h" }]
            },
            // VIETNAM
            {
                id: 7, city: "Hanoi", country: "Vietnam", lat: 21.0285, lng: 105.8542, duration: "4 days",
                description: "Chaotic charm, incredible food",
                hostels: [
                    { name: "Nexy Hostel", price: "$8/night", rating: "9.3", info: "Best hostel in Hanoi" }
                ],
                activities: ["Old Quarter exploration", "Street food tour", "Train Street", "Ho Chi Minh Mausoleum", "Water puppets"],
                nextTravel: [{ mode: "🚌 Sleeper Bus", destination: "Ha Giang", price: "$12-15", duration: "6-7h" }]
            },
            {
                id: 8, city: "Ha Giang Loop", country: "Vietnam", lat: 23.2781, lng: 105.0021, duration: "4 days",
                description: "Epic motorbike loop, best road trip in SE Asia! 🏍️",
                hostels: [
                    { name: "QT Motorbikes & Tours", price: "$180-220/4 days", rating: "9.4", info: "Most popular - bike, guide, food, homestays inc." },
                    { name: "Jasmine Hostel Tours", price: "$150-180/4 days", rating: "9.1", info: "Budget option, great guides" },
                    { name: "Cheers Hostel Tours", price: "$170-200/4 days", rating: "9.2", info: "Easy rider option if you can't ride" }
                ],
                activities: ["Ma Pi Leng Pass (king of passes!)", "Dong Van karst plateau UNESCO", "Lung Cu Flag Tower (China border)", "Ethnic minority homestays", "Du Gia waterfall swim"],
                nextTravel: [{ mode: "🚌 Sleeper Bus", destination: "Hanoi", price: "$12-15", duration: "6-7h", route: "Sleeper bus Ha Giang → Hanoi My Dinh station • Then book Ha Long cruise from Hanoi (most include pickup)" }]
            },
            {
                id: 9, city: "Ha Long Bay", country: "Vietnam", lat: 20.9101, lng: 107.1839, duration: "2 days",
                description: "Limestone karsts, boat cruise",
                hostels: [
                    { name: "Overnight Cruise", price: "$45-80", rating: "9.0", info: "Cruise with cabin" }
                ],
                activities: ["Overnight cruise", "Kayaking", "Sung Sot Cave", "Ti Top Island", "Floating village"],
                nextTravel: [{ mode: "🚌 Bus", destination: "Ninh Binh", price: "$12-18", duration: "4h" }]
            },
            {
                id: 10, city: "Ninh Binh", country: "Vietnam", lat: 20.2539, lng: 105.9750, duration: "2 days",
                description: "Ha Long Bay on land",
                hostels: [
                    { name: "Tam Coc Bungalow", price: "$10/night", rating: "9.1", info: "Rice field views" }
                ],
                activities: ["Tam Coc boat ride", "Mua Cave viewpoint", "Bai Dinh Pagoda", "Cycling rice fields"],
                nextTravel: [{ mode: "🚂 Train", destination: "Hue", price: "$25-45", duration: "10-12h" }]
            },
            {
                id: 11, city: "Hue", country: "Vietnam", lat: 16.4637, lng: 107.5909, duration: "2 days",
                description: "Imperial city, royal tombs",
                hostels: [
                    { name: "Vietnam Backpackers Hue", price: "$7/night", rating: "8.8", info: "Pool, social" }
                ],
                activities: ["Imperial Citadel", "Royal tombs", "Thien Mu Pagoda", "DMZ tour", "Perfume River"],
                nextTravel: [{ mode: "🚂 Train", destination: "Da Nang/Hoi An", price: "$8-15", duration: "2.5h" }]
            },
            {
                id: 12, city: "Hoi An", country: "Vietnam", lat: 15.8801, lng: 108.3380, duration: "4 days",
                description: "Lantern town, tailors, beach",
                hostels: [
                    { name: "Tribee Bana", price: "$8/night", rating: "9.2", info: "Pool, bikes free" }
                ],
                activities: ["Ancient Town at night", "Get clothes tailored", "An Bang Beach", "Basket boat tour", "Cooking class"],
                nextTravel: [{ mode: "✈️ Flight", destination: "Ho Chi Minh", price: "$35-70", duration: "1h 15m" }]
            },
            {
                id: 13, city: "Ho Chi Minh City", country: "Vietnam", lat: 10.8231, lng: 106.6297, duration: "3 days",
                description: "Energetic metropolis, war history",
                hostels: [
                    { name: "The Common Room", price: "$9/night", rating: "9.1", info: "Design hostel" }
                ],
                activities: ["Cu Chi Tunnels", "War Remnants Museum", "Ben Thanh Market", "Bui Vien Walking Street"],
                nextTravel: [{ mode: "🚌 Bus", destination: "Phnom Penh", price: "$15-25", duration: "6-7h" }]
            },
            // CAMBODIA
            {
                id: 14, city: "Phnom Penh", country: "Cambodia", lat: 11.5564, lng: 104.9282, duration: "3 days",
                description: "Sobering history, riverside charm",
                hostels: [
                    { name: "Mad Monkey", price: "$7/night", rating: "8.9", info: "Pool, party vibe" }
                ],
                activities: ["Killing Fields & S-21", "Royal Palace", "Riverside sunset", "Russian Market"],
                nextTravel: [{ mode: "🚌 Bus", destination: "Siem Reap", price: "$10-15", duration: "6h" }]
            },
            {
                id: 15, city: "Siem Reap", country: "Cambodia", lat: 13.3671, lng: 103.8448, duration: "4 days",
                description: "Angkor Wat, ancient temples",
                hostels: [
                    { name: "Lub d Siem Reap", price: "$10/night", rating: "9.0", info: "Pool, modern" }
                ],
                activities: ["Angkor Wat sunrise", "Ta Prohm (Tomb Raider)", "Angkor Thom & Bayon", "Pub Street"],
                nextTravel: [{ mode: "🚌 Bus", destination: "Kampot", price: "$15-20", duration: "8h" }]
            },
            {
                id: 16, city: "Kampot", country: "Cambodia", lat: 10.5943, lng: 104.1830, duration: "3 days",
                description: "Riverside chill, pepper farms",
                hostels: [
                    { name: "Onederz Kampot", price: "$6/night", rating: "8.8", info: "River views" }
                ],
                activities: ["Bokor Mountain", "Pepper farm tour", "River kayaking", "Kep crab market"],
                nextTravel: [{ mode: "✈️ Flight", destination: "Krabi", price: "$80-150", duration: "2-3h", route: "Bus/taxi Kampot → Phnom Penh Airport (PNH) 2.5h • Flight: Phnom Penh → Bangkok → Krabi (or direct seasonal)" }]
            },
            // THAILAND - SOUTHERN ISLANDS (Best Feb-April!)
            {
                id: 17, city: "Krabi / Ao Nang", country: "Thailand", lat: 8.0863, lng: 98.9063, duration: "3 days",
                description: "Gateway to islands, limestone cliffs",
                hostels: [
                    { name: "Pak-Up Hostel", price: "$10/night", rating: "9.2", info: "Pool, rooftop bar" },
                    { name: "Slumber Party Hostel", price: "$8/night", rating: "8.8", info: "Social, parties" }
                ],
                activities: ["Railay Beach (climb or chill)", "4 Islands tour", "Ao Nang beach", "Tiger Cave Temple", "Night market"],
                nextTravel: [{ mode: "⛴️ Ferry", destination: "Koh Phi Phi", price: "$12-18", duration: "1.5h" }]
            },
            {
                id: 18, city: "Koh Phi Phi", country: "Thailand", lat: 7.7407, lng: 98.7784, duration: "3 days",
                description: "Famous party island, Maya Bay",
                hostels: [
                    { name: "Phi Phi Hostel", price: "$10/night", rating: "8.3", info: "Basic but cheap" },
                    { name: "Blanco Beach Bar", price: "$12/night", rating: "8.7", info: "Beachfront, worth it" }
                ],
                activities: ["Maya Bay day trip", "Viewpoint hike", "Snorkeling", "Beach parties", "Long Beach"],
                nextTravel: [{ mode: "⛴️ Ferry", destination: "Koh Lanta", price: "$10-15", duration: "1h" }]
            },
            {
                id: 19, city: "Koh Lanta", country: "Thailand", lat: 7.5357, lng: 99.0694, duration: "4 days",
                description: "Chill alternative, long beaches",
                hostels: [
                    { name: "The Lanta Hostel", price: "$10/night", rating: "8.9", info: "Pool, social but chill" },
                    { name: "Chill Out Bungalows", price: "$15/night", rating: "8.6", info: "Beach huts" }
                ],
                activities: ["Rent a scooter", "Beach hopping", "Mu Ko Lanta National Park", "Old Town", "Sunset at Klong Dao"],
                nextTravel: [{ mode: "⛴️ Ferry", destination: "Koh Lipe", price: "$35-50", duration: "4-5h" }]
            },
            {
                id: 20, city: "Koh Lipe", country: "Thailand", lat: 6.4833, lng: 99.3000, duration: "3 days",
                description: "Thai Maldives, crystal clear water",
                hostels: [
                    { name: "Castaway Resort", price: "$12/night", rating: "8.4", info: "Budget fan bungalows" },
                    { name: "Bloom Cafe & Hostel", price: "$18/night", rating: "8.8", info: "Walking street (splurge)" }
                ],
                activities: ["Sunrise Beach", "Snorkeling (best in Thailand!)", "Walking street", "Island hopping", "Sunset Beach bars"],
                nextTravel: [{ mode: "⛴️ + 🚌", destination: "Surat Thani", price: "$40-60", duration: "6-7h", route: "Speedboat from Pattaya Beach → Pak Bara Pier (1.5h) • Bus: Pak Bara → Surat Thani town/airport" }]
            },
            {
                id: 21, city: "Koh Tao", country: "Thailand", lat: 10.0956, lng: 99.8403, duration: "4 days",
                description: "Diving paradise, small island vibes",
                hostels: [
                    { name: "Goodtime Beach", price: "$12/night", rating: "9.0", info: "Beachfront, social" },
                    { name: "Blue Wind Hostel", price: "$8/night", rating: "8.5", info: "Budget, Sairee" }
                ],
                activities: ["Get PADI certified (cheapest in world!)", "Snorkel Shark Bay", "Viewpoints hike", "Sairee Beach", "Night diving"],
                nextTravel: [{ mode: "⛴️ Ferry", destination: "Koh Phangan", price: "$8-12", duration: "30m" }]
            },
            {
                id: 22, city: "Koh Phangan", country: "Thailand", lat: 9.7500, lng: 100.0333, duration: "4 days",
                description: "Full Moon Party, yoga retreats",
                hostels: [
                    { name: "Slumber Party", price: "$12/night", rating: "8.8", info: "Haad Rin, party hostel" },
                    { name: "Chill Inn", price: "$10/night", rating: "8.6", info: "Quieter, Thong Sala" }
                ],
                activities: ["Full Moon Party (if timing!)", "Secret Beach", "Bottle Beach", "Yoga retreat", "Waterfalls"],
                nextTravel: [{ mode: "⛴️ + ✈️", destination: "Kuala Lumpur", price: "$60-120", duration: "5-6h total", route: "Ferry from Thong Sala Pier → Surat Thani (2h) • Flight: Surat Thani (URT) → Kuala Lumpur (KUL)" }]
            },
            // MALAYSIA
            {
                id: 23, city: "Kuala Lumpur", country: "Malaysia", lat: 3.1390, lng: 101.6869, duration: "3 days",
                description: "Modern towers, diverse food",
                hostels: [
                    { name: "BackHome KL", price: "$10/night", rating: "9.1", info: "Heritage building" }
                ],
                activities: ["Petronas Towers", "Batu Caves", "Jalan Alor food street", "KL Tower"],
                nextTravel: [{ mode: "🚌 Bus", destination: "Melaka", price: "$8-12", duration: "2h" }]
            },
            {
                id: 24, city: "Melaka", country: "Malaysia", lat: 2.1896, lng: 102.2501, duration: "2 days",
                description: "Historic port city, UNESCO site",
                hostels: [
                    { name: "Nomaps Hostel", price: "$9/night", rating: "9.0", info: "Central, modern" }
                ],
                activities: ["Jonker Street night market", "A Famosa fort", "River cruise", "Chicken rice balls"],
                nextTravel: [{ mode: "🚌 Bus", destination: "Cameron Highlands", price: "$15-20", duration: "5h" }]
            },
            {
                id: 25, city: "Cameron Highlands", country: "Malaysia", lat: 4.4718, lng: 101.3762, duration: "2 days",
                description: "Tea plantations, cool climate",
                hostels: [
                    { name: "Father's Guesthouse", price: "$8/night", rating: "8.9", info: "Cozy, tours" }
                ],
                activities: ["Tea plantation tour", "Mossy Forest trek", "Strawberry farms", "Sunrise hiking"],
                nextTravel: [{ mode: "🚌 Bus", destination: "Penang", price: "$12-18", duration: "4-5h" }]
            },
            {
                id: 26, city: "Penang", country: "Malaysia", lat: 5.4164, lng: 100.3327, duration: "4 days",
                description: "Best street food in Asia",
                hostels: [
                    { name: "The 80s Guesthouse", price: "$9/night", rating: "8.9", info: "Heritage" }
                ],
                activities: ["George Town street art", "Hawker food crawl", "Kek Lok Si Temple", "Penang Hill"],
                nextTravel: [{ mode: "⛴️ Ferry", destination: "Langkawi", price: "$20-30", duration: "2.5h", route: "Ferry from Penang Swettenham Pier (Georgetown) → Kuah Jetty, Langkawi" }]
            },
            {
                id: 27, city: "Langkawi", country: "Malaysia", lat: 6.3500, lng: 99.8000, duration: "3 days",
                description: "Duty-free island paradise",
                hostels: [
                    { name: "The Dorm Langkawi", price: "$9/night", rating: "8.5", info: "Pantai Cenang, basic" },
                    { name: "Cenang Rooms", price: "$10/night", rating: "8.3", info: "Budget guesthouse" }
                ],
                activities: ["Sky Bridge & Cable Car", "Island hopping", "Pantai Cenang beach", "Mangrove kayak"],
                nextTravel: [{ mode: "✈️ Flight", destination: "Singapore", price: "$40-80", duration: "1.5h" }]
            },
            // SINGAPORE
            {
                id: 28, city: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198, duration: "1 day",
                description: "Quick transit stop, see the highlights",
                hostels: [
                    { name: "Beary Best Capsule", price: "$15/night", rating: "8.5", info: "Chinatown, cheap for SG" },
                    { name: "5footway.inn", price: "$14/night", rating: "8.2", info: "Budget chain" }
                ],
                activities: ["Marina Bay Sands viewpoint", "Gardens by the Bay", "Hawker centre dinner"],
                nextTravel: [{ mode: "✈️ Flight", destination: "Jakarta", price: "$50-100", duration: "1h 40m" }]
            },
            // INDONESIA
            {
                id: 29, city: "Jakarta", country: "Indonesia", lat: -6.2088, lng: 106.8456, duration: "2 days",
                description: "Chaotic capital, gateway to Java",
                hostels: [
                    { name: "Six Degrees Hostel", price: "$8/night", rating: "8.5", info: "Central, cheap" },
                    { name: "Cara Cara Inn", price: "$12/night", rating: "8.7", info: "Menteng (upgrade)" }
                ],
                activities: ["Kota Tua (Old Town)", "National Museum", "Monas monument", "Street food"],
                nextTravel: [{ mode: "🚂 Train", destination: "Yogyakarta", price: "$20-40", duration: "7-8h" }]
            },
            {
                id: 30, city: "Yogyakarta", country: "Indonesia", lat: -7.7956, lng: 110.3695, duration: "4 days",
                description: "Cultural heart of Java, temples",
                hostels: [
                    { name: "Otu Hostel", price: "$8/night", rating: "9.2", info: "Amazing design, pool" }
                ],
                activities: ["Borobudur sunrise", "Prambanan temples", "Kraton Palace", "Malioboro Street", "Jomblang Cave"],
                nextTravel: [{ mode: "✈️ Flight", destination: "Bali", price: "$40-80", duration: "1h 15m" }]
            },
            {
                id: 31, city: "Bali - Ubud", country: "Indonesia", lat: -8.5069, lng: 115.2625, duration: "4 days",
                description: "Rice terraces, yoga, culture",
                hostels: [
                    { name: "Onward Ubud", price: "$8/night", rating: "8.6", info: "Budget, central" },
                    { name: "In Da Lodge", price: "$9/night", rating: "8.7", info: "Rice field views" }
                ],
                activities: ["Tegallalang rice terraces", "Ubud Monkey Forest", "Tirta Empul temple", "Yoga classes"],
                nextTravel: [{ mode: "🛵 Scooter", destination: "Canggu", price: "$5-8", duration: "1h" }]
            },
            {
                id: 32, city: "Bali - Canggu", country: "Indonesia", lat: -8.6478, lng: 115.1385, duration: "4 days",
                description: "Surf town, beach clubs, digital nomads",
                hostels: [
                    { name: "Kos One Hostel", price: "$8/night", rating: "8.6", info: "Budget, social" },
                    { name: "Sedasa Canggu", price: "$10/night", rating: "8.8", info: "Pool, affordable" }
                ],
                activities: ["Surf lessons", "Beach clubs", "Echo Beach sunset", "Tanah Lot temple", "Cafe hopping"],
                nextTravel: [{ mode: "🛵 Scooter", destination: "Uluwatu", price: "$5-8", duration: "1h" }]
            },
            {
                id: 33, city: "Bali - Uluwatu", country: "Indonesia", lat: -8.8291, lng: 115.0849, duration: "3 days",
                description: "Cliffside temples, epic surf",
                hostels: [
                    { name: "Puri Uluwatu Villas", price: "$10/night", rating: "8.4", info: "Basic, good location" },
                    { name: "Bingin Green View", price: "$12/night", rating: "8.6", info: "Budget, near beach" }
                ],
                activities: ["Uluwatu Temple & Kecak dance", "Single Fin Sunday", "Padang Padang beach", "Surfing"],
                nextTravel: [{ mode: "⛴️ Fast Boat", destination: "Gili Islands", price: "$30-50", duration: "1.5-2h", route: "Fast boat from Padang Bai or Sanur Harbor → Gili Trawangan" }]
            },
            {
                id: 34, city: "Gili Trawangan", country: "Indonesia", lat: -8.3510, lng: 116.0346, duration: "3 days",
                description: "Party island, no cars, diving",
                hostels: [
                    { name: "Gili Castle", price: "$12/night", rating: "9.0", info: "Pool, parties" }
                ],
                activities: ["Scuba diving", "Bike around island", "Sunset swings", "Beach bars", "Freediving"],
                nextTravel: [{ mode: "⛴️ Boat", destination: "Gili Air", price: "$3-5", duration: "15m" }]
            },
            {
                id: 35, city: "Gili Air", country: "Indonesia", lat: -8.3667, lng: 116.0833, duration: "3 days",
                description: "Chill island, best of both worlds",
                hostels: [
                    { name: "Captain Coconuts", price: "$12/night", rating: "8.9", info: "Beachfront" }
                ],
                activities: ["Snorkeling with turtles", "Yoga retreats", "Beachside cafes", "Island vibes"],
                nextTravel: [{ mode: "⛴️ Fast Boat", destination: "Lombok", price: "$15-25", duration: "30m" }]
            },
            {
                id: 36, city: "Lombok", country: "Indonesia", lat: -8.5833, lng: 116.1167, duration: "4 days",
                description: "Quieter Bali, stunning beaches",
                hostels: [
                    { name: "Kuta Lombok Hostel", price: "$10/night", rating: "8.8", info: "Kuta beach" }
                ],
                activities: ["Kuta Lombok beaches", "Tanjung Aan", "Surf Gerupuk", "Pink Beach day trip"],
                nextTravel: [{ mode: "✈️ Flight", destination: "Labuan Bajo", price: "$60-120", duration: "1h", route: "Flight from Lombok International (LOP) → Komodo Airport (LBJ)" }]
            },
            {
                id: 37, city: "Labuan Bajo (Komodo)", country: "Indonesia", lat: -8.4500, lng: 119.8833, duration: "3 days",
                description: "Dragons, diving, paradise ending 🐉",
                hostels: [
                    { name: "Dragon Dive Hostel", price: "$10/night", rating: "8.5", info: "Dive shop attached" },
                    { name: "Ciao Hostel", price: "$12/night", rating: "8.7", info: "Central, social" }
                ],
                activities: ["Komodo National Park tour", "See Komodo dragons!", "Padar Island hike", "Manta ray diving", "Pink Beach"],
                nextTravel: [{ mode: "✈️ Flight", destination: "Bali → Home", price: "$50 + intl", duration: "Varies" }]
            }
        ];`;

// Find and replace the travelRoute array
const oldArrayRegex = /const travelRoute = \[[\s\S]*?\];(\s*\n\s*const countries)/;
const match = html.match(oldArrayRegex);
if (match) {
    html = html.replace(oldArrayRegex, newTravelRoute + '$1');
    fs.writeFileSync('index.html', html);
    console.log('✅ Successfully reordered the route!');
    console.log('New order: Thailand North (1-3) → Laos (4-6) → Vietnam (7-13) → Cambodia (14-16) → Thailand South (17-22) → Malaysia (23-27) → Singapore (28) → Indonesia (29-37)');
} else {
    console.log('❌ Could not find the travelRoute array to replace');
}
