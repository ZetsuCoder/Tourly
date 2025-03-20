//! privacy police
document.addEventListener("DOMContentLoaded", function () {
    const consentCheckbox = document.querySelector("#consent-checkbox");
    const acceptButton = document.querySelector("#accept-button");
  
    consentCheckbox.addEventListener("change", function () {
      acceptButton.disabled = !this.checked;
    });
  
    acceptButton.addEventListener("click", function () {
      if (consentCheckbox.checked) {
        alert("Gizlilik Politikası kabul edildi. Teşekkürler!");
      }
    });
  });
  
  //! cookies
  function acceptCookies() {
    document.getElementById("cookie-banner").style.display = "none";
    document.getElementById("cookie-overlay").style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
  }
  
  function rejectCookies() {
    document.getElementById("cookie-banner").classList.add("hidden");
    localStorage.setItem("cookiesAccepted", "false");
  }
  
  function openSettings() {
    alert("Çerez ayarları paneli eklenebilir.");
  }
  


// cookie
document.addEventListener('DOMContentLoaded', function () {
    const consent = document.querySelector('.gdpr-consent');
    const overlay = document.querySelector('.overlay');
    const acceptAllBtn = document.getElementById('acceptAll');
    const rejectAllBtn = document.getElementById('rejectAll');
    const analyticsCheckbox = document.getElementById('analytics');
    const marketingCheckbox = document.getElementById('marketing');
    const COOKIE_TIMEOUT = 20 * 60 * 1000; // 20 minutes in milliseconds
  
    function showConsentForm() {
        consent.classList.add('active');
        overlay.classList.add('active');
    }
    
    function savePreferences(analytics, marketing) {
        const preferences = {
            essential: true,
            analytics: analytics,
            marketing: marketing,
            timestamp: new Date().toISOString()
        };
  
        localStorage.setItem('gdprPreferences', JSON.stringify(preferences));
  
        consent.classList.remove('active');
        overlay.classList.remove('active');
  
        const message = analytics || marketing
            ? 'Thank you for accepting cookies!'
            : 'Preferences saved. Only essential cookies will be used.';
  
        showNotification(message);
  
        document.dispatchEvent(new CustomEvent('gdprPreferencesSaved', { detail: preferences }));
  
        // Save the last accepted/rejected time
        localStorage.setItem('gdprLastShown', new Date().getTime().toString());
    }
  
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 1rem;
            right: 1rem;
            background: #10B981;
            color: white;
            padding: 1rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
            font-family: inherit;
            font-size: 0.875rem;
            z-index: 1000;
            opacity: 0;
            transform: translateY(-1rem);
            transition: all 0.3s ease;
        `;
  
        notification.textContent = message;
        document.body.appendChild(notification);
  
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 100);
  
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-1rem)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
  
    acceptAllBtn.addEventListener('click', () => {
        analyticsCheckbox.checked = true;
        marketingCheckbox.checked = true;
        savePreferences(true, true);
    });
  
    rejectAllBtn.addEventListener('click', () => {
        analyticsCheckbox.checked = false;
        marketingCheckbox.checked = false;
        savePreferences(false, false);
    });
  
    // **SHOW THE POPUP EVERY TIME THE PAGE REFRESHES**
    showConsentForm();
  
    // **CHECK EVERY 1 MINUTE IF THE POPUP SHOULD REAPPEAR (AFTER 20 MINUTES)**
    setInterval(() => {
        const lastShown = localStorage.getItem('gdprLastShown');
        if (!lastShown || new Date().getTime() - parseInt(lastShown, 10) >= COOKIE_TIMEOUT) {
            showConsentForm();
        }
    }, 60000); // Check every 1 minute
  });
  
  
  
  
  // privacy btn 
  document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("consent-checkbox");
    const button = document.getElementById("accept-button");
  
    // Enable button when checkbox is checked
    checkbox.addEventListener("change", function () {
        button.disabled = !checkbox.checked;
    });
  
    // Redirect to home page on button click
    button.addEventListener("click", function () {
        window.location.href = "/"; // Change to your home page URL if needed
    });
  });