# Portfolio – Realsanjeev 2025

> Not a front-end developer, but I keep shipping anyway.

This is my personal portfolio built with **Vite**, **React**, and **TypeScript**. It’s fast, lightweight, and deployed using **GitHub Actions** to **GitHub Pages**.

---

## 🌐 Deploying a Vite App to GitHub Pages

To deploy your Vite project to GitHub Pages, follow these steps:

### 1. Build the Production App

Run the build command to generate the static files:

```bash
npm run build
```

This will create a `dist/` directory containing your production-ready app.

---

### 2. Configure `vite.config.js`

Update your `vite.config.js` to set the correct base path for GitHub Pages:

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/your-repo-name/', // replace with your GitHub repo name
})
```

This ensures the correct asset paths when served from GitHub Pages.

If you're using react-router, make sure to specify the basename in your router configuration:

```jsx
<BrowserRouter basename="your-repo-name">
```
Replace `your-repo-name` with your actual repository name.

---

### 3. Set Up GitHub Actions Workflow

Create a workflow file to automate the deployment:

**Path:** `.github/workflows/deploy.yml`

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

This workflow will:

* Build your app
* Deploy the `dist/` folder to GitHub Pages on every push to `main`

---

### 4. Enable GitHub Pages

Go to your repository's:

**Settings → Pages**

* Set the source to **GitHub Actions** (or to the `gh-pages` branch if created by the workflow).

---

### 5. Access Your Deployed Site

Once deployed, your site will be available at:

```
https://{your-username}.github.io/{your-repo-name}/
```

Make sure to replace `{your-username}` and `{your-repo-name}` accordingly.

---

## 🛠 Tech Stack

* [Vite](https://vitejs.dev/)
* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
- [React Font icons](https://react-icons.github.io/react-icons/)
* [GitHub Actions](https://docs.github.com/en/actions)
* [GitHub Pages](https://pages.github.com/)
* [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)
* [EmailJS](https://www.emailjs.com/) - Contact form functionality

---

## 📧 Contact Form Setup (EmailJS)

The contact form uses **EmailJS** to send emails directly from the frontend. To enable it:

### 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Free tier: **50 emails/month** (sufficient for most portfolios)

### 2. Set Up Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service** → Select your email provider (Gmail, Outlook, etc.)
3. Connect your account and note the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Go to **Email Templates** → **Create New Template**
2. Use these variables in your template:
   ```
   From Name: {{from_name}}
   From Email: {{from_email}}
   Subject: {{subject}}
   Message: {{message}}
   Reply-To: {{reply_to}}
   ```
3. Save and note the **Template ID** (e.g., `template_xyz789`)

### 4. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your credentials in `.env.local`:
   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   ```

3. Get your **Public Key** from **Account** → **API Keys**

### 5. For Deployment (GitHub Actions)

Add environment variables to your GitHub repo:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add these secrets:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`

3. Update `.github/workflows/deploy.yml` to pass these variables during build

---

## 📦 Local Development

```bash
npm install
npm run dev
```

This runs the app locally at [http://localhost:5173](http://localhost:5173) by default.

---

## 📝 Notes

* Make sure the `base` path in `vite.config.js` matches your repo name exactly.
* This setup uses **GitHub Actions** for automated deployment. No need to manually run deploy scripts.
* For custom domains, add a `CNAME` file to the `public/` directory.

