-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: exdb
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20230319071442-create-tbl-user-masters.js'),('20230319100959-create-tbl-subsidary-masters.js'),('20230319101142-create-tbl-mattrix-masters.js'),('20230319101257-create-tbl-subsidary-mattrix-mapings.js'),('20230319101653-create-tbl-head-masters.js'),('20230319101812-create-tbl-head-meta.js'),('20230319175256-modify_user_masters_add_new_fields.js'),('20230323180300-create-tbl-role-master.js'),('20230323200811-create-tbl-role-module-mappings.js'),('20230323201805-create-tbl-module-masters.js'),('20230325185033-modify-tbl_users_maters.js'),('20230326161639-modifify-tbl_user_masters.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_head_masters`
--

DROP TABLE IF EXISTS `tbl_head_masters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_head_masters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sub_mat_id` int NOT NULL,
  `subsidary_id` int NOT NULL,
  `mattrix_id` int NOT NULL,
  `head_name` varchar(100) DEFAULT NULL,
  `status` int NOT NULL DEFAULT '1',
  `createdBy` int DEFAULT NULL,
  `updatedBy` int DEFAULT NULL,
  `deletedBy` int DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_head_masters`
--

LOCK TABLES `tbl_head_masters` WRITE;
/*!40000 ALTER TABLE `tbl_head_masters` DISABLE KEYS */;
INSERT INTO `tbl_head_masters` VALUES (1,1,1,1,'head1',1,1,NULL,NULL,NULL,'2023-03-26 07:38:31','2023-03-26 07:41:23'),(2,1,1,2,'head2',1,1,NULL,NULL,NULL,'2023-03-26 07:38:57','2023-03-26 07:38:57');
/*!40000 ALTER TABLE `tbl_head_masters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_head_meta`
--

DROP TABLE IF EXISTS `tbl_head_meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_head_meta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subsidary_id` int NOT NULL,
  `mattrix_id` int NOT NULL,
  `head_id` int DEFAULT NULL,
  `head_value` int DEFAULT NULL,
  `financial_year` int NOT NULL,
  `month` int NOT NULL,
  `createdBy` int DEFAULT NULL,
  `updatedBy` int DEFAULT NULL,
  `deletedBy` int DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_head_meta`
--

LOCK TABLES `tbl_head_meta` WRITE;
/*!40000 ALTER TABLE `tbl_head_meta` DISABLE KEYS */;
INSERT INTO `tbl_head_meta` VALUES (1,1,1,1,123,2023,1,1,NULL,NULL,NULL,'2023-03-26 08:29:42','2023-03-26 09:03:37'),(2,1,1,1,1,2023,4,1,NULL,NULL,NULL,'2023-03-26 08:30:18','2023-03-26 08:30:18'),(3,1,2,2,1,2023,1,1,NULL,NULL,NULL,'2023-03-26 08:31:53','2023-03-26 08:31:53'),(4,1,2,2,1,2023,6,1,NULL,NULL,NULL,'2023-03-26 08:32:02','2023-03-26 08:32:02'),(5,1,1,1,1,2023,10,1,NULL,NULL,NULL,'2023-03-26 08:32:07','2023-03-26 08:32:07'),(6,1,2,2,1,2023,12,1,NULL,NULL,NULL,'2023-03-26 08:32:10','2023-03-26 08:32:10'),(7,1,2,2,1,2023,4,1,NULL,NULL,NULL,'2023-03-26 08:32:15','2023-03-26 08:32:15'),(8,1,1,1,100,2023,6,1,NULL,NULL,NULL,'2023-03-26 08:32:20','2023-03-26 08:32:20'),(9,1,1,1,123,2023,12,1,NULL,NULL,NULL,'2023-03-26 08:32:47','2023-03-26 08:32:47');
/*!40000 ALTER TABLE `tbl_head_meta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_mattrix_masters`
--

DROP TABLE IF EXISTS `tbl_mattrix_masters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_mattrix_masters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `status` int NOT NULL DEFAULT '1',
  `createdBy` int DEFAULT NULL,
  `updatedBy` int DEFAULT NULL,
  `deletedBy` int DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_mattrix_masters`
--

LOCK TABLES `tbl_mattrix_masters` WRITE;
/*!40000 ALTER TABLE `tbl_mattrix_masters` DISABLE KEYS */;
INSERT INTO `tbl_mattrix_masters` VALUES (1,'Matric1',1,1,NULL,NULL,NULL,'2023-03-26 07:37:27','2023-03-26 07:37:27'),(2,'matrix2',1,1,NULL,NULL,NULL,'2023-03-26 07:37:56','2023-03-26 07:37:56');
/*!40000 ALTER TABLE `tbl_mattrix_masters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_module_masters`
--

DROP TABLE IF EXISTS `tbl_module_masters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_module_masters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `createdBy` int DEFAULT NULL,
  `updatedBy` int DEFAULT NULL,
  `deletedBy` int DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_module_masters`
--

LOCK TABLES `tbl_module_masters` WRITE;
/*!40000 ALTER TABLE `tbl_module_masters` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_module_masters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_role_masters`
--

DROP TABLE IF EXISTS `tbl_role_masters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_role_masters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `short_name` varchar(30) DEFAULT NULL,
  `status` varchar(2) NOT NULL DEFAULT '1' COMMENT '1-Active, 0-De-Active',
  `createdBy` int DEFAULT NULL,
  `updatedBy` int DEFAULT NULL,
  `deletedBy` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_role_masters`
--

LOCK TABLES `tbl_role_masters` WRITE;
/*!40000 ALTER TABLE `tbl_role_masters` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_role_masters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_role_module_mappings`
--

DROP TABLE IF EXISTS `tbl_role_module_mappings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_role_module_mappings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_id` varchar(255) DEFAULT NULL,
  `module_id` varchar(255) DEFAULT NULL,
  `createdBy` int DEFAULT NULL,
  `updatedBy` int DEFAULT NULL,
  `deletedBy` int DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_role_module_mappings`
--

LOCK TABLES `tbl_role_module_mappings` WRITE;
/*!40000 ALTER TABLE `tbl_role_module_mappings` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_role_module_mappings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_subsidary_masters`
--

DROP TABLE IF EXISTS `tbl_subsidary_masters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_subsidary_masters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `code` varchar(100) NOT NULL,
  `short_name` varchar(30) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `status` int NOT NULL DEFAULT '1',
  `createdBy` int DEFAULT NULL,
  `updatedBy` int DEFAULT NULL,
  `deletedBy` int DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `mobile` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_subsidary_masters`
--

LOCK TABLES `tbl_subsidary_masters` WRITE;
/*!40000 ALTER TABLE `tbl_subsidary_masters` DISABLE KEYS */;
INSERT INTO `tbl_subsidary_masters` VALUES (1,'Subsidary1','13143','sb1','sub1@mail.com','11223344',1,1,NULL,NULL,NULL,'2023-03-25 19:23:50','2023-03-25 19:23:50'),(2,'Subsidary2','12241244','s31221','sdffgfd@mail.com','6754636346',1,1,NULL,NULL,NULL,'2023-03-26 08:08:59','2023-03-26 08:08:59');
/*!40000 ALTER TABLE `tbl_subsidary_masters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user_masters`
--

DROP TABLE IF EXISTS `tbl_user_masters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_user_masters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `address` varchar(150) DEFAULT NULL,
  `role_id` int DEFAULT NULL,
  `subsidary_id` int DEFAULT NULL,
  `status` int NOT NULL DEFAULT '1',
  `createdBy` int DEFAULT NULL,
  `updatedBy` int DEFAULT NULL,
  `deletedBy` int DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `is_add` tinyint(1) DEFAULT NULL,
  `is_delete` tinyint(1) DEFAULT NULL,
  `is_edit` tinyint(1) DEFAULT NULL,
  `password_value` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `mobile` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user_masters`
--

LOCK TABLES `tbl_user_masters` WRITE;
/*!40000 ALTER TABLE `tbl_user_masters` DISABLE KEYS */;
INSERT INTO `tbl_user_masters` VALUES (1,'super','admin','$2b$10$csmkCzrBPbrCDd2Xo39XYOafN8bFP4cUGoSoDhUp33UlnT0PB6BKG','superadmin@mail.com','1345678','sfgdhjk',1,NULL,1,1,1,NULL,NULL,'2023-03-24 03:03:39','2023-03-27 17:56:24','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6InN1cGVyIiwibGFzdF9uYW1lIjoiYWRtaW4iLCJlbWFpbCI6InN1cGVyYWRtaW5AbWFpbC5jb20iLCJpYXQiOjE2Nzk5Mzk3ODQsImV4cCI6MTY4MDExMjU4NH0.es4MdC7tSEMRHFvA86GenIW9mI6kjCAemi7XAZc8uYg',1,1,1,NULL),(2,'Suvam2','Raj2','$2b$10$csmkCzrBPbrCDd2Xo39XYOafN8bFP4cUGoSoDhUp33UlnT0PB6BKG','suvamraj@mail.com','123456','Kolkata',2,1,1,1,NULL,NULL,NULL,'2023-03-25 19:27:53','2023-03-27 17:54:49','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3RfbmFtZSI6IlN1dmFtMiIsImxhc3RfbmFtZSI6IlJhajIiLCJlbWFpbCI6InN1dmFtcmFqQG1haWwuY29tIiwiaWF0IjoxNjc5OTM5Njg5LCJleHAiOjE2ODAxMTI0ODl9.U7WkMUao3fKvg1XMmQcgV_N0bOwhSw5IFMY9iaBa4Ww',1,1,0,NULL),(3,'joydeep','bandhopadhay','$2b$10$VTR1QkvazN9hcGpHwM38UOIkPHQcnr5vF7zy1cYnFfH/PJC84SwCa','joydeep@mail.com','86752345','Kolkata',2,1,1,1,NULL,NULL,NULL,'2023-03-25 19:36:12','2023-03-25 19:36:12',NULL,0,1,1,NULL);
/*!40000 ALTER TABLE `tbl_user_masters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-27 23:43:00
