use std::fs;
use std::path::Path;

pub fn file_exists<P: AsRef<Path>>(path: P) -> bool {
    path.as_ref().exists()
}

pub fn get_file_size<P: AsRef<Path>>(path: P) -> Result<u64, String> {
    fs::metadata(path.as_ref())
        .map(|m| m.len())
        .map_err(|e| format!("Failed to read file metadata: {}", e))
}
