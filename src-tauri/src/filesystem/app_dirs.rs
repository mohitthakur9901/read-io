use std::path::PathBuf;
use tauri::{AppHandle, Manager};

pub fn get_app_data_dir(app: &AppHandle) -> Option<PathBuf> {
    app.path().app_data_dir().ok()
}

pub fn get_app_cache_dir(app: &AppHandle) -> Option<PathBuf> {
    app.path().app_cache_dir().ok()
}
