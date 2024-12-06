/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;

/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--
CREATE DATABASE IF NOT EXISTS `pw2024`;

USE `pw2024`;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `articulos`
--
CREATE TABLE `articulos` (
    `id` int(11) NOT NULL,
    `descripcion` varchar(800) CHARACTER
    SET
        utf8 COLLATE utf8_general_ci NOT NULL,
        `precio` int(11) NOT NULL,
        `cantidadEnAlmacen` int(11) NOT NULL,
        `fechaCaducidad` date NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `articulos`
--
INSERT INTO
    `articulos` (
        `id`,
        `descripcion`,
        `precio`,
        `cantidadEnAlmacen`,
        `fechaCaducidad`
    )
VALUES
    (1, 'Papas', 54, 40, '2024-12-11'),
    (2, 'Sandia', 60, 35, '2024-06-01'),
    (3, 'Papas fritas', 100, 100, '2024-05-05');

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `clientes`
--
CREATE TABLE `clientes` (
    `id` int(11) NOT NULL,
    `nombre` varchar(200) CHARACTER
    SET
        utf8 COLLATE utf8_general_ci NOT NULL,
        `direccion` varchar(300) CHARACTER
    SET
        utf8 COLLATE utf8_general_ci NOT NULL,
        `telefono` bigint(15) NOT NULL,
        `correo` varchar(200) CHARACTER
    SET
        utf8 COLLATE utf8_general_ci NOT NULL,
        `ciudad` varchar(100) CHARACTER
    SET
        utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--
INSERT INTO
    `clientes` (
        `id`,
        `nombre`,
        `direccion`,
        `telefono`,
        `correo`,
        `ciudad`
    )
VALUES
    (
        1,
        'Juan Perez',
        'Casa',
        6672819211,
        'juan@gmail.com',
        'culiacan'
    ),
    (
        4,
        'Cristiano Ronaldo',
        'Madrid',
        7777777777,
        'cr7@gmail.com',
        'Madrid'
    );

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `compras`
--
CREATE TABLE `compras` (
    `id` int(11) NOT NULL,
    `idArticulo` int(11) NOT NULL,
    `cantidad` int(11) NOT NULL,
    `precio` int(11) NOT NULL,
    `IVA` decimal(4, 2) NOT NULL,
    `subtotal` int(11) NOT NULL,
    `total` double NOT NULL,
    `fechaCompra` date NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `compras`
--
INSERT INTO
    `compras` (
        `id`,
        `idArticulo`,
        `cantidad`,
        `precio`,
        `IVA`,
        `subtotal`,
        `total`,
        `fechaCompra`
    )
VALUES
    (1, 2, 2, 60, 0.16, 120, 139.2, '2024-01-03'),
    (2, 1, 2, 54, 0.16, 108, 125.28, '2024-01-10');

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `personal`
--
CREATE TABLE `personal` (
    `id` int(11) NOT NULL,
    `nombre` varchar(200) CHARACTER
    SET
        utf8 COLLATE utf8_general_ci DEFAULT NULL,
        `direccion` varchar(300) DEFAULT NULL,
        `telefono` varchar(15) DEFAULT NULL,
        `estatus` int(1) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `personal`
--
INSERT INTO
    `personal` (
        `id`,
        `nombre`,
        `direccion`,
        `telefono`,
        `estatus`
    )
VALUES
    (
        8,
        'Programacion web',
        'Juan de Dios Batiz',
        667421983,
        1
    ),
    (
        10,
        'Ingenieria Web',
        'Juan de Dios Batiz',
        2147483647,
        1
    ),
    (12, 'gatoguapo', 'casa gato', 2147483647, 1),
    (13, 'Chikis', 'Casa Chikis', 2147483647, 1);

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
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

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
    `IVA` decimal(4, 2) NOT NULL,
    `subtotal` int(11) NOT NULL,
    `total` double NOT NULL,
    `fechaVenta` date NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas`
--
INSERT INTO
    `ventas` (
        `id`,
        `idArticulo`,
        `idCliente`,
        `cantidad`,
        `precio`,
        `IVA`,
        `subtotal`,
        `total`,
        `fechaVenta`
    )
VALUES
    (1, 2, 1, 2, 54, 0.16, 108, 125.28, '2024-01-10'),
    (3, 3, 4, 2, 100, 0.14, 200, 228, '2024-01-10');

--
-- Índices para tablas volcadas
--
--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos` ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes` ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras` ADD PRIMARY KEY (`id`),
ADD KEY `fk_articulo_compras` (`idArticulo`);

--
-- Indices de la tabla `personal`
--
ALTER TABLE `personal` ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro` ADD PRIMARY KEY (`id`),
ADD KEY `fk_personal_registro` (`idPersonal`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas` ADD PRIMARY KEY (`id`),
ADD KEY `fk_cliente_ventas` (`idCliente`),
ADD KEY `fk_articulo_ventas` (`idArticulo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--
--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 5;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 5;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 4;

--
-- AUTO_INCREMENT de la tabla `personal`
--
ALTER TABLE `personal` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 15;

--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 5;

--
-- Restricciones para tablas volcadas
--
--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras` ADD CONSTRAINT `fk_articulo_compras` FOREIGN KEY (`idArticulo`) REFERENCES `articulos` (`id`);

--
-- Filtros para la tabla `registro`
--
ALTER TABLE `registro` ADD CONSTRAINT `fk_personal_registro` FOREIGN KEY (`idPersonal`) REFERENCES `personal` (`id`);

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas` ADD CONSTRAINT `fk_articulo_ventas` FOREIGN KEY (`idArticulo`) REFERENCES `articulos` (`id`),
ADD CONSTRAINT `fk_cliente_ventas` FOREIGN KEY (`idCliente`) REFERENCES `clientes` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
