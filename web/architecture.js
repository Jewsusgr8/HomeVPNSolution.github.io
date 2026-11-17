const details = {
    devices: {
        title: "Travel Devices",
        description: "When you arrive at an area with a public or insecure network, connect the Slate AX travel router via LAN or Wi-Fi.<br>Once this connection is established (configured through the Slate's local WebGUI), you can connect your devices to the Slate's broadcasted 2.4GHz or 5GHz bands."
    },
    slate: {
        title: "GL.iNet Slate AX",
        description: "The Slate AX establishes an encrypted WireGuard tunnel to your home VPN endpoint. At this point, all internet communications are encrypted and you are no longer relying on the hotel's security to safeguard your data."
    },
    home: {
        title: "Home VPN Endpoint",
        description: "The home VPN server decrypts traffic, handles routing to your home Linux server, and performs NAT on your home network."
    },
    internet: {
        title: "Residential Internet",
        description: "Traffic exits through your home internet connection, allowing worry-free browsing while on questionably secure hotel Wi-Fi access points.<br><br>And would you like to know the best part?<br><br>The Slate AX supports:<br> • 2.4 GHz Band: Up to 600 Mbps, <br> • 5 GHz Band: Up to 1200 Mbps. <br><br>These are theoretical Wi-Fi link speeds, not guaranteed VPN throughput.<br><br>Actual performance depends on the hotel's connection, your home upload bandwidth, and the VPN hardware's processing capabilities."
    }
};

const buttons = document.querySelectorAll(".network-node");
const layout = document.querySelector(".architecture-layout");
const detailsPanel = document.querySelector("#architecture-details");
const detailsTitle = document.querySelector("#details-title");
const detailsText = document.querySelector("#node-details");
const closeButton = document.querySelector("#close-details");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const node = button.dataset.node;
        const selected = details[node];

        if (!selected) return;

        detailsTitle.textContent = selected.title;
        detailsText.innerHTML = selected.description;

        detailsPanel.hidden = false;
        layout.classList.add("expanded");
    });
});

closeButton.addEventListener("click", () => {
    layout.classList.remove("expanded");
    detailsPanel.hidden = true;
});
