-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 22, 2023 at 05:06 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uwc`
--

-- --------------------------------------------------------

--
-- Table structure for table `Tasks`
--

CREATE TABLE `Tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `staff_id` int(11) DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL,
  `vehicle_id` int(11) DEFAULT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Tasks`
--

INSERT INTO `Tasks` (`id`, `title`, `staff_id`, `location_id`, `vehicle_id`, `note`, `time`, `createdAt`, `updatedAt`) VALUES
(1, 'task 1', 1, 2, 3, 'task 1', '2023-04-22 05:25:24', '2023-04-21 21:52:47', '2023-04-21 21:52:47'),
(2, 'task 2', 1, 2, 3, 'task 2', '2023-04-22 05:25:24', '2023-04-21 21:54:08', '2023-04-21 21:54:08'),
(28, 'task 28', 1, 1, 3, 'task 28', '2023-04-22 05:25:24', '2023-04-22 04:07:10', '2023-04-22 04:07:10'),
(29, 'task 29', 1, 1, 3, 'task 29', '2023-04-22 04:00:37', '2023-04-22 04:10:48', '2023-04-22 04:10:48'),
(30, 'task 30', 1, 1, 1, 'task 30', '2023-04-22 05:25:24', '2023-04-22 05:25:35', '2023-04-22 05:25:35'),
(31, 'task30', 1, 1, 0, '7', '2023-04-22 06:47:48', '2023-04-22 07:21:08', '2023-04-22 07:21:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Tasks`
--
ALTER TABLE `Tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Tasks`
--
ALTER TABLE `Tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
