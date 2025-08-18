<h3 align="center">YC - Startup Directory Platform</h3>

## ⚠️ Note

This project was implemented based on a tutorial video on YouTube from JS Mastery [Next.js 15 Crash Course | Build and Deploy a Production-Ready Full Stack App](https://www.youtube.com/watch?v=Zq5fmkH0T78).

## Table of Contents

1. [Introduction](#introduction)
2. [Demo](#demo)
3. [Tech Stack](#tech-stack)
4. [Features](#features)
5. [Quick Start](#quick-start)
6. [What I learned](#learn)
7. [Implementation Notes](#note)
8. [Missing Features](#miss)

## <a name="introduction">Introduction</a>

Backend API for a subscription management service that sends email reminders to users every notice period before a subscription expires.
This backend also implements user registration, authentication with JWT, rate limiting, and bot protection.

The reason I wanted to follow this tutorial is that I want to try to learn more about Express.js and MongoDB.

## <a name="demo">Demo</a>

### Auth

#### Sign up

<img src="public/readme/sign-up.png" alt="Sign up" />

#### Sign in

<img src="public/readme/sign-in.png" alt="Sign in" />

## <a name="tech-stack">Tech Stack</a>

- Tailwind CSS v4 - as a CSS framework
- React v19 - as a JS library
- Next.js v15 - as a React framework
- Auth.js v5 (known as NextAuth.js) - as an authentication tool
- Github Oauth App - as an authentication provider
- Sanity - as a headless CMS
- ShadCN - as a UI component library
- TypeScript - as a type-checking tool
- Sentry - as an error tracking tool and performance monitoring tool

## <a name="features">Features</a>

- GitHub Authentication: Allows users to log in easily using their GitHub account.

- Views Counter: Tracks the number of views for each pitch instead of an upvote system.

- Search: Search functionality to load and view pitches efficiently.

- Profile Page: Users can view the list of pitches they've submitted.

- Live Content API: Displays the latest startup ideas dynamically on the homepage using Sanity's Content API.

- Pitch Submission: Users can submit startup ideas, including title, description, category, and multimedia links ( image or video).

- View Pitches: Browse through submitted ideas with filtering options by category.

- Pitch Details Page: Click on any pitch to view its details, with multimedia and description displayed.

- Editor Picks: Admins can highlight top startup ideas using the "Editor Picks" feature managed via Sanity Studio.

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Git
- Node.js
- npm

### Cloning the Repository

```bash
git clone https://github.com/bank8426/try-next-nextauth-tailwind-sanity-sentry.git
cd try-next-nextauth-tailwind-sanity-sentry
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

1. Create a new file named `.env.development.local` and copy the content inside `.env.example`
2. Replace the placeholder values with your actual credentials

```env
AUTH_SECRET= # Added by `npx auth`. Read more: https://cli.authjs.dev
AUTH_GITHUB_ID= #From Github Oauth app
AUTH_GITHUB_SECRET= #From Github Oauth app
NEXT_PUBLIC_SANITY_PROJECT_ID= #From Sanity
NEXT_PUBLIC_SANITY_DATASET= #From Sanity
NEXT_PUBLIC_SANITY_API_VERSION="vX" #latest version
SANITY_WRITE_TOKEN= #From Sanity
SENTRY_AUTH_TOKEN= #From Sentry
```

**Running the Project**

```bash
npm run dev
```

Your server will run on [http://localhost:3000](http://localhost:3000/)

<!-- TODO -->

## <a name="learn">What I learned</a>

- React
  - submit form server action - in `form` element, React modified `action` prop. Make it receive a callback function that will be executed on server side when form submitted. This callback function must start with `"use server"` keyword.
    see more [here](https://react.dev/reference/rsc/server-functions)
  - useActionState -

## <a name="note">Implementation Notes</a>

- Tailwind CSS

  - Since the tutorial video is published when `Tailwind CSS v3` still in use, but `Tailwind CSS v4` is out when I try to implement this project, so I need to update the code to match with.
    - `tailwind.config.js` is not needed any more
    - use only one css file `index.css/app.css` instead of multiple css files. But it make me confused since it also has `App.css` file.

## <a name="miss">Missing Features</a>
