# 🚀 Deployment Setup Guide

## Step 1: Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/crownridge-tracker.git
git push -u origin main
```

## Step 2: Deploy Backend to Heroku

```bash
npm install -g heroku
heroku login
cd backend
heroku create crownridge-api-prod
git push heroku main
```

## Step 3: Deploy Frontend to Vercel

```bash
npm install -g vercel
cd frontend
vercel --prod
```

## Step 4: Connect Them

Add VITE_API_URL environment variable in Vercel to your Heroku backend URL.

## Links After Deployment

- Frontend: https://YOUR_VERCEL_URL
- Backend: https://YOUR_HEROKU_URL
- GitHub: https://github.com/YOUR_USERNAME/crownridge-tracker

See DEPLOYMENT.md for complete guide.
