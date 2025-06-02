## 🌐 Deploying a CRA App to GitHub Pages

To deploy your **Create React App** project to GitHub Pages, follow these steps:

### 1. Install `gh-pages`

```bash
npm install --save-dev gh-pages
```

### 2. Set the `homepage` in `package.json`

This tells GitHub Pages the base URL of your app:

```json
"homepage": "https://{your-username}.github.io/{your-repo-name}"
```

Replace `{your-username}` and `{your-repo-name}` with your actual GitHub details.

### 3. Add Deployment Scripts

Update the `scripts` section in `package.json`:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

> By default, CRA outputs the production build to the `build/` directory.

### 4. Push Your Project to GitHub

If you haven’t already:

```bash
git init
git remote add origin https://github.com/{your-username}/{your-repo-name}.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 5. Build and Deploy

```bash
npm run deploy
```

This will:

* Build the app
* Push the build output to the `gh-pages` branch

---

## 🛠 Tech Stack

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Create React App](https://create-react-app.dev/)
* [GitHub Pages](https://pages.github.com/)
* [gh-pages](https://www.npmjs.com/package/gh-pages)

---

## 🔗 Live Site

> Once deployed, your portfolio will be available at:

```
https://{your-username}.github.io/{your-repo-name}/
```

You can verify or configure the link under your GitHub repository’s **Settings → Pages**.


## 📦 Local Development

```bash
npm install
npm start
```

Happy deploying 🚀

