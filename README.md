# My Surge Website

A beautiful, responsive static website deployed on Surge.

## Features

- 🚀 **Fast & Reliable** - Deployed on Surge for lightning-fast performance
- 📱 **Responsive Design** - Looks great on all devices
- 🎨 **Modern UI** - Clean, modern design with smooth animations
- 📝 **Contact Form** - Interactive contact form with validation
- 🎯 **Smooth Scrolling** - Smooth navigation between sections

## Files

- `index.html` - Main HTML structure
- `styles.css` - Modern CSS styling with responsive design
- `script.js` - JavaScript for interactivity and animations
- `README.md` - This file

## Deploying to Surge

### Prerequisites

1. Install Node.js (if not already installed)
2. Install Surge globally:
   ```bash
   npm install --global surge
   ```

### Deployment Steps

1. **Navigate to your project directory:**
   ```bash
   cd /path/to/your/project
   ```

2. **Deploy to Surge:**
   ```bash
   surge
   ```

3. **Follow the prompts:**
   - Enter your email address
   - Enter a password (or create an account)
   - Choose a domain name (e.g., `my-awesome-site.surge.sh`)

4. **Your site will be live at:** `https://your-chosen-domain.surge.sh`

### Alternative: Deploy with Custom Domain

If you want to use a custom domain:

1. Deploy first with the basic command:
   ```bash
   surge
   ```

2. Then add your custom domain:
   ```bash
   surge --domain yourdomain.com
   ```

3. Update your DNS settings to point to Surge's servers

## Local Development

To preview your site locally:

1. Open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## Customization

- **Colors**: Modify the CSS variables in `styles.css`
- **Content**: Edit the HTML in `index.html`
- **Functionality**: Add JavaScript features in `script.js`
- **Styling**: Customize the design in `styles.css`

## Surge Features

- **Global CDN**: Your site is served from multiple locations worldwide
- **HTTPS**: Automatic SSL certificate
- **Custom Domains**: Use your own domain name
- **Version Control**: Easy rollbacks and updates
- **Free Tier**: Generous free hosting for static sites

## Support

For more information about Surge, visit: https://surge.sh

---

Built with ❤️ and deployed on Surge 