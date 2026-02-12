#!/bin/bash
# Deploy script for GitHub Pages

echo "Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "Build successful!"
    echo "To deploy to GitHub Pages:"
    echo "1. Make sure your repository is on GitHub"
    echo "2. Go to Settings > Pages in your repository"
    echo "3. Select 'GitHub Actions' as the source"
    echo "4. Push your changes to trigger the deployment workflow"
    echo ""
    echo "Or push to main branch to trigger automatic deployment via GitHub Actions"
else
    echo "Build failed. Please check the errors above."
    exit 1
fi