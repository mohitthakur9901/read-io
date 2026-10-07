use serde::Serialize;
use std::path::PathBuf;
use tauri::AppHandle;
use tauri_plugin_dialog::DialogExt;

use crate::documents::DocumentType;
use crate::filesystem::files::get_file_size;

#[derive(Serialize)]
pub struct BookMetadata {
    pub path: String,
    pub file_name: String,
    pub extension: String,
    pub size: u64,
}

#[tauri::command]
pub async fn pick_book_file(app: AppHandle) -> Result<Option<String>, String> {
    let file_path = app
        .dialog()
        .file()
        .add_filter("Books", &["pdf", "epub"])
        .blocking_pick_file();

    if let Some(path) = file_path {
        Ok(Some(path.to_string()))
    } else {
        Ok(None)
    }
}

#[tauri::command]
pub async fn get_book_metadata(path: String) -> Result<BookMetadata, String> {
    let path_buf = PathBuf::from(&path);
    if !path_buf.exists() || !path_buf.is_file() {
        return Err("Book file does not exist".to_string());
    }

    let file_name = path_buf
        .file_name()
        .and_then(|n| n.to_str())
        .unwrap_or("Unknown")
        .to_string();

    let extension = path_buf
        .extension()
        .and_then(|e| e.to_str())
        .unwrap_or("")
        .to_string();

    if DocumentType::from_path(&path_buf).is_none() {
        return Err("Unsupported book format".to_string());
    }

    let size = get_file_size(&path_buf)?;

    Ok(BookMetadata {
        path,
        file_name,
        extension,
        size,
    })
}
