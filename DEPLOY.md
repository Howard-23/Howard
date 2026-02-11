# Deployment Guide

This portfolio is ready for deployment to Vercel! Follow these simple steps:

## Quick Deploy to Vercel

### Option 1: One-Click Deploy (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Push your code to GitHub
2. Click the "Deploy with Vercel" button above
3. Select your repository
4. Click "Deploy"

That's it! Your portfolio will be live in minutes.

### Option 2: Manual Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

### Option 3: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

## Build Configuration

The project is configured for static export with the following settings in `next.config.ts`:

```typescript
output: "export"      // Generates static HTML files
images.unoptimized   // Required for static export
```

Build output goes to the `out/` folder by default.

## Environment Variables

No environment variables are required for basic deployment. The contact form uses Formspree which is already configured.

## Pre-Deployment Checklist

Before deploying, make sure:

- [ ] `npm run build` completes without errors locally
- [ ] All images are in the `public/` folder
- [ ] The `out/` folder is generated after build
- [ ] Your `profile.jpg` is in the `public/` folder
- [ ] Your `resume.pdf` is in the `public/` folder (if you want download functionality)

## Testing Build Locally

```bash
npm run build
```

Then check the `out/` folder for the generated static files.

## Troubleshooting

### Build Failures

If you encounter build errors:

1. Delete `.next` and `out` folders:
   ```bash
   rm -rf .next out
   ```

2. Reinstall dependencies:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. Run build again:
   ```bash
   npm run build
   ```

### Common Issues

- **Images not showing**: Make sure images are in the `public/` folder
- **PDF download not working**: Ensure `resume.pdf` exists in `public/`
- **Styles not loading**: The project uses CSS variables; check `globals.css`

## After Deployment

Once deployed, you can:

1. **Set up a custom domain** in Vercel dashboard
2. **Enable Analytics** (already included via `@vercel/analytics`)
3. **Enable Speed Insights** for performance monitoring

## Updating Your Portfolio

After making changes:

1. Commit and push to GitHub (if using Git integration)
2. Vercel will automatically redeploy
3. Or run `vercel --prod` again for manual deployment

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
