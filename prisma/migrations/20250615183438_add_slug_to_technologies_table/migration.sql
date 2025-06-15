/*
  Warnings:

  - Added the required column `slug` to the `technologies` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_technologies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_technologies" ("created_at", "description", "id", "name") SELECT "created_at", "description", "id", "name" FROM "technologies";
DROP TABLE "technologies";
ALTER TABLE "new_technologies" RENAME TO "technologies";
CREATE UNIQUE INDEX "technologies_slug_key" ON "technologies"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
