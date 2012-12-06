-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 06, 2012 at 06:25 PM
-- Server version: 5.1.44
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `insource`
--

-- --------------------------------------------------------

--
-- Table structure for table `graphic`
--

CREATE TABLE IF NOT EXISTS `graphic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `bio` text NOT NULL,
  `picture` text NOT NULL,
  `portfolio` text NOT NULL,
  `resume` varchar(45) NOT NULL,
  `key` varchar(45) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `graphic`
--

INSERT INTO `graphic` (`id`, `name`, `email`, `phone`, `bio`, `picture`, `portfolio`, `resume`, `key`) VALUES
(1, 'Kaitlyn Irvine', 'kaitlyn.irvine@ufl.edu', '352-519-9315', 'Kaitlyn Irvine''s sophisticated and organized design sense blossomed from an interest in cleaning and rearranging her room as a child. As a designer, her diverse experience ranges from advertising and branding to packaging and print publications of all sizes. With a clear drive and passion for the creative process, Kaitlyn seeks to exceed your expectations in communication and execution.', '/content/irvine/headshot.png', 'Irvine_1.jpg,Irvine_2.jpg,Irvine_3.jpg,Irvine_4.png,Irvine_5.png,Irvine_6.jpg,Irvine_7.png', 'Irvine-Resume.pdf', 'irvine');

-- --------------------------------------------------------

--
-- Table structure for table `photography`
--

CREATE TABLE IF NOT EXISTS `photography` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `bio` text NOT NULL,
  `picture` varchar(45) NOT NULL,
  `portfolio` varchar(45) NOT NULL,
  `resume` varchar(45) NOT NULL,
  `key` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `photography`
--


-- --------------------------------------------------------

--
-- Table structure for table `webdesign`
--

CREATE TABLE IF NOT EXISTS `webdesign` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `bio` text NOT NULL,
  `picture` text NOT NULL,
  `portfolio` text NOT NULL,
  `resume` varchar(45) NOT NULL,
  `key` varchar(45) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `webdesign`
--

INSERT INTO `webdesign` (`id`, `name`, `email`, `phone`, `bio`, `picture`, `portfolio`, `resume`, `key`) VALUES
(6, 'Kaushik Shinadi', 'shanadik6@ufl.edu', '407-927-6813', 'I am a senior majoring in Information Systems. I have advanced level skills in web design/development, using Content Management Systems (WordPress, Joomla), and editing CSS. ', '/content/shinadi/profile.png', 'Kaushik_1.png,Kaushik_2.png', '', 'shinadi'),
(5, 'John Rodstrom', 'jrodstrom@ufl.edu', '(954) 232-2803', 'I am a third year Finance major with a minor in Entrepreneurship at the University of Florida. Over the past 7 years I have worked as the CEO of my own company Real Web Technologies, Inc. which provides corporate branding and web services. I have an extensive background working with my own team of designers and developers as a project manager to create stunning logos and beautiful websites which we can print and host for our clients.', '/content/rodstrom/headshot.jpg', 'rodstrom_10.jpg,rodstrom_3.jpg,rodstrom_5.jpg,rodstrom_7.jpg,rodstrom_9.jpg,rodstrom_1.jpg,rodstrom_2.jpg,rodstrom_4.jpg,rodstrom_6.jpg,rodstrom_8.jpg', '', 'rodstrom');
