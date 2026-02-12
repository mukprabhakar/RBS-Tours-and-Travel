# GitHub Pages Deployment Troubleshooting Guide

## Common Deployment Issues and Solutions

### 1. "Get Pages site failed" Error

**Problem**: The GitHub Actions workflow fails with "Get Pages site failed"

**Solution**:
1. Go to your repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Make sure to save the configuration
4. Re-run the workflow

### 2. "HttpError: Not Found" Error

**Problem**: Repository access issues during deployment

**Solution**:
1. Verify GitHub Pages is enabled in repository settings
2. Check that you're using the correct branch (main)
3. Ensure the workflow file is in the correct location: `.github/workflows/deploy.yml`

### 3. Site Not Loading After Successful Deployment

**Problem**: Deployment shows success but site returns 404

**Solution**:
1. Check that your repository name matches the base path in `vite.config.ts`
2. Current configuration expects repository name to be `india-explorer-hub`
3. If your repository has a different name, update the base path in `vite.config.ts`

### 4. CSS/Style Issues

**Problem**: Styles not loading properly on deployed site

**Solution**:
1. Verify the `@import` statements are at the top of CSS files
2. Check the browser console for CSS loading errors
3. Ensure all asset paths are correct in the build

### 5. Form Not Submitting

**Problem**: Contact form not sending data to Formspree

**Solution**:
1. Verify the Formspree endpoint is correct: ``
2. Check that all form fields have proper `name` attributes
3. Ensure the form has `method="POST"` and `action` pointing to the Formspree endpoint

## Step-by-Step Verification Checklist

### Before Deployment:
- [ ] Repository is on GitHub
- [ ] All files are committed and pushed
- [ ] `package.json` dependencies are installed
- [ ] Local build succeeds (`npm run build`)

### GitHub Configuration:
- [ ] Settings → Pages → Source set to "GitHub Actions"
- [ ] Workflow file exists at `.github/workflows/deploy.yml`
- [ ] Repository name matches base path in `vite.config.ts`

### After Deployment:
- [ ] Actions tab shows successful workflow run
- [ ] Pages tab shows published site
- [ ] Site loads without 404 errors
- [ ] All navigation works correctly
- [ ] Contact form submits successfully

## Manual Deployment Alternative

If GitHub Actions continue to fail, you can deploy manually:

1. Build the project:
```bash
npm run build
```

2. Deploy using gh-pages:
```bash
npm run deploy
```

This will create a `gh-pages` branch with the built files.

## Need Help?

If you're still experiencing issues:

1. Check the GitHub Actions logs for detailed error messages
2. Verify your repository settings match the requirements
3. Ensure all configuration files are properly formatted
4. Contact support at rbsharma0064@gmail.com