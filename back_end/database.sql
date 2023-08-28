CREATE DATABASE clean_fish_supermarket; 
USE clean_fish_supermarket;

CREATE TABLE `role` (
  `id_role` INT NOT NULL AUTO_INCREMENT,
  `name_role` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_role`));
  
  CREATE TABLE `user` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `name_user` VARCHAR(255) NOT NULL,
  `day_of_birth` VARCHAR(255) NOT NULL,
  `gender_user` BIT(1) NOT NULL,
  `is_delete_user` BIT(1) NOT NULL DEFAULT 0,
  `email_user` VARCHAR(150) NOT NULL,
  `pass_user` VARCHAR(20) NOT NULL,
  `phone` VARCHAR(10) NOT NULL,
  `id_role` INT NOT NULL,
  PRIMARY KEY (`id_user`),
    FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`));
    
CREATE TABLE `status_order` (
  `id_status` INT NOT NULL AUTO_INCREMENT,
  `name_status` VARCHAR(100) NULL,
  PRIMARY KEY (`id_status`));
  
CREATE TABLE `type_product` (
  `id_type_product` INT NOT NULL AUTO_INCREMENT,
  `name_type_product` LONGTEXT NOT NULL,
  PRIMARY KEY (`id_type_product`));
  
  CREATE TABLE `products` (
  `id_product` INT NOT NULL AUTO_INCREMENT,
  `img` LONGTEXT NOT NULL,
  `is_delete_product` BIT(1) NOT NULL DEFAULT 0,
  `name_product` VARCHAR(255) NOT NULL,
  `price` DOUBLE NOT NULL,
  `quantity` INT NOT NULL,
  `id_type_product` INT NOT NULL,
  PRIMARY KEY (`id_product`),
    FOREIGN KEY (`id_type_product`)REFERENCES `type_product` (`id_type_product`));
    
    CREATE TABLE `order` (
  `id_order` INT NOT NULL AUTO_INCREMENT,
  `address_people` LONGTEXT NOT NULL,
  `day_order` DATETIME NOT NULL,
  `day_take` DATE NULL,
  `note_order` LONGTEXT NULL,
  `id_status` INT NULL,
  `id_user` INT NULL,
  PRIMARY KEY (`id_order`),
    FOREIGN KEY (`id_status`)
    REFERENCES `status_order` (`id_status`),
    FOREIGN KEY (`id_user`)
    REFERENCES `user` (`id_user`));
    
    CREATE TABLE `order_detail` (
  `id_detail` INT NOT NULL AUTO_INCREMENT,
  `number_of_detail` INT NOT NULL,
  `id_order` INT NULL,
  `id_product` INT NULL,
  PRIMARY KEY (`id_detail`),
    FOREIGN KEY (`id_order`)
    REFERENCES `order` (`id_order`),
    FOREIGN KEY (`id_product`)
    REFERENCES `products` (`id_product`));
    
      CREATE TABLE `cart` (
  `id_cart` INT NOT NULL AUTO_INCREMENT,
  `quantity_product` INT NOT NULL,
  `id_user` INT NOT NULL,
  `id_product` INT NOT NULL,
  PRIMARY KEY (`id_cart`),
    FOREIGN KEY (`id_user`)
    REFERENCES `user` (`id_user`),
    FOREIGN KEY (`id_product`)
    REFERENCES `products` (`id_product`));
    
    

    

