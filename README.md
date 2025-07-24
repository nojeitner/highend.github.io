# HighEnd eSports Website

Eine professionelle Website für den HighEnd eSports Verein, optimiert für GitHub Pages.

## 🎮 Über das Projekt

Diese Website wurde für den HighEnd eSports Verein erstellt und bietet eine moderne, responsive Präsenz im Web. Die Seite ist vollständig für GitHub Pages optimiert und verwendet nur statische Technologien.

## ✨ Features

- **Responsive Design**: Funktioniert perfekt auf Desktop, Tablet und Mobile
- **Moderne Ästhetik**: Gaming-inspiriertes Design mit eSports-Thema
- **Interaktive Elemente**: FAQ-Accordion, Kontaktformular, Mobile Navigation
- **SEO-optimiert**: Sauberer HTML-Code und semantische Struktur
- **GitHub Pages Ready**: Keine serverseitigen Abhängigkeiten

## 📁 Dateistruktur

```
/
├── index.html          # Startseite
├── about.html          # Über uns Seite
├── contact.html        # Kontakt Seite
├── faq.html           # Q&A Seite
├── impressum.html     # Impressum/Datenschutz
├── styles.css         # CSS Stylesheet
├── script.js          # JavaScript Funktionalitäten
└── README.md          # Diese Datei
```

## 🚀 Installation & Deployment

### Lokale Entwicklung

1. Repository klonen oder Dateien herunterladen
2. Einen lokalen Webserver starten (z.B. mit Python):
   ```bash
   python -m http.server 8000
   ```
3. Browser öffnen und zu `http://localhost:8000` navigieren

### GitHub Pages Deployment

1. Repository auf GitHub erstellen
2. Alle Dateien in das Repository hochladen
3. In den Repository-Einstellungen GitHub Pages aktivieren
4. Source auf "Deploy from a branch" setzen
5. Branch "main" und Folder "/ (root)" auswählen

## 🎨 Anpassungen

### Bilder hinzufügen

Die Website enthält Platzhalter für Bilder mit der CSS-Klasse `.image-placeholder`. Um echte Bilder hinzuzufügen:

1. Bilder in einen `images/` Ordner legen
2. HTML-Code der Platzhalter durch `<img>` Tags ersetzen:
   ```html
   <!-- Vorher -->
   <div class="image-placeholder">
       <span>Hero Image</span>
   </div>
   
   <!-- Nachher -->
   <img src="images/hero-image.jpg" alt="Hero Image">
   ```

### Texte anpassen

Alle Lorem Ipsum Texte können durch echte Inhalte ersetzt werden. Wichtige Stellen:

- **Vereinsinformationen**: In `impressum.html` die Platzhalter durch echte Daten ersetzen
- **Kontaktdaten**: In `contact.html` die E-Mail-Adressen und Telefonnummern anpassen
- **Team-Informationen**: In `about.html` echte Spieler- und Team-Daten einfügen
- **FAQ-Inhalte**: In `faq.html` echte Fragen und Antworten hinzufügen

### Farben anpassen

Das Farbschema kann in `styles.css` angepasst werden. Hauptfarben:

- **Primärfarbe**: `#00ff88` (Neon-Grün)
- **Hintergrund**: `#0a0a0a` (Dunkel)
- **Sekundärhintergrund**: `#1a1a2e` (Dunkelblau)
- **Text**: `#fff` (Weiß), `#ccc` (Hellgrau)

### Social Media Links

In allen HTML-Dateien die Social Media Platzhalter durch echte Links ersetzen:

```html
<!-- Beispiel für Discord Link -->
<a href="https://discord.gg/your-server" target="_blank" rel="noopener">
    <div class="social-card">
        <img src="images/discord-icon.png" alt="Discord">
        <p>Discord Server</p>
    </div>
</a>
```

## 🛠️ Technologien

- **HTML5**: Semantische Struktur
- **CSS3**: Modernes Styling mit Flexbox und Grid
- **JavaScript**: Interaktive Funktionalitäten
- **Google Fonts**: Orbitron & Roboto Schriften

## 📱 Browser-Kompatibilität

- Chrome (aktuell)
- Firefox (aktuell)
- Safari (aktuell)
- Edge (aktuell)
- Mobile Browser (iOS/Android)

## 📋 To-Do für Produktiveinsatz

- [ ] Logo und Bilder hinzufügen
- [ ] Echte Kontaktdaten eintragen
- [ ] Impressum mit echten Daten ausfüllen
- [ ] Social Media Links verknüpfen
- [ ] Google Analytics einrichten (optional)
- [ ] Kontaktformular Backend einrichten (optional)

## 📞 Support

Bei Fragen zur Website-Struktur oder Anpassungen können Sie sich an den Entwickler wenden.

## 📄 Lizenz

Diese Website ist für den HighEnd eSports Verein erstellt worden. Alle Rechte vorbehalten.

---

**Hinweis**: Diese Website ist vollständig statisch und benötigt keine serverseitigen Technologien. Sie funktioniert direkt mit GitHub Pages ohne zusätzliche Konfiguration.
