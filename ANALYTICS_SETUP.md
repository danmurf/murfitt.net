# GDPR-Compliant Google Analytics Setup

This site now includes GDPR-compliant Google Analytics with cookie consent management.

## Setting up Google Analytics

1. **Get your GA4 Measurement ID** from Google Analytics dashboard
2. **Update config.yaml** by uncommenting and replacing the placeholder:
   ```yaml
   # Change this line:
   # googleAnalytics: "G-XXXXXXXXXX"
   
   # To your actual measurement ID:
   googleAnalytics: "G-YOUR-ACTUAL-ID"
   ```

## Features Implemented

### ✅ Cookie Consent Banner
- Appears on first visit for new users
- Clear "Accept Analytics" and "Decline" options
- Links to privacy policy for more information
- Mobile-responsive design

### ✅ Google Consent Mode v2
- Sets consent to "denied" by default
- Only enables analytics after explicit user consent
- Compliant with GDPR and PECR regulations

### ✅ Consent Management
- "Cookie Settings" link in footer for changing preferences
- Users can withdraw consent at any time
- Automatic cookie cleanup when consent is withdrawn
- Preferences stored in localStorage

### ✅ Updated Privacy Policy
- Comprehensive Google Analytics section
- Lists all cookies used (_ga, _ga_*, _gid)
- Explains data collection, legal basis, retention
- Details user rights under GDPR
- Links to Google's opt-out tools

## Testing Checklist

- [ ] No analytics cookies set before consent
- [ ] Analytics only starts after "Accept Analytics" is clicked
- [ ] "Decline" properly prevents analytics tracking
- [ ] "Cookie Settings" allows changing preferences
- [ ] Consent preferences persist across sessions
- [ ] Cookie cleanup works when consent is withdrawn
- [ ] Banner is mobile-responsive
- [ ] Privacy policy contains all required information

## GDPR Compliance

This implementation ensures:
- **Consent is explicit** - Users must actively click "Accept Analytics"
- **Consent is informed** - Clear explanation and link to privacy policy
- **Consent is revocable** - Cookie Settings allows withdrawal
- **Data minimization** - Only analytics data collected, no ads/personalization
- **Transparency** - Full disclosure in privacy policy

## Files Modified

- `content/privacy.md` - Updated privacy policy
- `layouts/partials/extend_head.html` - Google Consent Mode v2 implementation
- `layouts/partials/extend_footer.html` - Cookie consent banner and management
- `config.yaml` - Google Analytics configuration (placeholder)

## Next Steps

1. Replace placeholder GA4 measurement ID with your actual ID
2. Test the implementation on your live site
3. Monitor Google Analytics to ensure data is being collected after consent
4. Consider adding the measurement ID as a GitHub Actions secret for automated deployment