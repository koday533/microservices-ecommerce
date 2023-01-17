-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2023 at 01:21 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `product_service`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` varchar(1000) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` double(13,2) NOT NULL,
  `detail` longtext NOT NULL,
  `stock` int(11) NOT NULL,
  `photoUrl` longtext NOT NULL,
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `price`, `detail`, `stock`, `photoUrl`, `createdAt`, `updatedAt`) VALUES
('29b12fda-4c3e-4cb8-9cc5-7c0674d70aa3', 'กางเกง', 20.00, 'กางเกง ราคาถูก vbvbvbvbvbvb', 22, 'trtrtrtrtrt', '2023-01-16 14:09:06', '2023-01-16 14:09:06'),
('f57750ab-56e9-4cfc-a337-58d797faaae3', 'กางเกง', 20.00, 'กางเกง ราคาถูก', 10, 'trtrtrtrtrt', '2023-01-16 14:00:25', '2023-01-16 14:00:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
