# 📊 Valutazione Primaria - PWA

**Applicazione web progressiva per la valutazione delle verifiche nella scuola primaria**

Una soluzione completa e moderna per gestire voti, livelli descrittivi e medie ponderate per lo scrutinio finale. Disponibile come PWA installabile su tutti i dispositivi.

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-brightgreen.svg)](https://github.com/EduTechLab-ita/valutazione-primaria)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 🚀 Installazione PWA

L'app è installabile come Progressive Web App su qualsiasi dispositivo:

### 📱 **Su Chrome/Edge Desktop:**
1. Visita l'applicazione nel browser
2. Clicca sull'icona **"Installa"** (➕) nella barra degli indirizzi
3. Conferma l'installazione
4. L'app apparirà nel menu Start/Applicazioni

### 📲 **Su dispositivi mobili:**
1. Apri il link nel browser
2. **Android:** Menu → "Aggiungi alla schermata Home"
3. **iOS:** Condividi → "Aggiungi alla schermata Home"

## ✨ Caratteristiche Principali

### 🎯 **Calcolo Automatico**
- Conversione automatica da punteggio grezzo a voto decimale
- Calcolo livelli descrittivi secondo normative ministeriali
- Supporto per diverse tipologie di verifica

### 📈 **Gestione Completa**
- **Inserimento rapido** di voti e informazioni studente
- **Medie ponderate** per disciplina con pesi personalizzabili
- **Visualizzazione in tempo reale** di statistiche e progressi
- **Storico completo** di tutte le valutazioni

### 💾 **Import/Export Dati**
- **Esportazione Excel** (.xlsx) per registro elettronico
- **Backup completo** in formato JSON
- **Import dati** da file precedenti
- **Stampa ottimizzata** per documentazione cartacea

## 📖 Guida Utilizzo

### 1️⃣ **Primo Avvio**

Al primo utilizzo, configura le informazioni base:
- **Scuola:** Nome istituto, classe, sezione
- **Docente:** Nome e cognome
- **Anno scolastico**

### 2️⃣ **Inserimento Verifiche**

**Passo 1: Dati Verifica**
```
📋 Disciplina: Matematica
📅 Data: 15/01/2024  
📝 Tipo: Verifica scritta
⚖️ Peso: 1.0 (normale)
📊 Punteggio Max: 20
```

**Passo 2: Inserimento Studenti**
- Aggiungi studenti uno alla volta
- Inserisci **nome**, **cognome** e **punteggio ottenuto**
- Il sistema calcola automaticamente **voto** e **livello**

### 3️⃣ **Funzioni Avanzate**

#### 🔍 **Ricerca e Filtri**
- Cerca studenti per nome
- Filtra per disciplina o periodo
- Ordina per voto o alfabetico

#### 📊 **Statistiche in Tempo Reale**
- Media classe per verifica
- Distribuzione voti (grafico)
- Percentuali per livello descrittivo

#### ⚖️ **Medie Ponderate**
Configura pesi diversi per tipo di verifica:
- **Verifica scritta:** peso 1.0
- **Interrogazione:** peso 0.8  
- **Compito in classe:** peso 1.2

### 4️⃣ **Esportazione Dati**

#### 📁 **Excel per Registro**
- Formato compatibile con principali registri elettronici
- Include voti, livelli e medie
- Esportazione per disciplina o completa

#### 🗂️ **Backup JSON**
- Salvataggio completo di tutti i dati
- Ripristino su qualsiasi dispositivo
- Cronologia delle modifiche

## 🛠️ Configurazioni

### ⚙️ **Impostazioni Sistema**

**Scala di Valutazione:**
- Voto minimo: 4.0
- Voto massimo: 10.0  
- Incrementi: 0.25 punti

**Livelli Descrittivi:**
- **Avanzato:** 9.0 - 10.0
- **Intermedio:** 7.0 - 8.75
- **Base:** 6.0 - 6.75
- **In via di acquisizione:** < 6.0

### 🎨 **Personalizzazione**

L'app si adatta automaticamente a:
- **Tema scuro/chiaro** del sistema
- **Dimensioni schermo** responsive
- **Modalità stampa** ottimizzata

## 📱 Caratteristiche PWA

### 🔧 **Funzionalità Offline**
- L'app funziona anche senza connessione
- Dati salvati localmente nel browser
- Sincronizzazione automatica quando online

### 🖥️ **Esperienza Nativa**
- Icona personalizzata nel desktop/home screen  
- Avvio a schermo intero
- Notifiche push (quando supportate)
- Integrazione con il sistema operativo

## 🆘 Risoluzione Problemi

### ❓ **Domande Frequenti**

**Q: I dati si perdono chiudendo il browser?**  
A: No, tutti i dati sono salvati permanentemente nel browser.

**Q: Come importo dati da un altro dispositivo?**  
A: Esporta in JSON dal dispositivo origine, importa nel nuovo dispositivo.

**Q: Posso usare l'app senza internet?**  
A: Sì, una volta caricata funziona completamente offline.

**Q: Come aggiorno l'app?**  
A: L'aggiornamento è automatico al ricaricamento della pagina.

### 🔧 **Supporto Tecnico**

Per problemi o suggerimenti:
- **Repository:** [GitHub Issues](https://github.com/EduTechLab-ita/valutazione-primaria/issues)
- **Email:** fabio@edutechlab.it

## 🤝 Contributi

Contributi, segnalazioni bug e richieste di funzionalità sono benvenuti!

1. Fork del repository
2. Crea un branch per la feature (`git checkout -b feature/nuova-funzionalità`)
3. Commit delle modifiche (`git commit -m 'Aggiungi nuova funzionalità'`)
4. Push del branch (`git push origin feature/nuova-funzionalità`)
5. Apri una Pull Request

## 📜 Licenza

Questo progetto è rilasciato sotto licenza MIT. Vedi il file [LICENSE](LICENSE) per i dettagli.

## 🏫 EduTechLab

Sviluppato con ❤️ da [EduTechLab](https://github.com/EduTechLab-ita) per supportare l'innovazione digitale nella scuola italiana.

---

### 📊 Statistiche Progetto

- **Versione:** 2.0.0 (PWA Ready)
- **Ultimo aggiornamento:** Settembre 2024
- **Compatibilità:** Chrome, Firefox, Safari, Edge
- **Dispositivi:** Desktop, Tablet, Smartphone
