// @ts-nocheck -- This browser fallback intentionally retains the deprecated execCommand API.
const fallbackCopy = (text) => {
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.append(field);
  field.select();
  // @ts-ignore Deprecated, but retained as a fallback when Clipboard API access is unavailable.
  const copied = document.execCommand('copy');
  field.remove();
  return copied;
};

const copyText = async (text) => {
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
      const copied = await copyText(button.dataset.copyEmail || '');
      if (!copied) return;

      window.clearTimeout(hideTimer);
      tooltip.hidden = false;
      hideTimer = window.setTimeout(() => {
        tooltip.hidden = true;
      }, 2400);
    });
  });
};
