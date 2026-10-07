use std::path::Path;

#[derive(Debug, serde::Serialize, serde::Deserialize)]
pub enum DocumentType {
    PDF,
    EPUB,
}

impl DocumentType {
    pub fn from_path<P: AsRef<Path>>(path: P) -> Option<Self> {
        let ext = path.as_ref().extension()?.to_str()?.to_lowercase();
        match ext.as_str() {
            "pdf" => Some(DocumentType::PDF),
            "epub" => Some(DocumentType::EPUB),
            _ => None,
        }
    }
}
