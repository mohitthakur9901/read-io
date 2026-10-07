use serde::Serialize;
use std::path::PathBuf;

use crate::documents::DocumentType;
use crate::filesystem::files::{file_exists, get_file_size};

#[derive(Serialize)]
pub struct FileInfo {
    pub path: String,
    pub file_name: String,
    pub size: u64,
    pub extension: String,
}

#[tauri::command]
pub async fn open_book_file(path: String) -> Result<FileInfo, String> {
    let path_buf = PathBuf::from(&path);
    if !file_exists(&path_buf) {
        return Err("File does not exist".to_string());
    }

    if DocumentType::from_path(&path_buf).is_none() {
        return Err("Unsupported file extension".to_string());
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

    let size = get_file_size(&path_buf)?;

    Ok(FileInfo {
        path,
        file_name,
        size,
        extension,
    })
}

#[tauri::command]
pub async fn get_file_info(path: String) -> Result<FileInfo, String> {
    let path_buf = PathBuf::from(&path);
    if !file_exists(&path_buf) {
        return Err("File does not exist".to_string());
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

    let size = get_file_size(&path_buf)?;

    Ok(FileInfo {
        path,
        file_name,
        size,
        extension,
    })
}
