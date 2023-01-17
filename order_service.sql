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
-- Database: `order_service`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` varchar(1000) NOT NULL,
  `product_id` varchar(1000) NOT NULL,
  `member_id` varchar(1000) NOT NULL,
  `itemt` int(11) NOT NULL,
  `amount` double(13,2) NOT NULL,
  `status` int(11) NOT NULL COMMENT '// 1 = รอชำระเงิน  2 = ตรวจสอบการชำระเงิน 3 = เตรียมการจัดส่ง 4 = จัดส่งแล้ว 5 = ยกเลิก 6 = ล้มเหลว',
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `product_id`, `member_id`, `itemt`, `amount`, `status`, `createdAt`, `updatedAt`) VALUES
('05cab9ec-d74f-4fb0-9490-82a4e76cd317', '29b12fda-4c3e-4cb8-9cc5-7c0674d70aa3', '88f0dccd-910d-44a6-a24c-80357c46aebe', 2, 40.00, 5, '2023-01-16 20:46:40', '2023-01-16 23:57:58'),
('11031dab-725a-486d-959c-ee7c79be494b', '29b12fda-4c3e-4cb8-9cc5-7c0674d70aa3', '88f0dccd-910d-44a6-a24c-80357c46aebe', 2, 40.00, 5, '2023-01-16 20:48:11', '2023-01-16 21:19:25'),
('ded4e2e8-7c4f-4dfd-b679-106b16a61ea9', '29b12fda-4c3e-4cb8-9cc5-7c0674d70aa3', '88f0dccd-910d-44a6-a24c-80357c46aebe', 1, 20.00, 1, '2023-01-16 23:55:34', '2023-01-16 23:55:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
