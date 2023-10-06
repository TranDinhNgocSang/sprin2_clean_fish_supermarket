-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: clean_fish_supermarket
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id_cart` int NOT NULL AUTO_INCREMENT,
  `quantity_product` int NOT NULL,
  `id_product` int DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  PRIMARY KEY (`id_cart`),
  KEY `FKmgpj4mxjdornkf5glivj8hnxa` (`id_product`),
  KEY `FKd7fhinotgwm2xa9gq7rx9hl41` (`id_user`),
  CONSTRAINT `FKd7fhinotgwm2xa9gq7rx9hl41` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`),
  CONSTRAINT `FKmgpj4mxjdornkf5glivj8hnxa` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=162 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (148,1,20,4),(153,28,3,5),(156,1,20,6),(159,1,12,6),(160,1,22,6);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_detail`
--

DROP TABLE IF EXISTS `order_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_detail` (
  `id_oder_detail` int NOT NULL AUTO_INCREMENT,
  `quantity_product` int NOT NULL,
  `id_oder` int DEFAULT NULL,
  `id_product` int DEFAULT NULL,
  PRIMARY KEY (`id_oder_detail`),
  KEY `FKpwhy98ufr6i1t7fmojw0rlhd` (`id_oder`),
  KEY `FKicrtfcntxfkyrnoaqh1croidl` (`id_product`),
  CONSTRAINT `FKicrtfcntxfkyrnoaqh1croidl` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`),
  CONSTRAINT `FKpwhy98ufr6i1t7fmojw0rlhd` FOREIGN KEY (`id_oder`) REFERENCES `order_product` (`id_oder`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_detail`
--

LOCK TABLES `order_detail` WRITE;
/*!40000 ALTER TABLE `order_detail` DISABLE KEYS */;
INSERT INTO `order_detail` VALUES (1,5,13,1),(2,1,14,1),(3,2,14,2),(4,1,15,1),(5,1,15,2),(6,1,15,3),(7,5,16,20),(8,1,16,22),(9,1,17,11),(10,1,17,13),(11,1,17,31),(12,1,18,11),(13,1,18,12),(14,1,18,22),(15,1,18,21),(16,1,19,32),(17,1,19,33),(18,1,20,1),(19,1,21,32),(20,1,22,2),(21,4,22,20),(22,1,23,31),(23,1,25,22),(24,1,61,33),(25,1,63,33),(26,1,64,11),(27,1,66,32),(28,2,66,31),(29,1,68,28),(30,1,71,31),(31,2,72,28),(32,9,73,31);
/*!40000 ALTER TABLE `order_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_product`
--

DROP TABLE IF EXISTS `order_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_product` (
  `id_oder` int NOT NULL AUTO_INCREMENT,
  `address` longtext,
  `day_oder` datetime DEFAULT NULL,
  `delivery_date` date DEFAULT NULL,
  `note` varchar(200) DEFAULT NULL,
  `id_status` int DEFAULT '1',
  `id_user` int DEFAULT NULL,
  PRIMARY KEY (`id_oder`),
  KEY `FKrj265ycpqn5m402k7j2ih09lq` (`id_user`),
  KEY `FKri82untw9tl3img042331e7jn` (`id_status`),
  CONSTRAINT `FKri82untw9tl3img042331e7jn` FOREIGN KEY (`id_status`) REFERENCES `status_oder` (`id_status`),
  CONSTRAINT `FKrj265ycpqn5m402k7j2ih09lq` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product`
--

LOCK TABLES `order_product` WRITE;
/*!40000 ALTER TABLE `order_product` DISABLE KEYS */;
INSERT INTO `order_product` VALUES (10,'danang','2022-01-01 08:08:08',NULL,'sang',3,6),(11,'danang','2023-09-12 10:19:15',NULL,'sang',3,6),(12,'danang','2023-09-13 09:42:21',NULL,'sang',3,6),(13,'danang','2023-09-13 09:59:58',NULL,'sang',3,6),(14,'dasdsa','2023-09-14 11:49:38',NULL,'sad',3,6),(15,'sang','2023-09-14 01:48:21',NULL,'sds',3,6),(16,'sang','2023-09-14 01:52:29',NULL,'sang',3,6),(17,'sang','2023-09-14 02:13:37',NULL,'sang',3,6),(18,'adasdsa','2023-09-14 02:15:50',NULL,'dasdsa',3,6),(19,'address','2023-09-14 02:29:29',NULL,'note',3,6),(20,'101 pham van nghi','2023-09-14 03:15:55',NULL,'giao sang',3,6),(21,'11 le dinh ly','2023-09-14 03:23:43',NULL,'không có ghi chú',3,6),(22,'101 pham van nghi','2023-09-14 04:13:35',NULL,'giao buoi sang',3,6),(23,'ádsad','2023-09-15 03:28:41',NULL,'không có ghi chú',3,6),(24,'ádsad','2023-09-15 03:56:52',NULL,'không có ghi chú',3,6),(25,'11 Le Dinh Ly','2023-09-17 03:09:52',NULL,'không có ghi chú',3,6),(26,'11 Le Dinh Ly','2023-09-17 03:11:21',NULL,'không có ghi chú',3,6),(27,'11 Le Dinh Ly','2023-09-17 03:11:26',NULL,'không có ghi chú',3,6),(28,'11 Le Dinh Ly','2023-09-17 03:11:32',NULL,'không có ghi chú',3,6),(29,'11 Le Dinh Ly','2023-09-17 03:11:39',NULL,'không có ghi chú',3,6),(30,'11 Le Dinh Ly','2023-09-17 03:12:17',NULL,'không có ghi chú',3,6),(31,'11 Le Dinh Ly','2023-09-17 03:12:20',NULL,'không có ghi chú',3,6),(32,'11 Le Dinh Ly','2023-09-17 03:12:32',NULL,'không có ghi chú',3,6),(33,'11 Le Dinh Ly','2023-09-17 03:12:54',NULL,'không có ghi chú',3,6),(34,'11 Le Dinh Ly','2023-09-17 03:13:54',NULL,'không có ghi chú',3,6),(35,'11 Le Dinh Ly','2023-09-17 03:14:20',NULL,'không có ghi chú',3,6),(36,'11 Le Dinh Ly','2023-09-17 03:15:23',NULL,'không có ghi chú',3,6),(37,'11 Le Dinh Ly','2023-09-17 03:15:25',NULL,'không có ghi chú',3,6),(38,'11 Le Dinh Ly','2023-09-17 03:15:28',NULL,'không có ghi chú',3,6),(39,'11 Le Dinh Ly','2023-09-17 03:15:30',NULL,'không có ghi chú',3,6),(40,'11 Le Dinh Ly','2023-09-17 03:15:33',NULL,'không có ghi chú',3,6),(41,'11 Le Dinh Ly','2023-09-17 03:15:37',NULL,'không có ghi chú',3,6),(42,'11 Le Dinh Ly','2023-09-17 03:16:02',NULL,'không có ghi chú',3,6),(43,'11 Le Dinh Ly','2023-09-17 03:18:30',NULL,'không có ghi chú',3,6),(44,'11 Le Dinh Ly','2023-09-17 03:18:48',NULL,'không có ghi chú',3,6),(45,'11 Le Dinh Ly','2023-09-17 03:19:26',NULL,'không có ghi chú',3,6),(46,'11 Le Dinh Ly','2023-09-17 03:19:36',NULL,'không có ghi chú',3,6),(47,'11 Le Dinh Ly','2023-09-17 03:27:20',NULL,'không có ghi chú',3,6),(48,'11 Le Dinh Ly','2023-09-17 03:27:58',NULL,'không có ghi chú',3,6),(49,'11 Le Dinh Ly','2023-09-17 03:28:19',NULL,'không có ghi chú',3,6),(50,'11 Le Dinh Ly','2023-09-17 03:28:26',NULL,'không có ghi chú',3,6),(51,'11 Le Dinh Ly','2023-09-17 03:28:32',NULL,'không có ghi chú',3,6),(52,'11 Le Dinh Ly','2023-09-17 03:28:41',NULL,'không có ghi chú',3,6),(53,'11 Le Dinh Ly','2023-09-17 03:28:44',NULL,'không có ghi chú',3,6),(54,'11 Le Dinh Ly','2023-09-17 03:28:49',NULL,'không có ghi chú',3,6),(55,'11 Le Dinh Ly','2023-09-17 03:29:01',NULL,'không có ghi chú',3,6),(56,'11 Le Dinh Ly','2023-09-17 03:29:09',NULL,'không có ghi chú',3,6),(57,'11 Le Dinh Ly','2023-09-17 03:29:14',NULL,'không có ghi chú',3,6),(58,'11 Le Dinh Ly','2023-09-17 03:29:17',NULL,'không có ghi chú',3,6),(59,'11 Le Dinh Ly','2023-09-17 03:30:02',NULL,'không có ghi chú',3,6),(60,'11 Le Dinh Ly','2023-09-17 03:30:14',NULL,'không có ghi chú',3,6),(61,'22 Le Duan','2023-09-17 03:32:30',NULL,'không có ghi chú',3,6),(62,'22 Le Duan','2023-09-17 03:33:16',NULL,'không có ghi chú',3,6),(63,'11 Phan Thanh','2023-09-17 03:36:46',NULL,'không có ghi chú',2,6),(64,'22 Phan Chau Trinh','2023-09-17 04:29:55',NULL,'không có ghi chú',1,6),(65,'22 Phan Chau Trinh','2023-09-17 05:39:22',NULL,'không có ghi chú',1,6),(66,'11 Le Dinh Ly','2023-09-18 02:48:25',NULL,'không có ghi chú',1,6),(67,'11 Le Dinh Ly','2023-09-18 02:50:19',NULL,'không có ghi chú',1,6),(68,'11 Phan Thanh','2023-09-18 03:09:48',NULL,'không có ghi chú',1,6),(69,'11 Phan Thanh','2023-09-18 03:22:58',NULL,'không có ghi chú',1,6),(70,'11 Phan Thanh','2023-09-18 03:23:31',NULL,'không có ghi chú',1,6),(71,'101 Pham Van Nghi','2023-09-18 03:27:01',NULL,'không có ghi chú',1,6),(72,'11 Le Loi','2023-09-21 01:40:49',NULL,'không có ghi chú',1,6),(73,'101 le lai','2023-09-22 02:55:12',NULL,'giao buoi sang',1,6);
/*!40000 ALTER TABLE `order_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id_product` int NOT NULL AUTO_INCREMENT,
  `describe_product` longtext,
  `img` longtext,
  `is_delete_product` bit(1) NOT NULL,
  `name_product` varchar(255) DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `quantity` int NOT NULL,
  `id_type_product` int DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  KEY `FK8rl7x6b2pwrvpdndls1ww3pk8` (`id_type_product`),
  CONSTRAINT `FK8rl7x6b2pwrvpdndls1ww3pk8` FOREIGN KEY (`id_type_product`) REFERENCES `type_product` (`id_type_product`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Cá Bã Trầu hay còn được biết đến với những tên gọi khác như: Cá Mắt Kiếng, cá Mắt Đỏ,…Thịt cá Bã Trầu được đánh giá là ít có mùi tanh, thịt dai, vị ngọt thanh tự nhiên và da cá hơi nhám','img/product/ca-tu-nhien/ca-ba-trau.jpg',_binary '\0','Cá Bã Trầu',145000,0,1),(2,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/ca-tu-nhien/ca-ban-sa.jpg',_binary '\0','Cá Bàn Sa',240000,46,1),(3,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/ca-tu-nhien/ca-anh-duong.jpg',_binary '\0','Cá Bánh Đường',190000,49,1),(4,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/ca-tu-nhien/ca-bo-da.jpg',_binary '\0','Cá Bò Da',170000,50,1),(5,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/ca-tu-nhien/ca-bon.jpg',_binary '\0','Cá Bơn',990000,50,1),(6,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/ca-tu-nhien/ca-bop.jpg',_binary '\0','Cá Bớp',195000,50,1),(7,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/ca-tu-nhien/ca-cam.jpg',_binary '\0','Cá Cam',150000,50,1),(8,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/ca-tu-nhien/ca-chia-voi.jpg',_binary '\0','Cá Chìa Vôi',270000,50,1),(9,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/ca-tu-nhien/ca-chim-trang.jpg',_binary '\0','Cá Chim Trắng',170000,50,1),(10,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/ca-tu-nhien/ca-do.jpg',_binary '\0','Cá Dò',170000,50,1),(11,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/tom-muc/bach-tuoc.jpg',_binary '\0','Bạch Tuộc',300000,47,2),(12,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/tom-muc/muc-la.jpg',_binary '\0','Mực Lá',380000,48,2),(13,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/tom-muc/muc-ong.jpg',_binary '\0','Mực Ống',380000,49,2),(14,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/tom-muc/tom-bac.jpg',_binary '\0','Tôm Bạc',450000,50,2),(15,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/tom-muc/tom-su-bien.jpg',_binary '\0','Tôm Sú Biển',250000,50,2),(16,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/tom-muc/tom-hum-bong.jpg',_binary '\0','Tôm Hùm Bông',1390000,50,2),(17,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/tom-muc/tom-mu-ni.jpg',_binary '\0','Tôm Mũ Ni',890000,50,2),(18,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/tom-muc/tom-tit.jpg',_binary '\0','Tôm Tít',590000,50,2),(19,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/oc-hau/chipchip.jpg',_binary '\0','Chíp Chíp',80000,50,3),(20,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/oc-hau/hau-sua.jpg',_binary '\0','Hàu Sữa',95000,44,3),(21,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/oc-hau/bao-ngu.jpg',_binary '\0','Bào Ngư',375000,49,3),(22,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/oc-hau/vem-xanh.jpg',_binary '\0','Vẹm Xanh',85000,46,3),(23,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/oc-hau/oc-giac.jpg',_binary '\0','Ốc Giác',260000,50,3),(24,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/oc-hau/nhim-bien.jpg',_binary '\0','Nhím Biển',390000,50,3),(25,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/oc-hau/oc-huong.jpg',_binary '\0','Ốc Hương',410000,50,3),(26,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/oc-hau/so-mai.jpg',_binary '\0','Sò Mai',290000,50,3),(27,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/oc-hau/ngheu.jpg',_binary '\0','Nghêu',85000,50,3),(28,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/cua-ghe/cua-da-cu-lao.jpg',_binary '\0','Cua Đá Cù Lao Chàm',1200000,45,4),(29,'Cua Gạch Cà Mau là loại cua nổi tiếng ở Cà Mau. Cua luôn được nhập mới, nên luôn giữ được hương vị, thịt cua chắc,  nhiều  gạch. Được nhiều chị em lựa chọn. Cua được giao sống tận nơi, bao 1 đổi 1 nếu bị ốp.','img/product/cua-ghe/cua-ca-mau.jpg',_binary '\0','Cua Gạch Cà Mau',650000,50,4),(30,'Cua Gạch Cà Mau là loại cua nổi tiếng ở Cà Mau. Cua luôn được nhập mới, nên luôn giữ được hương vị, thịt cua chắc,  nhiều  gạch. Được nhiều chị em lựa chọn. Cua được giao sống tận nơi, bao 1 đổi 1 nếu bị ốp.','img/product/cua-ghe/cua-ca-mau.jpg',_binary '\0','Cua Thịt Cà Mau',580000,50,4),(31,'Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)','img/product/cua-ghe/ghe-xanh.jpg',_binary '\0','Ghẹ Xanh',420000,36,4),(32,'Sản phẩm tiêu thụ trong ngày','img/product/sashimi/combo1.jpg',_binary '\0','Combo Sashimi Hồi Trích Ngừ',350000,47,5),(33,'Sản phẩm tiêu thụ trong ngày','img/product/sashimi/hoi290.jpg',_binary '\0','Sashimi Cá Hồi 290',290000,47,5),(34,'Sản phẩm tiêu thụ trong ngày','img/product/sashimi/hoi350.jpg',_binary '\0','Sashimi Cá Hồi 350',350000,50,5),(35,'Sản phẩm tiêu thụ trong ngày','img/product/sashimi/hoi230.jpg',_binary '\0','Sashimi Cá Hồi 400',400000,50,5),(36,'Sản phẩm tiêu thụ trong ngày','img/product/sashimi/hoitrich230.jpg',_binary '\0','Sashimi Cá Hồi, Cá Trích 230',230000,50,5),(37,'Sản phẩm tiêu thụ trong ngày','img/product/sashimi/hoitrich400.jpg',_binary '\0','Sashimi Cá Hồi, Cá Trích 400',400000,50,5),(38,'Sản phẩm tiêu thụ trong ngày','img/product/sashimi/hoitrich370.jpg',_binary '\0','Sashimi Cá Hồi, Cá Trích 370',370000,50,5),(39,'Sản phẩm tiêu thụ trong ngày','img/product/sashimi/hoitrich40.jpg',_binary '\0','Sashimi Cá Hồi, Cá Trích 430',430000,50,5),(40,'Thành phần chính của bò viên: thịt bò, thịt trâu, thịt gà, thịt heo, thịt cá Basa, đường, muối I-ốt, nước mắm, tiêu đen, tỏi.','img/product/dong-lanh/bovien.jpg',_binary '\0','Bò Viên',40000,50,6),(41,'Cá viên TVP Food được làm từ nguyên liệu chính là cá basa tươi, có độ dai vừa phải, không chứa nhiều phụ gia nên không quá dai, cũng không nhiều bột nên viên cá quá mềm.','img/product/dong-lanh/cavien.jpg',_binary '\0','Cá Viên',40000,50,6),(42,'Sản phẩm cá viên rau củ của TVP Food thành phần chính là cá basa tươi với 85%, rau củ, gia vị… đã qua chọn lọc kỹ lưỡng và chế biến theo quy trình khép kín, hợp vệ sinh.','img/product/dong-lanh/cavienraucu.jpg',_binary '\0','Cá Viên Rau Củ',35000,50,6),(43,'Cá viên trứng cút được vo thành những viên tròn đều nhau, căng mịn và không bị móp méo.  Khi chiên, cá viên bị phồng lên đôi chút nhưng không đáng kể, sản phẩm bay mùi thơm đặc trưng do được làm từ cá basa tươi, không chứa nhiều bột hay phụ gia, giúp sản phẩm có độ dai vừa phải.','img/product/dong-lanh/cavientrung.jpg',_binary '\0','Cá Viên Trứng Cút',55000,50,6),(44,'Với cái tên sang trọng, Càng cua bách hoa không chỉ là món khai vị đẹp mắt mà còn mang đến cho người ăn một hương vị thơm ngon và vô cùng hấp dẫn: lớp vỏ vàng ươm, giòn rụm, phần thịt bên trong ngon ngọt, đậm đà.','img/product/dong-lanh/cangcua.jpg',_binary '\0','Càng Cua Bách Hoa',65000,50,6),(45,'Với cái tên sang trọng, Càng cua bách hoa không chỉ là món khai vị đẹp mắt mà còn mang đến cho người ăn một hương vị thơm ngon và vô cùng hấp dẫn: lớp vỏ vàng ươm, giòn rụm, phần thịt bên trong ngon ngọt, đậm đà.','img/product/dong-lanh/chaooc.jpg',_binary '\0','Chạo Ốc',40000,50,6),(46,'Với cái tên sang trọng, Càng cua bách hoa không chỉ là món khai vị đẹp mắt mà còn mang đến cho người ăn một hương vị thơm ngon và vô cùng hấp dẫn: lớp vỏ vàng ươm, giòn rụm, phần thịt bên trong ngon ngọt, đậm đà.','img/product/dong-lanh/chaotom.jpg',_binary '\0','Chạo Tôm Cây Mía',40000,50,6);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id_role` int NOT NULL AUTO_INCREMENT,
  `name_role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'ROLE_ADMIN'),(2,'ROLE_USER');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status_oder`
--

DROP TABLE IF EXISTS `status_oder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status_oder` (
  `id_status` int NOT NULL AUTO_INCREMENT,
  `name_status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_status`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status_oder`
--

LOCK TABLES `status_oder` WRITE;
/*!40000 ALTER TABLE `status_oder` DISABLE KEYS */;
INSERT INTO `status_oder` VALUES (1,'Chờ xử lý'),(2,'Đang giao'),(3,'Đã giao');
/*!40000 ALTER TABLE `status_oder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_product`
--

DROP TABLE IF EXISTS `type_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_product` (
  `id_type_product` int NOT NULL AUTO_INCREMENT,
  `name_type_product` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_type_product`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_product`
--

LOCK TABLES `type_product` WRITE;
/*!40000 ALTER TABLE `type_product` DISABLE KEYS */;
INSERT INTO `type_product` VALUES (1,'Cá tươi'),(2,'Tôm, mực'),(3,'Ốc, hàu, vẹm'),(4,'Cua - ghẹ'),(5,'sashimi'),(6,'Hải sản đông lạnh');
/*!40000 ALTER TABLE `type_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `day_of_birth` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` bit(1) NOT NULL,
  `is_delete_user` bit(1) NOT NULL,
  `name_user` varchar(20) DEFAULT NULL,
  `password` longtext,
  `phone` varchar(10) DEFAULT NULL,
  `id_role` int NOT NULL DEFAULT '2',
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`),
  KEY `FK6njoh3pti5jnlkowken3r8ttn` (`id_role`),
  CONSTRAINT `FK6njoh3pti5jnlkowken3r8ttn` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'1998-01-20','sangdolphin98@gmail.com',_binary '',_binary '\0','Tran Sang','123','0774538628',2),(2,'2000-01-20','phin@gmail.com',_binary '',_binary '\0','Tran Dinh','123','0774538628',2),(3,'2000-01-20','dolphin@gmail.com',_binary '',_binary '\0','Tran Dinh Dong','$2a$10$1IivCs/l2Py6p6SNjozN9OrS68wjgdkRpEsnNArP7NtspKIjSe8mq','0774538628',1),(4,'2000-01-20','dolphin1@gmail.com',_binary '',_binary '\0','Ngoc Sang','$2a$10$1IivCs/l2Py6p6SNjozN9OrS68wjgdkRpEsnNArP7NtspKIjSe8mq','0774538628',1),(5,'2000-01-20','dolphin2@gmail.com',_binary '',_binary '\0','Sang Long','$2a$10$EjKIMqHk/K8zKFh0tg2svuYUmltKBZS2nk6Uyexu7nEJ7CZn7nHHa','0774538628',2),(6,'2000-01-20','dolphin3@gmail.com',_binary '',_binary '\0','Dinh Dong','$2a$10$oF9gNNMD4/c.k9iI6BQxl.YP3b5nc85W6pU8/cZkc0fRkvOSRsLhe','0774538628',2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-06 11:51:51
