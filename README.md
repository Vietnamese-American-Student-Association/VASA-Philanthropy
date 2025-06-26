# VASA Philanthropy Website

A Next.js website for the UCF Vietnamese American Student Association (VASA) highlighting their philanthropy initiatives, officers, and organizational information.

## Project Overview

This website serves as the online presence for VASA at UCF, with a focus on:

- Showcasing philanthropy efforts and history
- Introducing board members and officers
- Sharing organizational information
- Providing ways to donate and contribute

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean design with the VASA branding colors (yellow/gold theme)
- **Multiple Sections**:
  - Officers page with toggleable Executive and General Board views
  - Philanthropy page highlighting initiatives and history
  - About page with organization information
  - Donation options

## 🛠️ Technology Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: CSS Modules and TailwindCSS
- **UI Components**: React 19.0.0
- **Icons**: react-icons

## 🏗️ Project Structure

```
app/
├── components/            # Shared components
├── globals.css           # Global styles
├── officers/             # Officers section
│   ├── components/       # Officer-specific components
│   │   ├── BoardToggle.tsx
│   │   ├── OfficerCard.tsx
│   │   └── OfficersBoard.tsx
│   ├── layout.tsx
│   └── page.tsx
├── philanthropy/         # Philanthropy section
│   ├── components/       # Philanthropy-specific components
│   │   ├── BeneficiarySection/
│   │   ├── ContributionGallery.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── HistorySection.tsx
│   │   └── IntroSection.tsx
│   └── page.tsx
└── layout.tsx            # Root layout
```

## 📝 Component Organization

The project follows a feature-based organization:
- **Shared components** in `/app/components`
- **Feature-specific components** in their respective feature folders
- **CSS Modules** for component-specific styling

## Contributors

- VASA UCF Web Development Team
- Contact: vasaproject407@gmail.com

## Social Media

- Instagram: @VASAUCF
- Facebook: Vasa
- Discord: VASA UCF
