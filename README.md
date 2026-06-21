# DevDash - Typed Async Dashboard

## 📖 Description
**DevDash** is a minimal, single-page dashboard application built with vanilla TypeScript and Vite. It demonstrates advanced TypeScript capabilities and asynchronous JavaScript operations by fetching data from a public API. The core focus of this project is to ensure type safety, robust error handling, non-blocking asynchronous data loading, and clean module architecture without relying on UI frameworks like React, Vue, or Angular.

**Demo Link:** [Insert your deployed link here - e.g., GitHub Pages, Netlify, Vercel]

## 📸 Screenshots
![DevDash App Screenshot](./screenshot.png) 
*(Note: Replace `./screenshot.png` with the actual path to your screenshot)*

## 🚀 Local Run/Build Instructions
This project uses [Vite](https://vitejs.dev/) for fast development and building.

**Prerequisites:**
- Node.js (LTS recommended)

**Installation & Running:**
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd ajt-devdash-<yourname>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## ✨ Completed Features & Evaluation Tier

### Pass Tier (Foundation)
- [x] Project compiles with `"strict": true` and has zero type errors.
- [x] Domain data is modeled with proper `interface` types (no `any` used for fetched data).
- [x] Fetches and renders a list of items using `async/await`.
- [x] Functions and parameters are strictly type-annotated.
- [x] Implements robust `try/catch` error handling with a visible UI error state.
- [x] Includes a Detail View that shows a single item by its `id`.

### Good Tier (Intermediate Techniques)
- [x] Search and filter functionalities implemented using Higher-Order Functions (`map`, `filter`).
- [x] A reusable **generic** fetch helper function (`fetchJson<T>`) handles all API calls and checks `res.ok`.
- [x] Uses `Promise.all` to load two or more resources in parallel (e.g., Products and Categories) to prevent waterfall delays.
- [x] Application state is modeled with a union/literal type.

### Excellent Tier (Advanced Techniques)
- [ ] **Discriminated Union:** Application state is modeled as a discriminated union (`idle` | `loading` | `success` | `error`) and exhaustively narrowed in the render logic.
- [ ] **Utility Types:** `Pick` and `Partial` are used meaningfully to define specific payload models (e.g., `ProductPreview`, `ProductUpdate`).
- [ ] **Closure / Optimization:** A custom `debounce` function (closure) is applied to the search input to limit function calls and optimize performance.
- [x] Clean module architecture: logic is split by responsibility (`api.ts`, `types.ts`, `state.ts`, `utils.ts`, `ui.ts`).
```

---

### 2. Important Notes Before Submission

Before submitting your final assignment, make sure to verify the following steps:

1. **Deployment URL:** Replace `[Insert your deployed link here...]` in the README with your actual deployed URL from GitHub Pages, Netlify, or Vercel.
2. **Repository Naming:** Ensure your source code is pushed to a **public** GitHub repository named exactly `ajt-devdash-<yourname>`.
3. **Application Screenshot:** Take a screenshot of your working application, save it as `screenshot.png` in the root folder, so it displays correctly in your README.
4. **Academic Integrity & Defense (Viva):** Prepare for a short oral defense session. The instructor may ask you to explain any code segment, particularly generics, narrowing branches, or async flows. If you cannot explain the code you submitted, it will result in point deductions or a zero for that section.