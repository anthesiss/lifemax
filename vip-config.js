// ============================================================
// LifeMax.in — VIP Configuration
// ------------------------------------------------------------
// Paste your real Stripe Payment Link URL below once you have it.
// This is the ONLY place it needs to be set — both the "Get VIP"
// button in the header (auth-ui.js) and the VIP sales page
// (vip-page.js) import it from here.
//
// In Stripe's Payment Link settings, set the "After payment"
// confirmation page to redirect to:
//   https://lifemax.in/vip-success.html
// That page is what actually grants VIP — reaching it is only
// possible by completing checkout via the link below.
// ============================================================

export const STRIPE_PAYMENT_LINK_URL = "PASTE_YOUR_STRIPE_PAYMENT_LINK_HERE";
