const cityResources = {
  "agra": [
    { name: "Agra Food Relief Camp", type: "food", location: "Taj Nagari Phase 2, Agra", contact: "+91 9837100001", status: "Open", capacity: "500 meals/day", available: "Rice, Dal, Water, Bread" },
    { name: "SN Medical College Camp", type: "medical", location: "MG Road, Agra", contact: "+91 9837100002", status: "Open", capacity: "200 patients", available: "First Aid, Emergency Care, Medicines" },
    { name: "Red Cross Shelter Agra", type: "shelter", location: "Civil Lines, Agra", contact: "+91 9837100003", status: "Limited", capacity: "300 people", available: "Beds, Blankets, Food" },
    { name: "Agra Volunteer Corps", type: "volunteer", location: "Sanjay Place, Agra", contact: "+91 9837100004", status: "Open", capacity: "150 volunteers", available: "Rescue, First Aid, Distribution" },
    { name: "Yamuna Relief Kitchen", type: "food", location: "Balkeshwar, Agra", contact: "+91 9837100005", status: "Open", capacity: "300 meals/day", available: "Cooked Food, Water, Biscuits" },
    { name: "District Hospital Camp", type: "medical", location: "Agra Cantonment", contact: "+91 9837100006", status: "Limited", capacity: "100 beds", available: "Emergency Surgery, ICU, Ambulance" }
  ],
  "lucknow": [
    { name: "KGMU Relief Camp", type: "medical", location: "Chowk, Lucknow", contact: "+91 9839200001", status: "Open", capacity: "500 patients", available: "Emergency Care, Surgery, ICU" },
    { name: "Lucknow Food Drive", type: "food", location: "Hazratganj, Lucknow", contact: "+91 9839200002", status: "Open", capacity: "1000 meals/day", available: "Rice, Dal, Vegetables, Water" },
    { name: "UP Red Cross Shelter", type: "shelter", location: "Alambagh, Lucknow", contact: "+91 9839200003", status: "Open", capacity: "600 people", available: "Beds, Blankets, Meals" },
    { name: "Lucknow Seva Dal", type: "volunteer", location: "Gomti Nagar, Lucknow", contact: "+91 9839200004", status: "Open", capacity: "200 volunteers", available: "Rescue, Medical Aid, Food Distribution" },
    { name: "Indira Nagar Kitchen", type: "food", location: "Indira Nagar, Lucknow", contact: "+91 9839200005", status: "Limited", capacity: "400 meals/day", available: "Cooked Meals, Packaged Food, Water" },
    { name: "Ram Manohar Lohia Camp", type: "medical", location: "Vibhuti Khand, Lucknow", contact: "+91 9839200006", status: "Open", capacity: "300 beds", available: "First Aid, Medicines, Ambulance" }
  ],
  "prayagraj": [
    { name: "Food Camp Community Kitchen", type: "food", location: "Civil Lines, Prayagraj", contact: "+91 9876543210", status: "Open", capacity: "500 meals/day", available: "Food Packets, Water" },
    { name: "Medical Help District Hospital", type: "medical", location: "Prayagraj District Hospital", contact: "+91 9123456780", status: "Open", capacity: "200 beds", available: "First Aid, Emergency Care" },
    { name: "Sangam Relief Shelter", type: "shelter", location: "George Town, Prayagraj", contact: "+91 9837300003", status: "Limited", capacity: "250 people", available: "Beds, Food, Clothes" },
    { name: "Prayagraj Seva Samiti", type: "volunteer", location: "Naini, Prayagraj", contact: "+91 9837300004", status: "Open", capacity: "100 volunteers", available: "Rescue Operations, Food Distribution" },
    { name: "Yamuna Ghat Kitchen", type: "food", location: "Daraganj, Prayagraj", contact: "+91 9837300005", status: "Open", capacity: "300 meals/day", available: "Cooked Meals, Water, Biscuits" },
    { name: "MLN Medical College Camp", type: "medical", location: "Lowther Road, Prayagraj", contact: "+91 9837300006", status: "Open", capacity: "150 patients", available: "Emergency, Medicines, Surgery" }
  ],
  "delhi": [
    { name: "AIIMS Emergency Camp", type: "medical", location: "New Delhi", contact: "+91 9123456780", status: "Open", capacity: "1000 patients", available: "Emergency, ICU, Surgery" },
    { name: "Delhi Relief Kitchen", type: "food", location: "Chandni Chowk, Delhi", contact: "+91 9810000001", status: "Open", capacity: "2000 meals/day", available: "Full Meals, Water, Snacks" },
    { name: "Red Cross Shelter Delhi", type: "shelter", location: "ITO, Delhi", contact: "+91 9810000002", status: "Open", capacity: "1000 people", available: "Beds, Blankets, Food" },
    { name: "NSS Delhi Volunteers", type: "volunteer", location: "Connaught Place, Delhi", contact: "+91 9810000003", status: "Open", capacity: "500 volunteers", available: "Rescue, First Aid, Distribution" },
    { name: "Yamuna Flood Camp", type: "food", location: "Majnu Ka Tilla, Delhi", contact: "+91 9810000004", status: "Limited", capacity: "800 meals/day", available: "Cooked Food, Water, Medicines" },
    { name: "Safdarjung Hospital Camp", type: "medical", location: "Safdarjung, Delhi", contact: "+91 9810000005", status: "Open", capacity: "500 beds", available: "All Medical Services" }
  ],
  "mumbai": [
    { name: "KEM Hospital Relief", type: "medical", location: "Parel, Mumbai", contact: "+91 9820000001", status: "Open", capacity: "800 patients", available: "Emergency, Surgery, ICU" },
    { name: "Mumbai Dabbawalas Food", type: "food", location: "Dharavi, Mumbai", contact: "+91 9820000002", status: "Open", capacity: "3000 meals/day", available: "Home Cooked Meals, Water" },
    { name: "BMC Shelter Camp", type: "shelter", location: "Kurla, Mumbai", contact: "+91 9820000003", status: "Limited", capacity: "500 people", available: "Beds, Blankets, Food" },
    { name: "NSS Mumbai Rescue", type: "volunteer", location: "Andheri, Mumbai", contact: "+91 9820000004", status: "Open", capacity: "300 volunteers", available: "Flood Rescue, Medical Aid" },
    { name: "Sion Relief Kitchen", type: "food", location: "Sion, Mumbai", contact: "+91 9820000005", status: "Open", capacity: "1000 meals/day", available: "Cooked Food, Water, Biscuits" },
    { name: "JJ Hospital Camp", type: "medical", location: "Byculla, Mumbai", contact: "+91 9820000006", status: "Open", capacity: "400 beds", available: "All Medical Services, Ambulance" }
  ],
  "kurukshetra": [
    { name: "Kurukshetra Seva Camp", type: "food", location: "Brahma Sarovar, Kurukshetra", contact: "+91 9812300001", status: "Open", capacity: "400 meals/day", available: "Langar, Water, Fruits" },
    { name: "SHKM Medical Camp", type: "medical", location: "Kurukshetra University Road", contact: "+91 9812300002", status: "Open", capacity: "150 patients", available: "First Aid, Medicines, Emergency" },
    { name: "Haryana Red Cross Shelter", type: "shelter", location: "Pehowa Chowk, Kurukshetra", contact: "+91 9812300003", status: "Open", capacity: "200 people", available: "Beds, Blankets, Meals" },
    { name: "KU NSS Volunteers", type: "volunteer", location: "Kurukshetra University", contact: "+91 9812300004", status: "Open", capacity: "100 volunteers", available: "First Aid, Food Distribution" },
    { name: "Thanesar Relief Kitchen", type: "food", location: "Thanesar, Kurukshetra", contact: "+91 9812300005", status: "Limited", capacity: "200 meals/day", available: "Cooked Meals, Water, Bread" },
    { name: "Civil Hospital Camp", type: "medical", location: "Civil Lines, Kurukshetra", contact: "+91 9812300006", status: "Open", capacity: "100 beds", available: "Emergency Care, Medicines" }
  ],
  "sonipat": [
    { name: "Sonipat Food Relief", type: "food", location: "Model Town, Sonipat", contact: "+91 9812400001", status: "Open", capacity: "300 meals/day", available: "Rice, Dal, Water, Bread" },
    { name: "General Hospital Camp", type: "medical", location: "Atlas Road, Sonipat", contact: "+91 9812400002", status: "Open", capacity: "120 patients", available: "First Aid, Emergency, Medicines" },
    { name: "Sonipat Shelter Home", type: "shelter", location: "Murthal Road, Sonipat", contact: "+91 9812400003", status: "Open", capacity: "180 people", available: "Beds, Food, Blankets" },
    { name: "Youth Rescue Team", type: "volunteer", location: "Sector 14, Sonipat", contact: "+91 9812400004", status: "Open", capacity: "80 volunteers", available: "Rescue, First Aid, Distribution" },
    { name: "Yamuna Relief Camp", type: "food", location: "Rai, Sonipat", contact: "+91 9812400005", status: "Limited", capacity: "200 meals/day", available: "Cooked Food, Water" },
    { name: "DESU Medical Camp", type: "medical", location: "Sector 23, Sonipat", contact: "+91 9812400006", status: "Open", capacity: "80 beds", available: "Emergency Care, Surgery" }
  ],
  "chandigarh": [
    { name: "PGI Relief Camp", type: "medical", location: "Sector 12, Chandigarh", contact: "+91 9815000001", status: "Open", capacity: "500 patients", available: "Emergency, ICU, Surgery, Ambulance" },
    { name: "Chandigarh Food Drive", type: "food", location: "Sector 17, Chandigarh", contact: "+91 9815000002", status: "Open", capacity: "800 meals/day", available: "Full Meals, Water, Snacks" },
    { name: "UT Shelter Camp", type: "shelter", location: "Sector 25, Chandigarh", contact: "+91 9815000003", status: "Open", capacity: "400 people", available: "Beds, Blankets, Food, Toilets" },
    { name: "Chandigarh Rescue Team", type: "volunteer", location: "Sector 34, Chandigarh", contact: "+91 9815000004", status: "Open", capacity: "200 volunteers", available: "Rescue, Medical Aid, Distribution" },
    { name: "Sukhna Relief Kitchen", type: "food", location: "Sector 1, Chandigarh", contact: "+91 9815000005", status: "Open", capacity: "600 meals/day", available: "Cooked Meals, Water, Fruits" },
    { name: "GMSH Camp", type: "medical", location: "Sector 16, Chandigarh", contact: "+91 9815000006", status: "Limited", capacity: "200 beds", available: "Emergency, Medicines, X-Ray" }
  ],
  "jaipur": [
    { name: "SMS Hospital Camp", type: "medical", location: "JLN Marg, Jaipur", contact: "+91 9829000001", status: "Open", capacity: "600 patients", available: "Emergency, Surgery, ICU" },
    { name: "Pink City Food Relief", type: "food", location: "Johari Bazaar, Jaipur", contact: "+91 9829000002", status: "Open", capacity: "1000 meals/day", available: "Dal Baati, Water, Milk" },
    { name: "Rajasthan Red Cross", type: "shelter", location: "Civil Lines, Jaipur", contact: "+91 9829000003", status: "Open", capacity: "500 people", available: "Beds, AC, Food, Clothes" },
    { name: "Jaipur Seva Sansthan", type: "volunteer", location: "Vaishali Nagar, Jaipur", contact: "+91 9829000004", status: "Open", capacity: "250 volunteers", available: "Rescue, Distribution, First Aid" },
    { name: "Mansagar Relief Kitchen", type: "food", location: "Mansarovar, Jaipur", contact: "+91 9829000005", status: "Limited", capacity: "500 meals/day", available: "Cooked Meals, Water, Snacks" },
    { name: "JK Lon Hospital", type: "medical", location: "Adarsh Nagar, Jaipur", contact: "+91 9829000006", status: "Open", capacity: "300 beds", available: "Pediatric, Emergency, Medicines" }
  ],
  "bhopal": [
    { name: "Hamidia Hospital Camp", type: "medical", location: "Royal Market, Bhopal", contact: "+91 9827000001", status: "Open", capacity: "400 patients", available: "Emergency, Surgery, ICU" },
    { name: "Bhopal Food Relief", type: "food", location: "New Market, Bhopal", contact: "+91 9827000002", status: "Open", capacity: "700 meals/day", available: "Rice, Dal, Vegetables, Water" },
    { name: "MP Red Cross Shelter", type: "shelter", location: "Shyamla Hills, Bhopal", contact: "+91 9827000003", status: "Open", capacity: "350 people", available: "Beds, Blankets, Food" },
    { name: "Bhopal Youth Squad", type: "volunteer", location: "TT Nagar, Bhopal", contact: "+91 9827000004", status: "Open", capacity: "150 volunteers", available: "Rescue, Aid, Distribution" },
    { name: "Bada Talab Kitchen", type: "food", location: "Islamnagar, Bhopal", contact: "+91 9827000005", status: "Open", capacity: "400 meals/day", available: "Cooked Meals, Packaged Food, Water" },
    { name: "JP Hospital Relief", type: "medical", location: "Jahangirabad, Bhopal", contact: "+91 9827000006", status: "Limited", capacity: "200 beds", available: "Emergency, Medicines, Ambulance" }
  ],
  "kolkata": [
    { name: "SSKM Hospital Camp", type: "medical", location: "AJC Bose Road, Kolkata", contact: "+91 9830000001", status: "Open", capacity: "700 patients", available: "Emergency, ICU, Surgery" },
    { name: "Durga Puja Community Kitchen", type: "food", location: "Park Street, Kolkata", contact: "+91 9830000002", status: "Open", capacity: "2000 meals/day", available: "Full Meals, Water, Fruits" },
    { name: "WB Red Cross Shelter", type: "shelter", location: "Salt Lake, Kolkata", contact: "+91 9830000003", status: "Open", capacity: "800 people", available: "Beds, Food, Blankets, Fans" },
    { name: "Kolkata Rescue Brigade", type: "volunteer", location: "Howrah, Kolkata", contact: "+91 9830000004", status: "Open", capacity: "400 volunteers", available: "Flood Rescue, Medical Aid" },
    { name: "Ganges Relief Kitchen", type: "food", location: "Burrabazar, Kolkata", contact: "+91 9830000005", status: "Limited", capacity: "1000 meals/day", available: "Cooked Meals, Water, Biscuits" },
    { name: "NRS Medical Camp", type: "medical", location: "Sealdah, Kolkata", contact: "+91 9830000006", status: "Open", capacity: "350 beds", available: "Emergency, Medicines, Surgery" }
  ],
  "hyderabad": [
    { name: "Osmania Hospital Camp", type: "medical", location: "Afzalgunj, Hyderabad", contact: "+91 9848000001", status: "Open", capacity: "500 patients", available: "Emergency, ICU, Surgery" },
    { name: "Biryani Relief Camp", type: "food", location: "Charminar, Hyderabad", contact: "+91 9848000002", status: "Open", capacity: "1500 meals/day", available: "Full Meals, Water, Biryani" },
    { name: "TS Red Cross Shelter", type: "shelter", location: "Secunderabad, Hyderabad", contact: "+91 9848000003", status: "Open", capacity: "600 people", available: "Beds, AC, Food, Clothes" },
    { name: "Hyderabad Youth Force", type: "volunteer", location: "Banjara Hills, Hyderabad", contact: "+91 9848000004", status: "Open", capacity: "300 volunteers", available: "Rescue, First Aid, Distribution" },
    { name: "Hussain Sagar Relief", type: "food", location: "Tank Bund, Hyderabad", contact: "+91 9848000005", status: "Open", capacity: "800 meals/day", available: "Cooked Food, Water, Snacks" },
    { name: "Gandhi Hospital Camp", type: "medical", location: "Musheerabad, Hyderabad", contact: "+91 9848000006", status: "Limited", capacity: "300 beds", available: "Emergency, Burns, Medicines" }
  ],
  "chennai": [
    { name: "Government General Hospital", type: "medical", location: "Park Town, Chennai", contact: "+91 9841000001", status: "Open", capacity: "600 patients", available: "Emergency, Surgery, ICU" },
    { name: "Chennai Food Relief", type: "food", location: "T. Nagar, Chennai", contact: "+91 9841000002", status: "Open", capacity: "1200 meals/day", available: "Rice, Sambar, Water, Idli" },
    { name: "TN Red Cross Shelter", type: "shelter", location: "Anna Nagar, Chennai", contact: "+91 9841000003", status: "Open", capacity: "500 people", available: "Beds, Fans, Food, Clothes" },
    { name: "Chennai Disaster Response", type: "volunteer", location: "Velachery, Chennai", contact: "+91 9841000004", status: "Open", capacity: "250 volunteers", available: "Flood Rescue, First Aid" },
    { name: "Marina Relief Kitchen", type: "food", location: "Triplicane, Chennai", contact: "+91 9841000005", status: "Limited", capacity: "600 meals/day", available: "Cooked Meals, Water, Snacks" },
    { name: "Rajiv Gandhi Hospital", type: "medical", location: "Chromepet, Chennai", contact: "+91 9841000006", status: "Open", capacity: "300 beds", available: "Emergency, Medicines, Ambulance" }
  ],
  "bangalore": [
    { name: "Bowring Hospital Camp", type: "medical", location: "Shivajinagar, Bangalore", contact: "+91 9880000001", status: "Open", capacity: "500 patients", available: "Emergency, ICU, Surgery" },
    { name: "Bangalore Food Drive", type: "food", location: "KR Market, Bangalore", contact: "+91 9880000002", status: "Open", capacity: "1000 meals/day", available: "Rice, Rasam, Water, Fruits" },
    { name: "BBMP Shelter Camp", type: "shelter", location: "Jayanagar, Bangalore", contact: "+91 9880000003", status: "Open", capacity: "400 people", available: "Beds, Food, Blankets, Fans" },
    { name: "Bangalore Rescue Team", type: "volunteer", location: "Marathahalli, Bangalore", contact: "+91 9880000004", status: "Open", capacity: "200 volunteers", available: "Rescue, First Aid, Distribution" },
    { name: "Lalbagh Relief Kitchen", type: "food", location: "Basavanagudi, Bangalore", contact: "+91 9880000005", status: "Open", capacity: "600 meals/day", available: "Cooked Meals, Water, Snacks" },
    { name: "Victoria Hospital Camp", type: "medical", location: "Fort, Bangalore", contact: "+91 9880000006", status: "Limited", capacity: "250 beds", available: "Emergency, Medicines, Surgery" }
  ]
};

// Normalize function - handle variations in city name spelling
function findCity(searchTerm) {
  const term = searchTerm.toLowerCase().trim();
  
  // Direct match
  if (cityResources[term]) return cityResources[term];
  
  // Partial match
  for (const city in cityResources) {
    if (city.includes(term) || term.includes(city)) {
      return cityResources[city];
    }
  }
  
  // No match - generate generic resources for unknown city
  return generateGeneric(searchTerm);
}

function generateGeneric(city) {
  const cap = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
  return [
    { name: `${cap} Central Food Camp`, type: "food", location: `Main Market, ${cap}`, contact: "+91 9800000001", status: "Open", capacity: "300 meals/day", available: "Rice, Dal, Water, Bread" },
    { name: `District Hospital ${cap}`, type: "medical", location: `Civil Hospital Road, ${cap}`, contact: "+91 9800000002", status: "Open", capacity: "150 patients", available: "First Aid, Emergency, Medicines" },
    { name: `${cap} Relief Shelter`, type: "shelter", location: `Government School, ${cap}`, contact: "+91 9800000003", status: "Open", capacity: "200 people", available: "Beds, Blankets, Food, Water" },
    { name: `${cap} Volunteer Corps`, type: "volunteer", location: `Town Hall, ${cap}`, contact: "+91 9800000004", status: "Open", capacity: "80 volunteers", available: "Rescue, First Aid, Food Distribution" },
    { name: `${cap} Community Kitchen`, type: "food", location: `Railway Station Area, ${cap}`, contact: "+91 9800000005", status: "Limited", capacity: "200 meals/day", available: "Cooked Meals, Water, Biscuits" },
    { name: `Primary Health Centre ${cap}`, type: "medical", location: `Block Office Road, ${cap}`, contact: "+91 9800000006", status: "Open", capacity: "80 beds", available: "Basic Medical, Medicines, Dressing" }
  ];
}