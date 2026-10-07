#[tauri::command]
pub async fn export_notes() -> Result<String, String> {
    Ok("Notes exported successfully".to_string())
}
