pub mod commands;
pub mod documents;
pub mod filesystem;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            commands::books::pick_book_file,
            commands::books::get_book_metadata,
            commands::reader::open_book_file,
            commands::reader::get_file_info,
            commands::notes::export_notes,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
