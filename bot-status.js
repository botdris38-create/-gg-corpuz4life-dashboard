
"use strict";

const startedAt = Date.now();

function getBotStatus(options = {}) {
  return {
    project: "GG./CORPUZ4LIFE",
    dashboard: "online",
    bot: options.connected === true ? "connected" : "not_connected",
    enabled: options.enabled === true,
    uptimeSeconds: Math.floor((Date.now() - startedAt) / 1000),
    timestamp: new Date().toISOString()
  };
}

module.exports = { getBotStatus };
