# 🌐 abhi.wtf — Personal Portfolio

This is the source code for my personal portfolio website [**abhi.wtf**](https://abhi.wtf), built to showcase my projects, write technical blogs, and connect with potential collaborators, companies, and communities.

The site is fast, functional, and developer-friendly — combining aesthetics with utility.

---

## 🚀 Features

- ✨ Beautiful interactive landing section with spotlight and dock
- 📖 About section with soft spotlight & animation
- 🧠 Projects section with 3D tilt, animated tooltips, and responsive cards
- 📝 Blog section powered by Hashnode GraphQL API
- 📬 Contact form with custom Nodemailer backend (secure emails)
- 📅 Book-a-meeting system with timezone + platform selector (Google Meet / Phone)
- 💬 Public Guestbook where users can sign in and leave a message
- ⚡ Blazing fast with good Lighthouse scores
- 🌙 Dark/light theme with system preference
- 🛠️ Modular & reusable components for easy updates

---

## 🧰 Tech Stack

| Layer       | Technology                                                                 |
|-------------|-----------------------------------------------------------------------------|
| **Frontend**| [Next.js 15](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/) |
| **UI / UX** | [shadcn/ui](https://ui.shadcn.com/),[aceternity ui](https://ui.aceternity.com/), [lucide-react](https://lucide.dev/), [Framer Motion](https://www.framer.com/motion/) |
| **Backend** | Custom Next.js API routes for emailing, meeting booking                    |
| **Emailing**| [Nodemailer](https://nodemailer.com/)                                      |
| **Blog**    | [Hashnode GraphQL API](https://hashnode.com)                              |
| **Auth**    | [nextauth.dev](https://next-auth.js.org) (used in Guestbook)                         |
| **Storage** | [PostgreSQL DB](https://neon.tech) (for guestbook entries)                   |
| **Deployment** | [Vercel](https://vercel.com)                                            |

---

## 📁 Folder Structure


```
├── app/ # Route handlers for Next.js 14 app router
│ ├── blogs/ # Blog listing page
│ ├── contact/ # Contact page with form
│ ├── guestbook/ # Guestbook page (with Nextauth + PostgreSQL DB)
│ ├── meeting/ # Booking system UI
│ └── api/ # Custom backend endpoints (email, guestbook etc.)
├── components/ # All UI components (landing, project card, blog etc.)
│ ├── Blog/ # Blog cards, skeletons, blog hooks
│ ├── Project/ # Project cards, skeletons
│ ├── Contact/ # Contact form & success display
│ └── Shared/ # Navbar, Footer, Dock, Spotlight etc.
├── hooks/ # Custom React hooks (e.g. useHashnodePosts)
├── lib/ # Utility functions (e.g. email sender, validators)
├── public/ # Static assets
├── styles/ # Tailwind + global styles
└── README.md
```


---

## 🔌 Integrations & API Details

### 🔗 Blog (Hashnode)

- Integrated via GraphQL query to `https://gql.hashnode.com`
- Queries blog posts from `blogs.abhi.wtf` and fetches:
  - Title, slug, cover image, brief, published date, read time

### 📬 Contact Form

- Custom-built using `Nodemailer` via `/api/sendEmail`
- Secure form with:
  - Name, email, subject, message
- Shows success/failure state

### 📅 Meeting Booking

- Fully customizable meeting scheduler:
  - User selects date, time, timezone, platform (Meet/Call)
  - Sends meeting request to your email using `Nodemailer`
- Future-ready: can be connected to Calendly API or Google Calendar

### 💬 Guestbook

- Auth via Nextauth
- Messages stored in PostgreSQL db
- Displays recent guest messages with avatars

---

## 🧑‍💻 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
bun install  # or bun install / yarn

# Run
bun dev
```

## 🎯 Future Roadmap

*  Blog search with filters (tags, category, full text)
*  Project filter by tech stack
*  Add RSS feed and sitemap
*  Newsletter integration
*  GitHub contributions heatmap

## 📬 Connect with Me

* 🌍 Website: abhi.wtf
* 🐦 Twitter: @abhi__br
* 💼 LinkedIn: in/abhi-br
* 📧 abhishek.br.work@gmail.com


## 📝 License

This project is licensed under the [MIT License](./LICENSE).

🙌 Acknowledgments

* UI/UX inspo from modern dev portfolios
* Hashnode for blogging support
* Shadcn, Aceternity & Tailwind community
* You — for reading this ❤️

## ⭐️ Show your support
### If you liked this portfolio or learned something from it, give it a star — it helps me a lot!

## 🌟 Star this repo