// ============================================================
// LifeMax.in — VIP Sales Page Controller
// ------------------------------------------------------------
// Wires the "Get VIP Now" button to the real Stripe Payment Link
// (set in vip-config.js), and shows a different state if the
// logged-in user already has VIP.
// ============================================================

import { AuthStore } from "./auth-firebase.js";
import { STRIPE_PAYMENT_LINK_URL } from "./vip-config.js";

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

async function init() {
  const buyBtn = document.getElementById("buy-vip-btn");
  if (buyBtn) buyBtn.href = STRIPE_PAYMENT_LINK_URL;

  const currentUser = await AuthStore.getCurrentUser();
  if (currentUser && currentUser.isVip) {
    const contentEl = document.getElementById("vip-purchase-content");
    if (contentEl) {
      contentEl.innerHTML = `
        <div class="already-vip">You already have VIP — thanks for your support! <a href="profile.html?user=${encodeURIComponent(currentUser.username)}">View your profile</a></div>
      `;
    }
  }
}

init();
