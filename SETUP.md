# SETUP

Denne filen forklarer hvordan prosjektet er satt opp på TrueNAS-serveren.
Oppsettet er laget for bruk i et lukket, lokalt nettverk.

---

##  Krav
- PC med **TrueNAS SCALE**
- Router som lager et privat nettverk f.eks "ITK_CLOUD"
- Enheter koblet til samme Wi-Fi
- Nettleser (Chrome, Edge, Firefox)

---

##  Nettverksoppsett
- Serveren er koblet til en egen router
- Routeren får internett via skole-nettverk
- TrueNAS-serveren har privat IP-adresse:


# ITK_CLOUD
Kun enheter på dette nettverket har tilgang.

---

## Lagring (TrueNAS)
1. Gå til **Storage → Pools**
2. Opprett et dataset (f.eks. `drive_data`)
3. Dette brukes til å lagre opplastede filer

---

##  Applikasjon
- Webapplikasjonen kjører på TrueNAS
- Backend håndterer:
  - Filopplasting
  - Fillagring
  - Nedlasting
- Frontend gir et enkelt webgrensesnitt

Applikasjonen har tilgang til datasetet som lagringsplass.

---

##  Tilgang til nettsiden
1. Koble en enhet til routerens Wi-Fi
2. Åpne nettleser
3. Gå til:

# 192.168.1.165:<port>


Nettsiden fungerer som en lokal “Google Drive”.

---

##  Sikkerhet
- Serveren er ikke eksponert mot internett
- Ingen port forwarding er aktivert
- Dette er valgt for sikkerhet og skolebruk

---

## Videre utvikling
Systemet kan senere gjøres offentlig ved:
- Bruk av domene
- Bruk av sikker tunnel (f.eks. Cloudflare Tunnel)

Dette er ikke aktivert i denne versjonen.


