# Azure Static Web Apps Deployment Guide

This guide will help you deploy the Sustainability React application to Azure Static Web Apps.

## Prerequisites

- Azure account (sign up at https://azure.microsoft.com/free/)
- GitHub account
- GitHub repository with your code

## Deployment Steps

### Step 1: Push Code to GitHub

1. Initialize git repository (if not already done):

```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub

3. Push code to GitHub:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Step 2: Create Azure Static Web App

#### Option A: Using Azure Portal

1. Go to [Azure Portal](https://portal.azure.com)
2. Click "Create a resource"
3. Search for "Static Web App"
4. Click "Create"
5. Fill in the details:

   - **Subscription**: Select your subscription
   - **Resource Group**: Create new or select existing
   - **Name**: sustainability-portal (or your preferred name)
   - **Plan type**: Free (for development/testing)
   - **Region**: Choose closest to your users
   - **Source**: GitHub
   - **Sign in to GitHub** and authorize Azure
   - **Organization**: Your GitHub username
   - **Repository**: sustainability-react
   - **Branch**: main
   - **Build Presets**: React
   - **App location**: `/`
   - **Api location**: (leave empty)
   - **Output location**: `dist`

6. Click "Review + create"
7. Click "Create"

#### Option B: Using Azure CLI

```bash
# Login to Azure
az login

# Create resource group
az group create --name sustainability-rg --location eastus

# Create static web app
az staticwebapp create \
  --name sustainability-portal \
  --resource-group sustainability-rg \
  --source https://github.com/YOUR_USERNAME/YOUR_REPO \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github
```

### Step 3: Configure GitHub Actions Secret

Azure automatically creates a GitHub Actions workflow, but you need to verify the secret:

1. Go to your GitHub repository
2. Click "Settings" > "Secrets and variables" > "Actions"
3. Verify `AZURE_STATIC_WEB_APPS_API_TOKEN` exists
4. If not, get it from Azure Portal:
   - Open your Static Web App resource
   - Click "Manage deployment token"
   - Copy the token
   - Add it as a GitHub secret

### Step 4: Verify Workflow File

Check `.github/workflows/azure-static-web-apps.yml`:

```yaml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          output_location: "dist"
```

### Step 5: Trigger Deployment

Push any change to trigger deployment:

```bash
git add .
git commit -m "Trigger deployment"
git push origin main
```

### Step 6: Monitor Deployment

1. Go to GitHub repository > "Actions" tab
2. Watch the workflow execution
3. Once complete (✓), your app is deployed!

### Step 7: Access Your App

1. Go to Azure Portal
2. Open your Static Web App resource
3. Copy the URL (e.g., `https://wonderful-ocean-123abc.azurestaticapps.net`)
4. Visit the URL in your browser

## Configuration

### Custom Domain

1. In Azure Portal, open your Static Web App
2. Click "Custom domains"
3. Click "Add"
4. Follow the wizard to add your domain
5. Add DNS records as instructed

### Environment Variables

1. In Azure Portal, open your Static Web App
2. Click "Configuration"
3. Add application settings as needed
4. Restart the app

### Routing Configuration

The `staticwebapp.config.json` file handles routing:

```json
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/images/*.{png,jpg,gif,ico,svg}", "/*.{css,scss,js}"]
  },
  "routes": [
    {
      "route": "/*",
      "allowedRoles": ["anonymous", "authenticated"]
    }
  ],
  "responseOverrides": {
    "404": {
      "rewrite": "/index.html",
      "statusCode": 200
    }
  }
}
```

## Monitoring

### View Deployment Logs

1. Azure Portal > Static Web App
2. Click "Deployment history"
3. Click on a deployment to view logs

### Application Insights (Optional)

1. Create Application Insights resource
2. Link to your Static Web App
3. View metrics, logs, and performance data

## Troubleshooting

### Build Fails

- Check Node.js version compatibility
- Verify all dependencies are in `package.json`
- Check GitHub Actions logs for specific errors

### App Not Loading

- Verify `output_location` is set to `dist`
- Check browser console for errors
- Verify `staticwebapp.config.json` routing rules

### Styles Not Loading

- Check SCSS compilation
- Verify Bootstrap imports in `main.jsx`
- Clear browser cache

## Cost Management

### Free Tier Limits

- 100 GB bandwidth per month
- 0.5 GB storage
- Custom domains: 2
- Staging environments: 3

### Monitor Usage

1. Azure Portal > Static Web App
2. Click "Metrics"
3. Monitor bandwidth and storage

## CI/CD Best Practices

### Branch Protection

1. GitHub repository > Settings > Branches
2. Add rule for `main` branch
3. Require pull request reviews
4. Require status checks to pass

### Preview Deployments

Pull requests automatically create preview deployments:

- View at: `https://wonderful-ocean-123abc-preview.azurestaticapps.net`
- Test changes before merging
- Automatically closed when PR is closed

### Deployment Slots

Use staging environments:

```bash
az staticwebapp environment create \
  --name sustainability-portal \
  --resource-group sustainability-rg \
  --environment-name staging
```

## Security

### HTTPS

- Automatic HTTPS with free SSL certificate
- Custom domains also get free SSL

### Authentication (Optional)

Add authentication providers:

```json
{
  "auth": {
    "identityProviders": {
      "azureActiveDirectory": {
        "registration": {
          "clientIdSettingName": "AAD_CLIENT_ID",
          "clientSecretSettingName": "AAD_CLIENT_SECRET"
        }
      }
    }
  }
}
```

## Performance Optimization

### Caching Headers

Configure in `staticwebapp.config.json`:

```json
{
  "routes": [
    {
      "route": "/images/*",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    }
  ]
}
```

### CDN Integration

- Static Web Apps uses Azure CDN by default
- Content automatically distributed globally
- No additional configuration needed

## Useful Commands

```bash
# Build locally
npm run build

# Preview build
npm run preview

# Run tests (if configured)
npm test

# Check for updates
npm outdated

# Update dependencies
npm update
```

## Resources

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/azure/static-web-apps/)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Vite Build Documentation](https://vitejs.dev/guide/build.html)
- [React Router Documentation](https://reactrouter.com/)

## Support

For issues:

1. Check GitHub Actions logs
2. Review Azure deployment logs
3. Check browser console
4. Contact Azure Support

## Next Steps

After deployment:

1. ✅ Configure custom domain
2. ✅ Set up Application Insights
3. ✅ Configure authentication (if needed)
4. ✅ Add environment variables
5. ✅ Set up alerts and monitoring
6. ✅ Configure backup strategy
