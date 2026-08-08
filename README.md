<img width="1042" height="626" alt="steps3" src="https://github.com/user-attachments/assets/59c6c32e-813e-4935-bde5-a91da5c0fdc3" /># ✈️ Bilito — Figma Front-End Practice

A responsive front-end implementation of two pages from a travel website UI designed in **Figma**.

This project was created as a front-end practice project with a focus on translating a visual design into responsive web pages using **HTML, CSS, and Vanilla JavaScript**.

> **Note:** This is a UI implementation exercise, not a complete flight booking website. Only two pages from the original design were implemented.

---

## 📌 Pages

The project currently includes two pages:

### 🧭 Steps — Flight Booking Guide

A page explaining the main steps of purchasing a flight ticket online:

* Ticket search
* Flight selection
* Seat selection
* Passenger information
* Payment
* Ticket reception

### 📞 Contact Us

A contact page containing:

* About / Contact tabs
* Office contact information
* Embedded Google Maps
* Contact form
* Subject selection
* Responsive layout for mobile devices

---

## ✨ Features

* 🎨 Figma-based UI implementation
* 📱 Responsive design for desktop and mobile
* 🧭 RTL layout for Persian content
* 🔽 Interactive dropdown menu
* 📱 Responsive mobile navigation menu
* 🌑 Mobile navigation overlay
* 📝 Contact form UI
* 🗺️ Embedded Google Maps
* 📐 CSS-based responsive layouts
* ⚡ Vanilla JavaScript interactions
* 🖼️ SVG-based icons and assets

The responsive behavior is handled through CSS media queries, with a dedicated mobile layout below `768px`.

---

## Screenshots

### Steps Page

#### Desktop
<p align="center">
  <img width="800" height="400" alt="steps4" src="https://github.com/user-attachments/assets/5fb0e46b-b82f-4ae3-b917-25191c3704ff" />
  <img width="800" height="400" alt="steps5" src="https://github.com/user-attachments/assets/56c297fd-9e88-47db-ba74-cc022c749a76" />
</p>
<br>


#### Figma Design
<p align="center">
  <img width="800" height="480" alt="steps3" src="https://github.com/user-attachments/assets/50b3aaae-0ec9-4f22-b053-5edcc5b63c74" />
</p>
<br>





#### Mobile

<p align="center">
  <img width="300" height="420" alt="steps1" src="https://github.com/user-attachments/assets/ab4adbc5-1f00-4b37-9f84-54b99d67df76" />
  <img width="300" height="390" alt="steps2" src="https://github.com/user-attachments/assets/f0f0855b-3da1-4c0a-9920-ace04980d70d" />
</p>
<br>

#### Figma Design
<p align="center">
  <img width="300" height="390" alt="steps" src="https://github.com/user-attachments/assets/88bffbf7-1a2e-44a7-b3b6-7e10eaa7a4cc" />
  <img width="300" height="450" alt="Footer" src="https://github.com/user-attachments/assets/7a671f1e-98fd-468d-8761-a266154a2934" />
</p>
<br>


---

### Contact Us Page

#### Desktop

![Contact Desktop](screenshots/desktop-contact.png)

#### Mobile

![Contact Mobile](screenshots/mobile-contact.png)

---

##  Design

The pages were implemented based on a **Figma UI design of Bilito**.

The goal of the project was to practice converting a visual design into structured and responsive HTML/CSS layouts while adding basic interactions with Vanilla JavaScript.

---

## Responsive Design

The project includes separate responsive styles for smaller screens.

On mobile devices:

* Desktop navigation is replaced with a mobile menu.
* A menu overlay is displayed when the navigation is opened.
* Footer content is rearranged for smaller screens.
* Contact information and form elements adapt to the mobile layout.
* Typography and spacing are adjusted for smaller displays.

---

## JavaScript Functionality

JavaScript is mainly used for navigation interactions:

* Opening and closing the desktop dropdown menu
* Opening and closing the mobile navigation
* Switching the mobile menu icon
* Displaying and hiding the navigation overlay

---

## Running the Project

No build tools or package installation are required.

Simply clone the repository:

```bash
git clone https://github.com/USERNAME/bilito-figma-frontend.git
```

Then open either HTML file in your browser:

```text
steps.html
```

or

```text
contact_us.html
```

For the best development experience, the project can also be opened using **VS Code Live Server**.
