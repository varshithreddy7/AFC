# AFC Website - Production Deployment Guide

## 🚀 Pre-Deployment Checklist

### 1. Environment Configuration
- [ ] Update `.env.production` with actual domain and API URLs
- [ ] Replace `https://your-domain.com` with actual domain in all files
- [ ] Configure analytics IDs (Google Analytics, Tag Manager)
- [ ] Verify all social media URLs are correct
- [ ] Test all contact information and phone numbers

### 2. Security Configuration
- [ ] SSL certificate is properly configured
- [ ] Security headers are enabled (already configured in next.config.ts)
- [ ] HTTPS redirect is working
- [ ] Content Security Policy is configured if needed

### 3. SEO Optimization
- [ ] Sitemap.xml is updated with actual domain
- [ ] Robots.txt is configured properly
- [ ] Meta tags are optimized for all pages
- [ ] Schema markup is properly configured
- [ ] Images have proper alt texts

### 4. Performance Optimization
- [ ] Images are optimized and in WebP/AVIF format
- [ ] Unused dependencies are removed
- [ ] Bundle size is analyzed
- [ ] Lighthouse score is above 90

## 🛠 Build and Deploy Process

### Step 1: Clean and Prepare
```bash
npm run clean
npm ci
npm run type-check
npm run lint
```

### Step 2: Production Build
```bash
npm run build:production
```

### Step 3: Test Production Build Locally
```bash
npm run start:production
# Test at http://localhost:3000
```

### Step 4: Health Check
```bash
npm run health-check
# Should return healthy status
```

## 🌐 Deployment Platforms

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Configure custom domain
4. Enable analytics and monitoring

### Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Configure environment variables

### Traditional Server
1. Build the application: `npm run build`
2. Upload `.next`, `public`, `package.json`, and `package-lock.json`
3. Run `npm ci --production`
4. Start with `npm start`
5. Configure reverse proxy (nginx/Apache)

## 📊 Monitoring and Maintenance

### Health Monitoring
- Monitor `/api/health` endpoint
- Set up alerts for downtime
- Monitor Core Web Vitals
- Track error rates

### Performance Monitoring
- Set up Google Analytics
- Monitor page load times
- Track user interactions
- Monitor server resources

### SEO Monitoring
- Monitor search rankings
- Track organic traffic
- Update sitemap regularly
- Monitor for broken links

## 🔧 Environment Variables to Set

### Required Variables
```env
NEXT_PUBLIC_SITE_URL=https://your-actual-domain.com
NEXT_PUBLIC_API_URL=https://your-backend-api.com
```

### Optional Analytics
```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX
```

## 🚨 Common Issues and Solutions

### Build Failures
- Clear `.next` directory: `npm run clean`
- Update dependencies: `npm update`
- Check TypeScript errors: `npm run type-check`

### Performance Issues
- Optimize images in `/public/images/`
- Implement lazy loading for heavy components
- Enable compression in your server/CDN

### SEO Issues
- Verify meta tags are properly set
- Check sitemap.xml accessibility
- Ensure proper URL structure

## 📈 Post-Deployment Tasks

1. **Domain Configuration**
   - Update all hardcoded URLs to actual domain
   - Configure WWW redirect
   - Set up CDN if needed

2. **SSL Certificate**
   - Install SSL certificate
   - Configure HTTPS redirect
   - Update security headers

3. **Analytics Setup**
   - Add Google Analytics tracking
   - Set up Google Tag Manager
   - Configure goal tracking

4. **Social Media**
   - Update social media links
   - Test social sharing functionality
   - Verify Open Graph tags

5. **Testing**
   - Test all functionality
   - Verify mobile responsiveness
   - Check load times
   - Test contact forms

## 📞 Support and Maintenance

### Regular Maintenance Tasks
- Update dependencies monthly
- Monitor security vulnerabilities
- Update content and images
- Review and update SEO
- Monitor performance metrics

### Emergency Contacts
- Development Team: [Your Contact Info]
- Hosting Support: [Hosting Provider Support]
- Domain Registrar: [Domain Support]

## 🎯 Success Metrics

Track these metrics post-deployment:
- Page load time < 3 seconds
- Lighthouse score > 90
- Mobile usability score > 95
- SEO score > 90
- Uptime > 99.9%

---

**Last Updated:** January 2025
**Version:** 1.0.0
