// TODO: Shularni o'zingiznikiga almashtiring
const PUBLIC_KEY = "9Py_rr-Mnl7YSNehn";
const SERVICE_ID = "service_kavrak";
const TEMPLATE_ID = "template_st7aem7";

document.addEventListener("DOMContentLoaded", () => {
  // EmailJS init
  emailjs.init({ publicKey: PUBLIC_KEY });

  const form = document.getElementById("contact-form");
  const sendBtn = document.getElementById("send-btn");
  const statusEl = document.getElementById("status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    sendBtn.disabled = true;
    statusEl.textContent = "⏳ Yuborilmoqda...";

    const data = {
      user_name: document.getElementById("user_name").value,
      user_phone: document.getElementById("user_phone").value,
      user_order: document.getElementById("user_order").value,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data);
      statusEl.textContent = "✅ Buyurtma yuborildi!";
      form.reset();
    } catch (err) {
      console.error("Xatolik:", err);
      statusEl.textContent = "❌ Xatolik yuz berdi!";
    } finally {
      sendBtn.disabled = false;
    }
  });
});