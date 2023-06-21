-- CreateTable
CREATE TABLE `User` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `mail` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_mail_key`(`mail`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_permission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_permission` INTEGER NOT NULL,
    `id_user` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_permission` ADD CONSTRAINT `user_permission_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_permission` ADD CONSTRAINT `user_permission_id_permission_fkey` FOREIGN KEY (`id_permission`) REFERENCES `permission`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
