// Don't delete this unless you know what you're doing

#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
fn greet(name: &str) -> String {
  format!("Hello {name}, You have been greeted from Rust!")
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!(
      "./tauri.conf.json"
    ))
    .expect("error while running tauri application");
}
