// @ts-nocheck -- This browser fallback intentionally retains the deprecated execCommand API.
const fallbackCopy = (text) => {
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  try {
    document.body.append(field);
    field.select();
    // @ts-ignore Deprecated, but retained as a fallback when Clipboard API access is unavailable.
    return document.execCommand('copy');
  } catch {
    return false;
  } finally {
    field.remove();
  }
};

export const copyText = async (text) => {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return fallbackCopy(text);
    }
  }
  return fallbackCopy(text);
};

export const initContactLinks = () => {
  document.querySelectorAll('[data-copy-email]').forEach((button) => {
    if (!(button instanceof HTMLButtonElement) || button.dataset.copyReady === 'true') return;
    button.dataset.copyReady = 'true';

    let hideTimer;
    button.addEventListener('click', async () => {
      const tooltip = button.closest('[data-contact-links]')?.querySelector('[data-copy-tooltip]');
      if (!(tooltip instanceof HTMLElement)) return;
      const email = button.dataset.copyEmail || '';
      const copied = await copyText(email);

      window.clearTimeout(hideTimer);
      tooltip.textContent = copied ? 'copied to clipboard' : `Copy unavailable — ${email}`;
      tooltip.hidden = false;
      hideTimer = window.setTimeout(() => {
        tooltip.hidden = true;
      }, 2400);
    });
  });
};
