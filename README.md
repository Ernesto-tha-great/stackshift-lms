# LMS STUDIO

## Overview
The Learning Management System (LMS) is a powerful platform designed to facilitate educative programs by providing a seamless experience for both instructors and learners. This system allows course creators to add various types of content, including video and text-based materials, making it an ideal solution for delivering comprehensive educational .

## Features
- Course Creation: Instructors can easily create new courses and organize them into categories, ensuring a structured learning environment.

- Content Variety: The LMS supports various content types, including video lectures and text-based materials, offering a diverse range of teaching methods.

- User Registration and Authentication: Learners can create accounts and log in securely to access their enrolled courses and track their progress.

- Enrollment and Progress Tracking: Learners can enroll in courses of interest, and the system tracks their progress, providing insights into completed modules and overall course advancement.

- Interactive Assessments: Instructors can design quizzes and assignments to assess learners' knowledge, promoting active engagement and learning.

- Discussion Forums: Each course has its own discussion forum, fostering a collaborative learning environment and enabling learners to interact with peers and instructors.

- Responsive Design: The LMS is built with a responsive design, ensuring a consistent and user-friendly experience across various devices and screen sizes.

## Setup & Intallation

```bash
yarn
```

Run `yarn` or `npm install` to install all the required dependencies to run the dApp.


- To start the dApp, run the following command.

```bash
yarn react-dev
```

## Dependencies

### Default
- [Next.js](https://nextjs.org/) app framework
- [TailwindCSS](https://tailwindcss.com/) for UI


## Architecture

- `/pages` includes the main application components (specifically `index.tsx` and `_app.tsx`)
  - `_app.tsx` includes configuration
  - `index.tsx` is the main page of the application
- `/components` includes components that are rendered in `index.tsx`
- `/public` includes static files
