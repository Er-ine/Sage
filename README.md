

# Sage 🌿

"Where PCOS makes sense."

---

## Basic Details

**Team Name:** InnovateHer
**Team Members:**

  * Member 1: Erine Anna Binu - MITS
* Member 2: Gayathry S - MITS

**Hosted Project Link:** 

https://sage-website-pcos.onrender.com/
https://sage-chi-dun.vercel.app/
---

## Project Description

Sage is a web-based health and community platform built exclusively for women living with PCOS. It combines personalized health guidance with a safe community, helping women understand their body, track symptoms, and connect with others.

---

## The Problem

* PCOS affects 1 in 10 women worldwide.
* Diagnosis often takes 7-10 years due to dismissed symptoms.
* Generic online advice is confusing and contradictory.
* Women feel alone and unheard.
* Existing apps do not combine tracking with community support.

---

## The Solution

Sage provides:

* Personalized symptom explanations using Groq/Sanity RAG queries
* Inflammation diary with personalized scores
* Community Story Wall
* Matching with similar users
* Event board with PCOS-focused events

---

## Technical Details

Frontend: Next.js, Tailwind CSS
Backend: Next.js API routes
Database: Firebase (Firestore + Auth)
AI/RAG: Groq/Sanity
Charts: Recharts
Deployment: Vercel

**Libraries/Tools Used:**

* @sanity/client (groq api )
* Firebase SDK
* Next.js, React
* Recharts

---

## Features

* AI Symptom Explainer (via Groq/Sanity)
* Inflammation Diary with daily logs and scores
* Connect with Cysters (matching users with similar profiles)
* Story Wall (user-generated posts and experiences)
* Events Board (PCOS-focused events, webinars, workshops)

---

## Implementation

### Software Installation

1. Clone the repo
2. Run `npm install`
3. Set environment variables in `.env.local` (Firebase and Sanity keys)
4. Run `npm run dev`

---

## Project Documentation

### Screenshots

<img width="1847" height="920" alt="image (5)" src="https://github.com/user-attachments/assets/35d6db05-e188-4cbe-a4d8-f8fe31b272a9" />

<img width="1852" height="922" alt="image (4)" src="https://github.com/user-attachments/assets/7d65d3cd-b1bd-47ae-80f6-da3bafc984f4" />

<img width="1846" height="910" alt="image (3)" src="https://github.com/user-attachments/assets/2dd92c5e-02f6-4043-9740-013ed5aac472" />

<img width="1854" height="876" alt="image (2)" src="https://github.com/user-attachments/assets/59f3e039-b530-43e7-890e-65645e11b7b1" />

<img width="1840" height="895" alt="image (1)" src="https://github.com/user-attachments/assets/267af975-93ec-4868-95f8-4f17c3e51ba9" />


### System Architecture

* Frontend sends API requests to Next.js backend
* Backend queries Firebase and Groq/Sanity dataset
* Groq/Sanity returns dataset-driven answers for symptoms, matching, and events
* Responses displayed in UI

---

## API Documentation

**Base URL:** [http://localhost:3000/api](http://localhost:3000/api)

**POST /api/ai-explainer**

* Request Body: `{ "question": "PCOS and fertility"
 }`
* Response: `{ "answer": "PCOS can affect ovulation, making it harder to get pregnant, but with treatment and lifestyle changes, many women can conceive....[dataset-guided" }`

**POST /api/inflammation**

* Request Body: `{ "question": "inflammation" }`
* Response: `{ "answer": "Inflammation is the body’s response to injury or infection... [dataset-guided]" }`

**POST /api/matching**

* Request Body: `{ "question": "matching" }`
* Response: `{ "answer": "Matching helps pair users with the right support... [dataset-guided]" }`

**POST /api/events**

* Request Body: `{ "question": "event" }`
* Response: `{ "answer": "Upcoming events are posted monthly on our site... [dataset-guided]" }`

---

## AI Tools Used

* Groq/Sanity RAG backend for querying PCOS content dataset
* Human contributions: dataset curation, UI design, backend integration

---

## Team Contributions

* Member 1: Frontend development, UI/UX design
* Member 2: Backend, API integration, Groq dataset curation

---


