# ReelIt - Coming Soon Page

A modern, responsive coming soon page for ReelIt, featuring beautiful animations, countdown timer, and email signup functionality.

## Features

- 🎬 **Modern Design**: Beautiful gradient background with floating animations
- ⏰ **Countdown Timer**: Dynamic countdown to launch date
- 📧 **Email Signup**: Functional email collection with validation
- 📱 **Responsive**: Fully responsive design for all devices
- ✨ **Animations**: Smooth CSS animations and transitions
- 🎯 **Interactive**: Hover effects and interactive elements
- ♿ **Accessible**: Keyboard navigation and screen reader friendly

## Files Structure

```
/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Getting Started

1. Open `index.html` in your web browser
2. The page will automatically start the countdown timer
3. Users can enter their email to join the waitlist
4. All animations and interactions are handled automatically

## Customization

### Launch Date
To change the launch date, modify the `launchDate` variable in `script.js`:

```javascript
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30); // Change 30 to your desired days
```

### Colors and Branding
Update the CSS custom properties in `styles.css` to match your brand:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #ffd700;
}
```

### Email Integration
Replace the `simulateEmailSubmission` function in `script.js` with your actual email service integration (e.g., Mailchimp, ConvertKit, etc.).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized CSS with efficient animations
- Minimal JavaScript footprint
- Fast loading with external CDN resources
- Responsive images and scalable design

## License

This project is open source and available under the MIT License.
