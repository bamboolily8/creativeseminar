(() => {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");

  if (menuToggle && header) {
    menuToggle.addEventListener("click", () => {
      const open = header.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    header.querySelectorAll(".site-nav a, .header-cta").forEach((el) => {
      el.addEventListener("click", () => {
        header.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll(".faq-q").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const open = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
    });
  });

  const form = document.getElementById("contact-form");
  if (!form) return;

  const setError = (name, message) => {
    const el = form.querySelector(`[data-error-for="${name}"]`);
    if (el) el.textContent = message;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    ["name", "email", "course", "privacy"].forEach((name) => setError(name, ""));

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const course = form.querySelector('input[name="course"]:checked');
    const privacy = form.privacy.checked;
    let valid = true;

    if (!name) {
      setError("name", "お名前を入力してください。");
      valid = false;
    }

    if (!email) {
      setError("email", "メールアドレスを入力してください。");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("email", "正しいメールアドレスを入力してください。");
      valid = false;
    }

    if (!course) {
      setError("course", "参加希望の講座を選択してください。");
      valid = false;
    }

    if (!privacy) {
      setError("privacy", "プライバシーポリシーへの同意が必要です。");
      valid = false;
    }

    if (valid) {
      window.location.href = "thanks.html";
    }
  });
})();
