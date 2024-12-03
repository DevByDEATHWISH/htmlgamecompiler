// Handles fullscreen logic if your engine does not support it

const { window: tauriWindow } = window.__TAURI__;
const currentWindow = tauriWindow.getCurrentWindow();

const toggleFullscreen = async () => {
  try {
    const isFullscreen = await currentWindow.isFullscreen();
    await currentWindow.setFullscreen(!isFullscreen);
  } catch (error) {
    console.error("Failed to toggle fullscreen:", error);
  }
};

// Change the keybind to your preferred
window.addEventListener("keydown", (event) => {
  if (event.key === "F4") {
    toggleFullscreen();
  }
});
