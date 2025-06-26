Here's a README file for your "The Wild Oasis" project, incorporating details from the provided GitHub repository and your deployment information:

# The Wild Oasis

The Wild Oasis is a full-featured internal management application designed for hotel employees to efficiently handle bookings, cabins, and guests. This project showcases a modern web development stack and robust backend integration to streamline hotel operations with an intuitive user interface.

## Live Demos

You can explore the live deployment of The Wild Oasis here:

  * **Netlify Deployment:** [The Wild Oasis (Netlify)](https://thewildoasisbyamin.netlify.app/)
  * **Vercel Deployment:** [The Wild Oasis (Vercel)](https://the-wild-oasis-opal-iota.vercel.app/login)

## Key Features

  * **Authentication:** Secure login for hotel employees, with new user sign-up available only within the application. Employees can manage their profiles, including avatar uploads and password changes.
  * **Cabins Management:** View, create, update, and delete cabin records with details such as photos, names, capacities, prices, and discounts.
  * **Bookings Management:** Comprehensive overview and management of hotel bookings, with filtering options by status ("unconfirmed," "checked-in," "checked-out").
  * **Check-In/Check-Out:** Simple interface for checking guests in and out, with payment confirmation and an option to add breakfast for the entire stay during check-in.
  * **Guest Management:** Store and manage guest details including full name, email, national ID, nationality, and country flag.
  * **Dashboard:** An insightful dashboard displaying daily check-ins/check-outs, recent bookings, sales, occupancy rates, and visual charts for sales and stay durations.
  * **Settings:** Configure global application settings such as breakfast price, minimum/maximum booking nights, and maximum guests per booking.
  * **Dark Mode:** A fully functional dark mode for a customizable user experience.

## Technologies Used

  * **React:** For building the user interface with a component-based approach.
  * **Supabase:** Provides backend services including database, authentication, and real-time data updates.
  * **React Query:** For efficient remote state management and data fetching.
  * **React Router:** For advanced client-side routing with data loading capabilities.
  * **Styled Components:** For writing CSS-in-JS, enabling scalable and maintainable styling, including dark mode implementation.
  * **Vite:** As a fast build tool and development server.
  * **React Hook Form:** For streamlined form management and validation.
  * **Recharts:** For creating interactive data visualizations and charts on the dashboard.
  * **date-fns:** A utility library for handling dates and times.
  * **React Icons & React Hot Toast:** For UI enhancements, notifications, and icons.

## Setup Instructions

To get a local copy up and running, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/amin-kian/The-Wild-Oasis.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd The-Wild-Oasis
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Set up environment variables:**
    Create a `.env` file in the root directory of the project and configure your Supabase credentials. Refer to `.env.example` for the required variables.
5.  **Start the development server:**
    ```bash
    npm run dev
    ```
6.  **Open in browser:**
    Access the application at `http://localhost:3000` in your web browser.

## Learnings

This project served as a deep dive into several advanced React and web development concepts, including:

  * **Authentication and Authorization:** Implementing secure user roles for hotel employees using Supabase.
  * **Real-time Functionality:** Leveraging Supabase's real-time capabilities for dynamic data updates across the application.
  * **State Management and Data Fetching:** Efficiently managing application state and data flow with React Query.
  * **Complex UI Patterns:** Building reusable and maintainable UI components using patterns like Compound Component Pattern and Higher-Order Components (HOC).
  * **Responsive and Adaptive Design:** Creating a responsive user interface with Styled Components that adapts well to various screen sizes.
  * **Data Visualization:** Utilizing Recharts to present meaningful statistical data effectively.

## Author

  * **Amin Kian**
      * [GitHub](https://www.google.com/search?q=https://github.com/amin-kian)

## Acknowledgments

This application was developed as part of a comprehensive Udemy course by Jonas Schmedtmann. Special thanks to Jonas for his excellent teaching and guidance throughout the development process.
