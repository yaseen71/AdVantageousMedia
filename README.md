# AdVantageousMedia - AI Marketing Agency

A high-performance website for a leading AI-driven marketing agency featuring real-time AI consultations and modern UI/UX.

## Features

- **AI Strategy Simulator**: Describe your business and get a custom growth roadmap powered by Google Gemini.
- **Discovery Call Inquiry**: Streamlined inquiry form for booking consultations.
- **Email Notifications**: Automatically sends inquiry details to the agency's email.
- **Modern UI/UX**: Responsive design with dark mode support, built with React and Tailwind CSS.
- **Full-Stack Architecture**: Express backend for secure API handling and email delivery.

## Tech Stack

- **Frontend**: React, Tailwind CSS, Lucide React, Framer Motion
- **Backend**: Node.js, Express, Nodemailer
- **AI**: Google Gemini API (@google/genai)
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/advantageous-media.git
   cd advantageous-media
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your environment variables in `.env`:
   - `GEMINI_API_KEY`: Your Google Gemini API Key.
   - `EMAIL_USER`: Your Gmail address for sending inquiries.
   - `EMAIL_PASS`: Your Gmail App Password.

### Running the App

#### Development

Start the development server (Vite + Express):
```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

#### Production

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## License

This project is licensed under the MIT License.
