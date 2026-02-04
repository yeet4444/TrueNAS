# TrueNAS

Dette prosjektet går ut på å lage en enkel, egen “Google Drive”-lignende løsning ved hjelp av en lokal server.
Målet er å vise hvordan skylagring fungerer i praksis, men uten å bruke kommersielle tjenester som Google Drive eller OneDrive.

## Hva vi bruker
TrueNAS – brukes som server og lagring
Egen router – lager et privat nettverk
Webapplikasjon – nettside for opplasting og nedlasting av filer
Dataset i TrueNAS – der filene lagres

## Hvordan systemet fungere
Serveren kjører på et privat nettverk (192.168.x.x)
Kun enheter som er koblet til routerens Wi-Fi kan få tilgang
Brukeren åpner en nettside i nettleseren
Filer kan lastes opp, lagres og lastes ned igjen fra serveren
Systemet fungerer som en lokal skylagring.

## Sikkerhet og nettverk
Serveren er ikke tilgjengelig fra internett
Den er beskyttet bak NAT og privat IP-adresse
Dette er valgt for å gjøre løsningen trygg og egnet for skolebruk

## Offentlig tilgang (senere mulighet)
Prosjektet er bygget slik at det kan gjøres offentlig senere, for eksempel:
Ved å bruke et domene
Ved å bruke en sikker tunnel (f.eks. Cloudflare Tunnel)
Dette er ikke aktivert nå, men arkitekturen støtter det.

## Hva vi viser med proskjektet
Hvordan en skylagring er bygget opp
Samspill mellom server, nettverk og web-grensesnitt
Grunnleggende forståelse av private og offentlige nettverk
Praktisk bruk av TrueNAS som lagringsplattform
