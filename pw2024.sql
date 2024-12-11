-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-12-2024 a las 04:55:03
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pw2024`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(800) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `cantidadEnAlmacen` int(11) NOT NULL,
  `fechaCaducidad` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`id`, `descripcion`, `precio`, `cantidadEnAlmacen`, `fechaCaducidad`) VALUES
(1, 'Papas 1kg', 54, 30, '2024-12-11'),
(2, 'Sandia', 60, 40, '2024-06-01'),
(3, 'Papas fritas', 100, 100, '2024-05-05'),
(5, 'Manzana 1kg', 56, 10, '2024-03-12'),
(7, 'Platano 1kg', 23, 8, '2024-03-12'),
(8, 'Fresas 1kg', 59, 20, '2024-02-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `direccion` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `telefono` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `correo` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ciudad` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `direccion`, `telefono`, `correo`, `ciudad`) VALUES
(1, 'Juan Perez', 'Casa', '6672819211', 'juan@gmail.com', 'culiacan'),
(4, 'Cristiano Ronaldo', 'Arabia', '7777777777', 'cr7@gmail.com', 'Arabia'),
(5, 'Messi', 'Miami', '1010101010', 'messi@gmail.com', 'miami');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id` int(11) NOT NULL,
  `idArticulo` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `IVA` decimal(4,2) NOT NULL,
  `subtotal` int(11) NOT NULL,
  `total` double NOT NULL,
  `fechaCompra` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`id`, `idArticulo`, `cantidad`, `precio`, `IVA`, `subtotal`, `total`, `fechaCompra`) VALUES
(1, 2, 2, 60, 0.16, 120, 139.2, '2024-01-03'),
(2, 1, 2, 54, 0.16, 108, 125.28, '2024-01-10'),
(4, 2, 5, 60, 0.16, 300, 348, '2024-12-09'),
(5, 2, 5, 60, 0.16, 300, 348, '2024-12-09'),
(6, 2, 5, 60, 0.16, 300, 348, '2024-12-09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal`
--

CREATE TABLE `personal` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `direccion` varchar(300) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `personal`
--

INSERT INTO `personal` (`id`, `nombre`, `direccion`, `telefono`, `estatus`) VALUES
(8, 'Programacion web', 'Juan de Dios Batiz', '667421983', 1),
(10, 'Ingenieria Web', 'Juan de Dios Batiz', '6672281281', 1),
(12, 'Victor', 'Casa', '6679532419', 1),
(13, 'Nevarez', 'Casa Nevarez', '6670021285', 1),
(15, 'Andrew', 'Casa', '6679431201', 1),
(16, 'Clemente', 'Tec de culiacan', '6674244248', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `id` int(11) NOT NULL,
  `idPersonal` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `movimiento` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registro`
--

INSERT INTO `registro` (`id`, `idPersonal`, `fecha`, `hora`, `movimiento`) VALUES
(2, 8, '2024-01-02', '03:00:00', 'entrada'),
(7, 10, '2024-01-02', '03:00:00', 'salida'),
(8, 12, '2024-01-02', '03:00:00', 'entrada'),
(9, 8, '2024-12-01', '12:00:00', 'entrada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id` int(11) NOT NULL,
  `idArticulo` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `IVA` decimal(4,2) NOT NULL,
  `subtotal` int(11) NOT NULL,
  `total` double NOT NULL,
  `fechaVenta` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id`, `idArticulo`, `idCliente`, `cantidad`, `precio`, `IVA`, `subtotal`, `total`, `fechaVenta`) VALUES
(1, 2, 1, 2, 54, 0.16, 108, 125.28, '2024-01-10'),
(3, 3, 4, 2, 100, 0.14, 200, 228, '2024-01-10'),
(5, 2, 4, 10, 60, 0.16, 600, 696, '2024-12-10'),
(6, 8, 4, 5, 59, 0.16, 295, 342.2, '2024-12-11');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_articulo_compras` (`idArticulo`);

--
-- Indices de la tabla `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_personal_registro` (`idPersonal`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cliente_ventas` (`idCliente`),
  ADD KEY `fk_articulo_ventas` (`idArticulo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `personal`
--
ALTER TABLE `personal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `fk_articulo_compras` FOREIGN KEY (`idArticulo`) REFERENCES `articulos` (`id`);

--
-- Filtros para la tabla `registro`
--
ALTER TABLE `registro`
  ADD CONSTRAINT `fk_personal_registro` FOREIGN KEY (`idPersonal`) REFERENCES `personal` (`id`);

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `fk_articulo_ventas` FOREIGN KEY (`idArticulo`) REFERENCES `articulos` (`id`),
  ADD CONSTRAINT `fk_cliente_ventas` FOREIGN KEY (`idCliente`) REFERENCES `clientes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
