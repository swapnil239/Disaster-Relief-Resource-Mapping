# 🆘 Disaster Relief Resource Mapping

> *"During a disaster, every second counts. This project makes sure no one wastes time searching for help."*

A web-based application to help citizens, volunteers, and relief coordinators **quickly find and report disaster relief resources** across India — including food camps, medical aid, shelters, and volunteer groups.

🌐 **Live Demo:** https://disaster-relief-mapping.netlify.app

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](screenshots/home.jpg)
> Emergency contacts, stats, live alerts — everything on one page

### 🔍 Resources Page  
![Resources Page](screenshots/resources.jpg)
> Search "Agra" → Agra ke resources instantly appear with filters

### 📋 Report Page
![Report Page](screenshots/report.jpg)
> Submit a resource → saved to Firebase cloud database in real-time

---

## 💡 Problem It Solves

During disasters like floods and earthquakes, the biggest challenge is **not the shortage of resources — it's that nobody knows where they are.**

| Problem | Solution |
|---|---|
| Victims don't know where shelter/food is | Search any city → instant results |
| Volunteers don't know where help is needed | Report form → live database |
| No central platform for coordination | One website for all resources |
| Resources duplicated in some areas, missing in others | Visible resource map for all |

---

## ✨ Features

- 🔍 **City Search** — Type any city in India → resources appear instantly
- 🏷️ **Filter by Type** — Food 🍛 | Medical 🏥 | Shelter 🏠 | Volunteers 🤝
- 📋 **Report a Resource** — Submit new resources via form
- ☁️ **Firebase Database** — All reported data saved to Google Firebase Firestore in real-time
- 📞 **Emergency Contacts** — Police (100), Ambulance (102), NDRF, Fire (101)
- ⚠️ **Live Alerts** — Active disaster warnings on homepage
- 📊 **Stats Bar** — 500+ Camps, 28 States, 24/7 Support, 10K+ Helped
- 📱 **Responsive Design** — Works on mobile and desktop

---

## 🗂️ Project Structure

```
Disaster-Relief-Resource-Mapping/
│
├── index.html        → Homepage (hero, emergency contacts, alerts)
├── resources.html    → Search & filter relief resources by city
├── report.html       → Report a new resource (saved to Firebase)
├── style.css         → Stylesheet for all three pages
├── script.js         → Filter and search logic
└── data.js           → City-wise resource data for India
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Styling and responsive layout |
| JavaScript | Search, filter, dynamic card rendering |
| Firebase Firestore | Cloud database for reported resources |
| data.js | Offline-first city resource data |

---

## 🚀 How to Run Locally

1. **Clone this repository**
   ```bash
   git clone https://github.com/your-username/disaster-relief-mapping.git
   ```

2. **Open the project folder**
   ```bash
   cd disaster-relief-mapping
   ```

3. **Open `index.html`** in your browser
   - Use **Live Server** in VS Code for best experience
   - Or just double-click `index.html`

> ✅ No npm, no installation, no backend setup required!

---

## 🔥 Firebase Setup

The report form saves data to **Google Firebase Firestore**.

1. Go to [firebase.google.com](https://firebase.google.com) → create free project
2. Enable **Firestore Database** in test mode
3. Register a web app → copy your `firebaseConfig`
4. Replace the config inside `report.html`

---

## 📋 Pages Overview

### 🏠 Home Page (`index.html`)
- Hero section with Find Resources + Report a Resource buttons
- Stats: 500+ Relief Camps | 28 States | 24/7 | 10K+ Helped
- Emergency contacts: Police, Ambulance, Disaster Helpline, Fire, NDRF
- Sample resource cards and live urgent alerts

### 🔍 Resources Page (`resources.html`)
- Search any Indian city → resources appear instantly
- Filter: Food 🍛 | Medical 🏥 | Shelter 🏠 | Volunteers 🤝
- Uses `data.js` — works offline, no internet needed for search
- Unknown cities get auto-generated generic resources

### 📋 Report Page (`report.html`)
- Form: Resource Name, Type, Status, Location, Contact, Available Items
- Saved to **Google Firebase Firestore** cloud database
- Submitted resource card appears immediately on same page
- Data persists after refresh — stored in cloud

---

## 🔮 Future Scope

- [ ] Admin panel to verify submitted resources before going live
- [ ] Interactive map view using Leaflet.js / Google Maps
- [ ] Live data from NDMA (National Disaster Management Authority)
- [ ] Mobile app using React Native or Flutter
- [ ] Hindi and regional language support
- [ ] SMS alerts for new resources in user's area

---

## 🤝 Contributing

Know of relief resources in your city? Want to improve the project?

1. Fork this repository
2. Create a new branch
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add your feature'
   ```
4. Push and open a Pull Request

---

## 📬 Contact

Have questions or want to contribute data for your city?

- 💼 LinkedIn: https://www.linkedin.com/in/swapnil-sharma-16921025b/
- 🐙 GitHub: https://github.com/swapnil239
- 📧 Email: swapnilsharma239@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Google Firebase](https://firebase.google.com) — Free cloud database
- [MDN Web Docs](https://developer.mozilla.org) — Reference
- [W3Schools](https://www.w3schools.com) — Learning resource
- [NDMA India](https://ndma.gov.in) — Disaster management reference
