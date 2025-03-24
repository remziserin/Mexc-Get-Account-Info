
# MEXC API Trading Bot

Dieses Projekt ist eine **Node.js-Anwendung**, die die **Spot- und Futures-APIs** der **MEXC-Börse** verwendet, um Kontoinformationen abzurufen.

## 📌 Funktionen

- **Spot-Kontoinformationen** – Anzeige offener Positionen.
- **Futures-Kontoinformationen** – Anzeige des Kontoverlaufs für Futures.
- **HMAC-SHA256-Signierung** – Sicherer Signaturmechanismus für API-Anfragen.
- **HTTP-Anfragen mit Axios** – Wird für REST-API-Anfragen verwendet.

## 🚀 Verwendung

### 1️⃣ Abhängigkeiten installieren

```bash
npm install axios crypto
```

### 2️⃣ API-Schlüssel hinzufügen

Fügen Sie Ihre MEXC-API-Anmeldeinformationen in den Variablen **API_KEY** und **SECRET_KEY** im Code ein.

### 3️⃣ Projekt starten

```bash
node app.js
```

## 📜 API-Antworten

Durch den Aufruf der Funktionen können folgende Informationen abgerufen werden:

- **getAccountInfoSpot()** – Ruft offene Spot-Positionen ab.
- **getFuturesAccountInfo()** – Ruft den Verlauf der Futures-Positionen ab.

## 📧 Kontakt

Für Feedback oder Zusammenarbeit können Sie mich gerne kontaktieren:


- **E-Mail:** [kolnremzi@gmail.com](mailto:kolnremzi@gmail.com)

