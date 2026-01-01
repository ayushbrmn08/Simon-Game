# 🎮 Simon Game

A modern, responsive implementation of the classic **Simon Memory Game**, built using **HTML, CSS, JavaScript, jQuery, and Bootstrap**.  
Test your memory by following an ever-growing sequence of colors — how far can you go?

---

## 🚀 Live Demo

👉 https://ayushbrmn08.github.io/Simon-Game/

---

## 📸 Screenshot

<img width="2100" height="1425" alt="image" src="https://github.com/user-attachments/assets/fc6eebac-45fb-4f50-801a-1b38e7f99859" />


## 📌 Features

- 🎯 **Classic Simon Gameplay**
  - Follow and repeat the randomly generated color sequence
  - Difficulty increases as the game progresses

- 📈 **High Score Tracking**
  - Stores the highest level achieved using **LocalStorage**
  - High score persists even after page reload

- 🎵 **Sound Effects**
  - Unique sound for each color button
  - Game-over sound feedback

- 💡 **Responsive Design**
  - Fully responsive layout for desktop, tablet, and mobile
  - Adaptive button sizes and layout using CSS media queries

- 🖱️ **Keyboard & Button Controls**
  - Start the game using any key (desktop)
  - Mobile-friendly **Start Button**

- ⚡ **Smooth Animations**
  - Button flash animations
  - Visual feedback for correct and wrong inputs

---

## 🛠️ Technologies Used

- **HTML5** – Structure & semantic layout  
- **CSS3** – Styling, animations & responsiveness  
- **JavaScript (ES5)** – Game logic and state handling  
- **jQuery** – DOM manipulation, animations & event handling  
- **Bootstrap 5** – Responsive grid system  
- **LocalStorage API** – High score persistence  
- **Audio API** – Sound playback control  

---

## 🧠 Game Logic Overview

1. Game starts on keypress or button click  
2. A random color is added to the pattern each level  
3. Pattern is displayed with animation and sound  
4. User inputs are checked step-by-step  
5. Wrong input → Game Over → High score update  
6. Correct sequence → Level increases  

---

## ▶️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Simon-Game.git
