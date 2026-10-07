# Database Schema

## Entity Relationships Overview

```text
User
 │
 ├── Books
 │    ├── Chapters
 │    │    └── Sections
 │    │         └── ContentChunk
 │    │
 │    ├── ReadingProgress
 │    ├── Highlights
 │    └── Notes
 │
 ├── Conversations
 │    └── Messages
 │
 └── UserConcepts

Book
 │
 ├── Chapter
 │    └── Section
 │         └── ContentChunk
 │
 └── BookConcept
          │
          └── Concept
                  │
                  └── ConceptRelation
```

## Prisma Schema

```prisma 
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  books          Book[]
  readingProgress ReadingProgress[]
  highlights     Highlight[]
  notes          Note[]
  conversations  Conversation[]
  userConcepts   UserConcept[]
}

model Book {
  id          String   @id @default(cuid())
  title       String
  author      String?
  description String?
  coverUrl    String?
  fileUrl     String?
  fileType    BookFileType
  totalPages  Int?
  metadata    Json?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  userId String
  user   User @relation(fields: [userId], references: [id], onDelete: Cascade)

  chapters        Chapter[]
  readingProgress ReadingProgress?
  highlights     Highlight[]
  notes          Note[]
  chunks         ContentChunk[]
  bookConcepts   BookConcept[]
  conversations  Conversation[]

  @@index([userId])
}

model Chapter {
  id          String   @id @default(cuid())
  title       String
  chapterNo   Int
  startPage   Int?
  endPage     Int?

  bookId String
  book   Book @relation(fields: [bookId], references: [id], onDelete: Cascade)

  sections Section[]

  @@unique([bookId, chapterNo])
}

model Section {
  id        String @id @default(cuid())
  title     String?
  sectionNo Int
  content   String?

  chapterId String
  chapter   Chapter @relation(fields: [chapterId], references: [id], onDelete: Cascade)

  chunks ContentChunk[]

  @@unique([chapterId, sectionNo])
}

model ContentChunk {
  id        String @id @default(cuid())
  content   String
  chunkNo   Int
  pageStart Int?
  pageEnd   Int?

  bookId    String
  sectionId String?

  book    Book     @relation(fields: [bookId], references: [id], onDelete: Cascade)
  section Section? @relation(fields: [sectionId], references: [id], onDelete: Cascade)

  @@index([bookId])
  @@index([sectionId])
}

enum BookFileType {
  PDF
  EPUB
}

// Dummy models below to satisfy relationships
model ReadingProgress {
  id             String   @id @default(cuid())
  currentPage    Int?
  currentChapter Int?
  progress       Float    @default(0)
  lastReadAt     DateTime @default(now())

  userId String
  bookId String @unique

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  book Book @relation(fields: [bookId], references: [id], onDelete: Cascade)

  @@unique([userId, bookId])
}

model Highlight {
  id        String   @id @default(cuid())
  text      String
  color     String?
  page      Int?
  position  Json?
  createdAt DateTime @default(now())

  userId String
  bookId String

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  book Book @relation(fields: [bookId], references: [id], onDelete: Cascade)

  note Note?

  @@index([userId, bookId])
}

model Note {
  id        String   @id @default(cuid())
  content   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  userId      String
  bookId      String
  highlightId String? @unique

  user      User       @relation(fields: [userId], references: [id], onDelete: Cascade)
  book      Book       @relation(fields: [bookId], references: [id], onDelete: Cascade)
  highlight Highlight? @relation(fields: [highlightId], references: [id], onDelete: Cascade)

  @@index([userId, bookId])
}

model Conversation {
  id        String   @id @default(cuid())
  userId    String
  bookId    String
  user      User     @relation(fields: [userId], references: [id])
  book      Book     @relation(fields: [bookId], references: [id])
}

model UserConcept {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
}

model BookConcept {
  id        String   @id @default(cuid())
  bookId    String
  book      Book     @relation(fields: [bookId], references: [id])
}


// Ensure the BookFileType enum and other missing models are implemented when fully converting this to SQL/Migrations.
```
