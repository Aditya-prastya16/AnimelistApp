/*
  Warnings:

  - You are about to drop the column `anime_image` on the `Collection` table. All the data in the column will be lost.
  - You are about to drop the column `anime_title` on the `Collection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Collection` DROP COLUMN `anime_image`,
    DROP COLUMN `anime_title`;
