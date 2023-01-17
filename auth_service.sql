-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2023 at 01:20 AM
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
-- Database: `auth_service`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` varchar(1000) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` varchar(555) NOT NULL,
  `updatedAt` varchar(555) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
('096c27c9-2bde-472d-82a0-48f15e3b8ddc', 'test03@gmail.com', '$2b$10$1AEeUoEI8.UOdAag6H.NHu7J2xJjHzONbUf15kf8aWpzi5ne/njZy', '2023-01-16 22:17:48', '2023-01-16 22:17:48'),
('38877821-946a-47fd-b637-4c47f5fb4993', 'test02@gmail.com', '$2b$10$FwYPP0rWpsSXg7K/XXLv7eEFVbl27uDxF8ETfoHLGYLykZzSgP68G', '2023-01-16 22:16:24', '2023-01-16 22:16:24'),
('88f0dccd-910d-44a6-a24c-80357c46aebe', 'abdulkoday.daoh@gmail.com', '$2b$10$CKHwY7S8HsAVvN7MdGTdcOT6ZD5v1Q.X/UDydoM72z80AsP9GFrP6', '2023-01-16 18:14:07', '2023-01-16 18:14:07'),
('92fbb9fc-a713-4409-9b14-714d36899011', 'test01@gmail.com', '$2b$10$AwqfzJc0QdHvWkHz8jJLZeUDPwY.RsaCP/VWzBRrfmCxhakprynie', '2023-01-16 22:15:33', '2023-01-16 22:15:33'),
('97a4a3f2-ba5a-46d5-8d8f-7febba7c7da9', 'test1222@gmail.com', '$2b$10$fP3ffqg8EZVzAfGjgxvVJ.3cFuPq9B6nEwPJRYcOhR0DpDhHR00wm', '2023-01-16 22:21:06', '2023-01-16 22:21:06'),
('9a2a66b1-e70d-43a4-99b0-8176dc5b7686', 'test11@gmail.com', '$2b$10$F86yXELDJDMK1v9S65glmOXEgmoYYLBR1W0zVgrbuV81iQWWxY.i6', '2023-01-16 22:20:32', '2023-01-16 22:20:32'),
('9ba1d641-65b6-4696-b77d-76edc09d2a23', 'test09@gmail.com', '$2b$10$WENN3JcWEvhXnPgjYoztP.1W.yq.e.YvrxwtJyav7BOuF1zzbj7ty', '2023-01-16 22:17:58', '2023-01-16 22:17:58'),
('ace2fbb0-7b86-48da-9f0c-a1d7dc32c404', 'abdulkoday15.daoh@gmail.com', '$2b$10$ueTNpEMGDHtXKP/dZUs61eRT7a86J9rMMamf1Oo1tqdb.0c2K.jOS', '2023-01-16 17:46:11', '2023-01-16 17:46:11'),
('c4a96f08-4b09-424c-8edc-46d214b9192f', 'test122kjk2@gmail.com', '$2b$10$jvLTYYwv6XJaEPmwzSaZP.f0jvvAy5GkjphbTHCU3CRRGJEFvNZEi', '2023-01-16 22:23:18', '2023-01-16 22:23:18'),
('c63220a4-f4fd-4d84-84bc-243deba033d3', 'test@gmail.com', '$2b$10$plhkNIPFi9goqqbjwy/qL.vBNhAvfFOdnAqTQIfvWLsw/uik70iiG', '2023-01-16 22:15:04', '2023-01-16 22:15:04'),
('ea157c5c-7000-4357-8174-a313824abfae', 'test10@gmail.com', '$2b$10$Mk7zLLqzTpAzCvnGl14a/eCwdzq3jggup2Mxo9u7x.DClD4OBEyJC', '2023-01-16 22:19:33', '2023-01-16 22:19:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
