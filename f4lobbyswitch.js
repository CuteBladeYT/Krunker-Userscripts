"use strict";

// Author: NullDev
// Discord: ShadowByte#1337

module.exports = {
    name: "F4 Lobby Switcher",
    version: "1.0.0",
    author: "NullDev",
    description: "Switches Lobby on F4 press",
    locations: ["game"],
    settings: {
        f4lobbyswitch: {
            name: "F4 Lobby Switch",
            id: "f4lobbyswitch",
            cat: "Interface",
            type: "checkbox",
            val: true,
            html: function(){ return clientUtil.genCSettingsHTML(this); },
        },
    },
    run: config => {
        if (config.get("f4lobbyswitch", true)) document.addEventListener("keydown", (e) => ((e.key === "F4") && (window.location.href = "https://krunker.io/")));
    }
};
