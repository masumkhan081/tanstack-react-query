
# React + TypeScript + Vite + tanstack-react-query

This purpose of this repo/project is to implement and understand tanstack-query in practice. Includes typeScript, Vite, and tanstack-react-query 

## Prerequisites

- Node.js (>=18)
- npm or yarn

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/masumkhan081/tanstack-react-query.git
    cd  tanstack-react-query
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

## Running the Application

1.  **Start the JSON server:**

    Open a new terminal and run:

    ```bash
    npx json-server --watch db.json --port 3004
    ```

    (Ensure you have a `db.json` file in the root of your project with the data you want to display. Example `db.json` structure:

    ```json
    {
      "users": [
        {
          "id": 1,
          "name": "Mark Ross",
          "company": "Genco Pura Olive Oil Company",
          "country": { "name": "Portugal", "flag": "pt" },
          "mobile": "(231) 638-1199"
        }
      ]
    }
    ```

    )

2.  **Start the React application:**

    In the original terminal, run:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The application will be available at `http://localhost:5173` (or another port specified by Vite).

## Project Structure

```bash
<project_directory>/
├── public/
├── src/
│ ├── components/
│ │ └── ...
│ ├── App.tsx
│ ├── main.tsx
│ ├── vite-env.d.ts
│ └── ...
├── db.json
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **TypeScript:** Strongly typed programming language that builds on JavaScript.
- **Vite:** Next generation frontend tooling.
- **ag-grid-react:** High-performance data grid for React.
- **json-server:** Mock REST API for prototyping and testing.
