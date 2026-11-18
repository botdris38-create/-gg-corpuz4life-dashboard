
"use strict";

const settings = {
  enabled: false,
  mode: "banat",
  updatedAt: null
};

function getBotSettings() {
  return { ...settings };
}

function updateBotSettings(changes = {}) {
  if (typeof changes.enabled === "boolean") {
    settings.enabled = changes.enabled;
  }

  if (changes.mode === "banat") {
    settings.mode = "banat";
  }

  settings.updatedAt = new Date().toISOString();

  return getBotSettings();
}

module.exports = {
  getBotSettings,
  updateBotSettings
};
