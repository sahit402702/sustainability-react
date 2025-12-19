# Node.js Upgrade Instructions

## Current Status

- **Current Node Version**: v15.4.0 ❌
- **Required Node Version**: v18.0.0 or higher ✅
- **Issue**: Vite 5.4 requires modern JavaScript features not available in Node 15

## Why You're Seeing This Error

```
SyntaxError: Invalid regular expression flags
```

This error occurs because Node 15 doesn't support the regex syntax used by Vite 5.4.

## How to Upgrade Node.js

### Option 1: Using Homebrew (Recommended for macOS)

```bash
# Install or upgrade to Node 18
brew install node@18

# Link it
brew link node@18

# Verify the installation
node --version  # Should show v18.x.x or higher
```

### Option 2: Using NVM (Node Version Manager)

```bash
# Install nvm if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Close and reopen your terminal, then:
nvm install 18
nvm use 18
nvm alias default 18

# Verify
node --version
```

### Option 3: Download from Official Website

1. Visit: https://nodejs.org/
2. Download the LTS version (v18 or higher)
3. Run the installer
4. Verify with `node --version`

## After Upgrading Node.js

Once you have Node v18+, run these commands:

```bash
# Navigate to project
cd /Users/402702/Desktop/sustainability-react

# Remove old dependencies
rm -rf node_modules package-lock.json

# Reinstall with new Node version
npm install

# Start the development server
npm run dev
```

## Expected Result

```
VITE v5.4.x ready in xxx ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
➜  press h + enter to show help
```

## Verify Everything Works

1. Open http://localhost:3000/ in your browser
2. You should see the new Indigo & Emerald design
3. Check all pages: Home, Sustainability, Reporting, Case Studies, FAQs

## Quick Verification Checklist

- [ ] Node version is v18 or higher
- [ ] `npm install` completed without errors
- [ ] `npm run dev` starts successfully
- [ ] Application loads at http://localhost:3000/
- [ ] New indigo/emerald colors are visible
- [ ] All pages load without errors
- [ ] Responsive design works on mobile view

## Troubleshooting

### If `brew install node@18` fails:

```bash
# Update Homebrew first
brew update

# Try again
brew install node@18
```

### If you get permission errors:

```bash
# Don't use sudo with npm! Instead, fix npm permissions:
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```

### If the app still doesn't work after upgrading:

```bash
# Clear all caches
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm run dev
```

## Need More Help?

Check these files for design details:

- `DESIGN_SYSTEM.md` - Complete design specifications
- `IMPLEMENTATION_SUMMARY.md` - What was changed
- `COLOR_REFERENCE.md` - Color palette guide
- `MIGRATION_GUIDE.md` - How to update custom components

---

**All SCSS errors have been fixed!** ✅  
The only remaining issue is the Node.js version.
