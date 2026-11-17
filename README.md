# HomeVPNSolution.github.io
HomeVPNSolution will detail my efforts to make a vpn that I can use WITHOUT paying for NordVPN (Though I do love Nord)

# HomeVPN Solution
### A Self-Hosted WireGuard VPN Project

## Project Motivation

The original goal was simple: build a personal VPN solution that would allow me to securely route my internet traffic through my home network while traveling, without paying for a recurring commercial VPN subscription.

(No offense, NordVPN. I still love you.)

Using a Kali Linux laptop, WireGuard, and a GL.iNet Slate AX travel router, I successfully established an encrypted VPN tunnel between a hotel network and my home internet connection.
However, the project soon encountered an unexpected limitation.

I wanted to play World of Warcraft on vacation.

More specifically, I wanted to play WoW Forever using the same Kali Linux laptop that was hosting my WireGuard server.
Taking that laptop on vacation meant removing the VPN server from my home network. Without a dedicated endpoint remaining at home, my travel router would have nothing to connect to.

This created a new engineering requirement: **the VPN server needed to operate independently of my personal computing devices.**

Thus we have
## Phase 2 — Dedicated VPN Infrastructure - (Awaiting delivery)

To address this limitation, I ordered a [GL.iNet Brume 2 (GL-MT2500)](https://www.gl-inet.com/en-us/products/gl-mt2500), a dedicated VPN gateway designed to host services such as WireGuard.

The objective is to migrate the VPN server from my Kali Linux laptop to the Brume 2, creating a persistent home VPN endpoint that does not depend on whether my laptop is powered on, connected, or physically present.

### Engineering Objectives
- **Improve availability:** Keep the VPN server running independently of my laptop.
- **Separate responsibilities:** Use the laptop for personal computing and the Brume 2 for VPN services.
- **Reduce operational dependencies:** Eliminate the need to leave a general-purpose computer running at home.
- **Maintain secure connectivity:** Preserve encrypted WireGuard communication between my travel router and home network.
- **Simplify administration:** Use dedicated networking hardware for ongoing VPN management.
- **Validate reliability:** Test remote connectivity, service recovery, and sustained operation after migration.

### Infrastructure Evolution

**Phase 1 — Proof of Concept (Completed)**

- Kali Linux laptop hosted the WireGuard server.
- GL.iNet Slate AX operated as the travel VPN client.
- Dynamic DNS provided a stable hostname for a changing residential IP address.
- Linux firewall rules, IP forwarding, and NAT enabled traffic routing.
- Successful connectivity was verified from a hotel network.

**Phase 2 — Dedicated VPN Gateway (In Progress)**

- Deploy the GL.iNet Brume 2 at home.
- Configure and validate its WireGuard server.
- Migrate the travel router's VPN connection to the new endpoint.
- Verify firewall, routing, and DNS behavior.
- Test connectivity and recovery after device restarts.
- Document the migration and operational improvements.

## Lessons Learned

A functional proof of concept is not necessarily a sustainable long-term solution.

Although the original VPN implementation worked, its availability depended entirely on a laptop that I also needed/WANTED for other purposes.

This project demonstrates how changing operational requirements can expose infrastructure limitations and motivate architectural improvements.
The migration to dedicated hardware is intended to improve service availability, reduce dependencies, and make the solution easier to maintain.

Stay tuned!
