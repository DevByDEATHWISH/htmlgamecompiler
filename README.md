# HTMLGAMECOMPILER

**HTMLGAMECOMPILER** is a simple scaffolding tool optimized for packaging and compiling HTML-based games and applications into native apps using Tauri.

---

## Features

- **Cross-Platform**: Supports Windows, macOS, and Linux.
- **Lightweight**: Uses Tauri's lightweight webview for native performance.
- **Customizable**: Easily extendable for other HTML-based apps.
- **Optimized Setup**: Streamlined scaffolding for developers building HTML games.

---

## Requirements

- **Microsoft C++ Build Tools** (for Windows users):  
  [Download Here](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
- **WebView2 Runtime** (for Windows users):  
  [Download Here](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)
- **Rust** Programming Language:  
  [Install Rust](https://www.rust-lang.org/learn/get-started)

---

## Recommended Development Setup

- **Visual Studio Code**:  
  [Download VS Code](https://code.visualstudio.com/)
  
- **Tauri VS Code Extension**:  
  [Install Tauri Extension](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)

- **Rust Analyzer**:  
  [Install Rust Analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

---

## Getting Started

Follow these steps to start using HTMLGAMECOMPILER:

1. Clone this repository:  
   ```bash
   git clone https://github.com/DevByDEATHWISH/htmlgamecompiler.git
   cd htmlgamecompiler
   ```

2. Install dependencies:  
   Ensure Rust is installed and run the following command in the project root:  
   ```bash
   cargo tauri build
   ```

3. Package your HTML game:  
   - Place your game files (HTML, CSS, JS) inside the `src/game` folder.  
   - Adjust the `index.html` to point to your main HTML file.

4. Build and run:  
   ```bash
   cargo tauri dev
   ```

5. Compile the application:  
   ```bash
   cargo tauri build
   ```

---