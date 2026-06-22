const launchForm = document.querySelector("#launchForm");
const formNote = document.querySelector("#formNote");
const revealItems = document.querySelectorAll(".scroll-reveal");

// Paste the Google Apps Script web app URL here after deployment.
const GOOGLE_SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzI5kwIfam6Kq1UxHPDKhS2RayLdY_0T7PL0mEz-IWSW4yI9az_RFYuyZncyJxEmOg7wQ/exec";

window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

revealItems.forEach((item) => revealObserver.observe(item));

function saveLocalLead(payload) {
  const leads = JSON.parse(localStorage.getItem("whiteGrainLaunchLeads") || "[]");
  leads.push(payload);
  localStorage.setItem("whiteGrainLaunchLeads", JSON.stringify(leads));
}

launchForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(launchForm).entries());
  const submitButton = launchForm.querySelector("button[type='submit']");
  const payload = {
    ...data,
    source: "whitegrain-launch-page",
    page: window.location.href,
    userAgent: navigator.userAgent,
    submittedAt: new Date().toISOString(),
  };

  saveLocalLead(payload);

  submitButton.disabled = true;
  submitButton.textContent = "Saving...";

  try {
    if (GOOGLE_SHEETS_WEB_APP_URL) {
      await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(payload),
      });
    }

    launchForm.reset();
    formNote.textContent = GOOGLE_SHEETS_WEB_APP_URL
      ? "You are on the WhiteGrain launch list."
      : "Saved locally for now. Add the Google Sheets URL to send signups to your Sheet.";
    formNote.classList.add("success");
  } catch {
    formNote.textContent = "Saved locally, but the Google Sheet did not receive it. Please check the web app URL.";
    formNote.classList.remove("success");
    formNote.classList.add("error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Notify me at launch";
  }
});
