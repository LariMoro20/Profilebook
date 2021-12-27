-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28-Ago-2021 às 00:14
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `profiledb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `id_user_from` int(11) NOT NULL,
  `id_user_to` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `message` text NOT NULL,
  `liked` int(2) NOT NULL DEFAULT 0,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `messages`
--

INSERT INTO `messages` (`id`, `id_user_from`, `id_user_to`, `title`, `message`, `liked`, `date`) VALUES
(1, 12, 14, 'Olá!!', 'Como  vai? ', 0, '2021-08-26 00:06:02'),
(2, 12, 13, 'Oi, sobre o trabalho...', 'oi amigo, como está o andamento..', 0, '2021-08-26 20:08:20'),
(3, 13, 12, 'Aula', 'Vai entrar na aula hoje?', 0, '2021-08-26 20:20:01'),
(6, 12, 13, 'Boa tarde', 'Hoje tem prova colega! Bora lá', 1, '2021-08-26 20:33:13'),
(15, 12, 14, 'Noto', 'teste', 0, '2021-08-26 21:54:04'),
(16, 18, 12, 'Aula hoje', 'teste', 1, '2021-08-26 21:56:40');

-- --------------------------------------------------------

--
-- Estrutura da tabela `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `liked` int(2) NOT NULL DEFAULT 0,
  `date_add` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `posts`
--

INSERT INTO `posts` (`id`, `id_user`, `title`, `description`, `liked`, `date_add`) VALUES
(124, 11, 'dsfsdfsdfdssdf', 'sdfdsf', 0, '2021-08-25 23:25:05'),
(125, 12, 'Teste', 'novo', 1, '2021-08-25 23:43:20'),
(131, 18, 'Teste', 'dqqwqe', 0, '2021-08-26 21:56:14');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `passwd` varchar(200) DEFAULT NULL,
  `image` text NOT NULL,
  `location` text DEFAULT NULL,
  `bio` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `username`, `name`, `email`, `passwd`, `image`, `location`, `bio`) VALUES
(12, 'larimoro20', 'Larissa Moro', 'wasda', 'xzczxczxc', 'https://github.com/larimoro20.png', '', 'Analysis and Systems Development. \r\nFullStack Developer.'),
(13, 'marcelogoncalvesgoulart', 'marcelogoncalvesgoulart', 'marcelo@teste.com', '12346', 'https://github.com/marcelogoncalvesgoulart.png', NULL, NULL),
(14, 'ctqueiroz', 'CARLOS TADEU QUEIROZ DE MORAIS', 'sadad', 'adasdad', 'https://github.com/ctqueiroz.png', NULL, NULL),
(17, 'luisrodrigoads', 'Luis Rodrigo Pereira Cardoso', 'luisrodrigoads@github.com', '1223456', 'https://github.com/luisrodrigoads.png', NULL, NULL),
(18, 'PrBF', 'Bruno Fernandes', 'prof@daasd', '1223213', 'https://github.com/PrBF.png', NULL, 'Professor de Informática');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
