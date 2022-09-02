-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2022 at 07:42 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `mobile` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `mobile`, `createdAt`, `updatedAt`) VALUES
(1, 'akash', 'akash@gmail.com', '$2b$10$P94V7S9qCIZQpytnj0JlHeUVRXQkT67Sn4l1WVwKFumDVjPdnUPwq', 1234567891, '2022-07-27 13:25:51', '2022-07-27 13:25:51'),
(2, 'akash', 'akash1@gmail.com', '$2b$10$TkfblQvI/1xN5uf3Afnm1..EOmfLkbVQ3RB1Jx5R2OrcxULE.0CMu', 1234567891, '2022-07-28 05:12:51', '2022-07-28 05:12:51'),
(3, 'akash', 'akash2@gmail.com', '$2b$10$6iUM27DAGa8FAd13sSsq6eGASWgQUuA6cLKmPoj5ytTqs8QrTHxiC', 1234567891, '2022-07-28 05:23:49', '2022-07-28 05:23:49'),
(4, 'akash', 'akash3@gmail.com', '$2b$10$m3mxd0sHM8JT.qKw1c.OzuhDZ9/a2JVzK5epmudGIT9C9KlCeR85C', 1234567891, '2022-07-28 05:24:10', '2022-07-28 05:24:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
