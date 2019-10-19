/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.1.37-MariaDB : Database - repuestos
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`repuestos` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci */;

USE `repuestos`;

/*Table structure for table `categoria` */

DROP TABLE IF EXISTS `categoria`;

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

/*Data for the table `categoria` */

insert  into `categoria`(`id`,`nombre_categoria`) values (1,'Notebook'),(2,'Tablet'),(3,'Almacenamiento'),(4,'Periféricos'),(5,'Celular'),(6,'Audifonos'),(7,'Cables'),(8,'Pantallas'),(9,'Routers'),(10,'Tarjetas gráficas'),(11,'Memorias ram');

/*Table structure for table `clientes` */

DROP TABLE IF EXISTS `clientes`;

CREATE TABLE `clientes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `rut` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `direccion` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `ciudad` int(11) DEFAULT NULL,
  `fono_1` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fono_2` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `referencia` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `giro` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `credito_autorizado` int(11) DEFAULT NULL,
  `observacion` text COLLATE utf8_spanish_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `clientes` */

insert  into `clientes`(`id`,`rut`,`nombre`,`direccion`,`ciudad`,`fono_1`,`fono_2`,`referencia`,`giro`,`credito_autorizado`,`observacion`) values (1,'139858778','MARCELO ANDRES RIQUELME','CHILE NUEVO PASAJE AZUCENA 376',58,'9 56836053','','CASA CAFE CON PADERETAS !!!','INFORMÁTICA',105,'SIN OBSERVACIÓN !!!!'),(2,'158958785','ANDRES CHAPA ARAYA','SAN VICENTE 960 - QUILLOTA',59,'9 56897845','','S/F','INFORMÁTICA',0,'SIN OBSERVACION');

/*Table structure for table `comunas` */

DROP TABLE IF EXISTS `comunas`;

CREATE TABLE `comunas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) DEFAULT NULL,
  `idProvincia` int(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `COMUNA_PROVINCIA_ID` (`idProvincia`),
  CONSTRAINT `comunas_ibfk_1` FOREIGN KEY (`idProvincia`) REFERENCES `provincias` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=347 DEFAULT CHARSET=utf8;

/*Data for the table `comunas` */

insert  into `comunas`(`id`,`nombre`,`idProvincia`) values (1,'Iquique',3),(2,'Alto Hospicio',3),(3,'Pozo Almonte',4),(4,'Camiña',4),(5,'Colchane',4),(6,'Huara',4),(7,'Pica',4),(8,'Antofagasta',5),(9,'Mejillones',5),(10,'Sierra Gorda',5),(11,'Taltal',5),(12,'Calama',6),(13,'Ollagüe',6),(14,'San Pedro de Atacama',6),(15,'Tocopilla',7),(16,'María Elena',7),(17,'Copiapó',8),(18,'Caldera',8),(19,'Tierra Amarilla',8),(20,'Chañaral',9),(21,'Diego de Almagro',9),(22,'Vallenar',10),(23,'Alto del Carmen',10),(24,'Freirina',10),(25,'Huasco',10),(26,'La Serena',11),(27,'Coquimbo',11),(28,'Andacollo',11),(29,'La Higuera',11),(30,'Paihuano',11),(31,'Vicuña',11),(32,'Illapel',12),(33,'Canela',12),(34,'Los Vilos',12),(35,'Salamanca',12),(36,'Ovalle',13),(37,'Combarbalá',13),(38,'Monte Patria',13),(39,'Punitaqui',13),(40,'Río Hurtado',13),(41,'Valparaíso',14),(42,'Casablanca',14),(43,'Concón',14),(44,'Juan Fernández',14),(45,'Puchuncaví',14),(46,'Quintero',14),(47,'Viña del Mar',14),(48,'Isla de Pascua',15),(49,'Los Andes',16),(50,'Calle Larga',16),(51,'Rinconada',16),(52,'San Esteban',16),(53,'La Ligua',17),(54,'Cabildo',17),(55,'Papudo',17),(56,'Petorca',17),(57,'Zapallar',17),(58,'Quillota',18),(59,'La Calera',18),(60,'Hijuelas',18),(61,'La Cruz',18),(62,'Nogales',18),(63,'San Antonio',19),(64,'Algarrobo',19),(65,'Cartagena',19),(66,'El Quisco',19),(67,'El Tabo',19),(68,'Santo Domingo',19),(69,'San Felipe',20),(70,'Catemu',20),(71,'Llay Llay',20),(72,'Panquehue',20),(73,'Putaendo',20),(74,'Santa María',20),(75,'Quilpué',21),(76,'Limache',21),(77,'Olmué',21),(78,'Villa Alemana',21),(79,'Rancagua',22),(80,'Codegua',22),(81,'Coinco',22),(82,'Coltauco',22),(83,'Doñihue',22),(84,'Graneros',22),(85,'Las Cabras',22),(86,'Machalí',22),(87,'Malloa',22),(88,'Mostazal',22),(89,'Olivar',22),(90,'Peumo',22),(91,'Pichidegua',22),(92,'Quinta de Tilcoco',22),(93,'Rengo',22),(94,'Requínoa',22),(95,'San Vicente',22),(96,'Pichilemu',23),(97,'La Estrella',23),(98,'Litueche',23),(99,'Marchihue',23),(100,'Navidad',23),(101,'Paredones',23),(102,'San Fernando',24),(103,'Chépica',24),(104,'Chimbarongo',24),(105,'Lolol',24),(106,'Nancagua',24),(107,'Palmilla',24),(108,'Peralillo',24),(109,'Placilla',24),(110,'Pumanque',24),(111,'Santa Cruz',24),(112,'Talca',25),(113,'Constitución',25),(114,'Curepto',25),(115,'Empedrado',25),(116,'Maule',25),(117,'Pelarco',25),(118,'Pencahue',25),(119,'Río Claro',25),(120,'San Clemente',25),(121,'San Rafael',25),(122,'Cauquenes',26),(123,'Chanco',26),(124,'Pelluhue',26),(125,'Curicó',27),(126,'Hualañé',27),(127,'Licantén',27),(128,'Molina',27),(129,'Rauco',27),(130,'Romeral',27),(131,'Sagrada Familia',27),(132,'Teno',27),(133,'Vichuquén',27),(134,'Linares',28),(135,'Colbún',28),(136,'Longaví',28),(137,'Parral',28),(138,'Retiro',28),(139,'San Javier',28),(140,'Villa Alegre',28),(141,'Yerbas Buenas',28),(142,'Concepción',29),(143,'Coronel',29),(144,'Chiguayante',29),(145,'Florida',29),(146,'Hualqui',29),(147,'Lota',29),(148,'Penco',29),(149,'San Pedro de la Paz',29),(150,'Santa Juana',29),(151,'Talcahuano',29),(152,'Tomé',29),(153,'Hualpén',29),(154,'Lebu',30),(155,'Arauco',30),(156,'Cañete',30),(157,'Contulmo',30),(158,'Curanilahue',30),(159,'Los Álamos',30),(160,'Tirúa',30),(161,'Los Ángeles',31),(162,'Antuco',31),(163,'Cabrero',31),(164,'Laja',31),(165,'Mulchén',31),(166,'Nacimiento',31),(167,'Negrete',31),(168,'Quilaco',31),(169,'Quilleco',31),(170,'San Rosendo',31),(171,'Santa Bárbara',31),(172,'Tucapel',31),(173,'Yumbel',31),(174,'Alto Biobío',31),(175,'Chillán',32),(176,'Bulnes',32),(177,'Cobquecura',32),(178,'Coelemu',32),(179,'Coihueco',32),(180,'Chillán Viejo',32),(181,'El Carmen',32),(182,'Ninhue',32),(183,'Ñiquén',32),(184,'Pemuco',32),(185,'Pinto',32),(186,'Portezuelo',32),(187,'Quillón',32),(188,'Quirihue',32),(189,'Ránquil',32),(190,'San Carlos',32),(191,'San Fabián',32),(192,'San Ignacio',32),(193,'San Nicolás',32),(194,'Treguaco',32),(195,'Yungay',32),(196,'Temuco',33),(197,'Carahue',33),(198,'Cunco',33),(199,'Curarrehue',33),(200,'Freire',33),(201,'Galvarino',33),(202,'Gorbea',33),(203,'Lautaro',33),(204,'Loncoche',33),(205,'Melipeuco',33),(206,'Nueva Imperial',33),(207,'Padre las Casas',33),(208,'Perquenco',33),(209,'Pitrufquén',33),(210,'Pucón',33),(211,'Saavedra',33),(212,'Teodoro Schmidt',33),(213,'Toltén',33),(214,'Vilcún',33),(215,'Villarrica',33),(216,'Cholchol',33),(217,'Angol',34),(218,'Collipulli',34),(219,'Curacautín',34),(220,'Ercilla',34),(221,'Lonquimay',34),(222,'Los Sauces',34),(223,'Lumaco',34),(224,'Purén',34),(225,'Renaico',34),(226,'Traiguén',34),(227,'Victoria',34),(228,'Puerto Montt',37),(229,'Calbuco',37),(230,'Cochamó',37),(231,'Fresia',37),(232,'Frutillar',37),(233,'Los Muermos',37),(234,'Llanquihue',37),(235,'Maullín',37),(236,'Puerto Varas',37),(237,'Castro',38),(238,'Ancud',38),(239,'Chonchi',38),(240,'Curaco de Vélez',38),(241,'Dalcahue',38),(242,'Puqueldón',38),(243,'Queilén',38),(244,'Quellón',38),(245,'Quemchi',38),(246,'Quinchao',38),(247,'Osorno',39),(248,'Puerto Octay',39),(249,'Purranque',39),(250,'Puyehue',39),(251,'Río Negro',39),(252,'San Juan de la Costa',39),(253,'San Pablo',39),(254,'Chaitén',40),(255,'Futaleufú',40),(256,'Hualaihué',40),(257,'Palena',40),(258,'Coyhaique',41),(259,'Lago Verde',41),(260,'Aysén',42),(261,'Cisnes',42),(262,'Guaitecas',42),(263,'Cochrane',43),(264,'O\'Higgins',43),(265,'Tortel',43),(266,'Chile Chico',44),(267,'Río Ibáñez',44),(268,'Punta Arenas',45),(269,'Laguna Blanca',45),(270,'Río Verde',45),(271,'San Gregorio',45),(272,'Cabo de Hornos',46),(273,'Antártica',46),(274,'Porvenir',47),(275,'Primavera',47),(276,'Timaukel',47),(277,'Natales',48),(278,'Torres del Paine',48),(279,'Santiago',49),(280,'Cerrillos',49),(281,'Cerro Navia',49),(282,'Conchalí',49),(283,'El Bosque',49),(284,'Estación Central',49),(285,'Huechuraba',49),(286,'Independencia',49),(287,'La Cisterna',49),(288,'La Florida',49),(289,'La Granja',49),(290,'La Pintana',49),(291,'La Reina',49),(292,'Las Condes',49),(293,'Lo Barnechea',49),(294,'Lo Espejo',49),(295,'Lo Prado',49),(296,'Macul',49),(297,'Maipú',49),(298,'Ñuñoa',49),(299,'Pedro Aguirre Cerda',49),(300,'Peñalolén',49),(301,'Providencia',49),(302,'Pudahuel',49),(303,'Quilicura',49),(304,'Quinta Normal',49),(305,'Recoleta',49),(306,'Renca',49),(307,'San Joaquín',49),(308,'San Miguel',49),(309,'San Ramón',49),(310,'Vitacura',49),(311,'Puente Alto',50),(312,'Pirque',50),(313,'San José de Maipo',50),(314,'Colina',51),(315,'Lampa',51),(316,'Tiltil',51),(317,'San Bernardo',52),(318,'Buin',52),(319,'Calera de Tango',52),(320,'Paine',52),(321,'Melipilla',53),(322,'Alhué',53),(323,'Curacaví',53),(324,'María Pinto',53),(325,'San Pedro',53),(326,'Talagante',54),(327,'El Monte',54),(328,'Isla de Maipo',54),(329,'Padre Hurtado',54),(330,'Peñaflor',54),(331,'Valdivia',35),(332,'Corral',35),(333,'Lanco',35),(334,'Los Lagos',35),(335,'Máfil',35),(336,'Mariquina',35),(337,'Paillaco',35),(338,'Panguipulli',35),(339,'La Unión',36),(340,'Futrono',36),(341,'Lago Ranco',36),(342,'Río Bueno',36),(343,'Arica',1),(344,'Camarones',1),(345,'Putre',2),(346,'General Lagos',2);

/*Table structure for table `facturas` */

DROP TABLE IF EXISTS `facturas`;

CREATE TABLE `facturas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_proveedor` int(11) DEFAULT NULL,
  `fecha_emision` datetime DEFAULT NULL,
  `fecha_vencimiento` datetime DEFAULT NULL,
  `fecha_ingreso` datetime DEFAULT NULL,
  `neto` int(11) DEFAULT NULL,
  `iva` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `numero_factura` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `facturas` */

insert  into `facturas`(`id`,`id_proveedor`,`fecha_emision`,`fecha_vencimiento`,`fecha_ingreso`,`neto`,`iva`,`total`,`numero_factura`) values (1,2,'2019-10-09 00:00:00','2019-10-09 00:00:00','2019-10-09 15:33:48',13990,2658,16648,1),(2,3,'2019-10-09 00:00:00','2019-10-09 00:00:00','2019-10-09 15:34:42',27980,5316,33296,2),(3,1,'2019-10-09 00:00:00','2019-10-09 00:00:00','2019-10-09 15:35:45',13990,2658,16648,3),(4,1,'2019-10-09 00:00:00','2019-10-09 00:00:00','2019-10-09 17:30:15',13990,2658,16648,4),(5,1,'2019-10-09 00:00:00','2019-10-09 00:00:00','2019-10-09 18:32:23',73050,13880,86930,5),(6,1,'2019-10-13 00:00:00','2019-10-17 00:00:00','2019-10-13 20:07:38',59432,11292,70724,154654),(7,1,'2019-10-16 00:00:00','2019-10-16 00:00:00','2019-10-16 01:16:16',80522,15299,95821,15624);

/*Table structure for table `facturas_relacional` */

DROP TABLE IF EXISTS `facturas_relacional`;

CREATE TABLE `facturas_relacional` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigoProveedor` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `codigoProducto` int(11) DEFAULT NULL,
  `precioUnitario` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `totalUnitario` int(11) DEFAULT NULL,
  `idfactura` int(11) DEFAULT NULL,
  `nombreProducto` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `facturas_relacional` */

insert  into `facturas_relacional`(`id`,`codigoProveedor`,`codigoProducto`,`precioUnitario`,`cantidad`,`totalUnitario`,`idfactura`,`nombreProducto`) values (1,'294A5 ',119946,13990,1,13990,1,'EMP. VALVULA SUP. 2063072.0'),(2,'294A5 ',119946,13990,2,27980,2,'EMP. VALVULA SUP. 2063072.0'),(3,'294A5',119946,13990,1,13990,3,'EMP. VALVULA SUP. 2063072.0'),(4,'294A50',119946,13990,1,13990,4,'EMP. VALVULA SUP. 2063072.0'),(5,'1',1,9010,5,45050,5,'BOMBA D/HIDRAULICA()ELECTRICA'),(6,'2',2,12000,1,12000,5,'TAPABARRO DELIZQ'),(7,'4',4,16000,1,16000,5,'LUNETA MAZDA 5'),(8,'1',1,10000,5,50000,6,'BOMBA D/HIDRAULICA()ELECTRICA'),(9,'5',5,9432,1,9432,6,'BOMBA EMBRAGUE'),(10,'23245',8,13658,1,13658,7,'PASTILLAS FRENOS'),(11,'5',5,9432,2,18864,7,'BOMBA EMBRAGUE'),(12,'4',4,16000,3,48000,7,'LUNETA MAZDA 5');

/*Table structure for table `marca` */

DROP TABLE IF EXISTS `marca`;

CREATE TABLE `marca` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

/*Data for the table `marca` */

insert  into `marca`(`id`,`marca`) values (1,'SAMSUNG'),(2,'LENOVO'),(3,'SONY'),(4,'LG'),(5,'AOC'),(6,'MOTOROLA'),(7,'ASUS'),(8,'GENIUS'),(9,'HP'),(10,'RENAULT');

/*Table structure for table `productos` */

DROP TABLE IF EXISTS `productos`;

CREATE TABLE `productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `codigo` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `proveedor` int(3) DEFAULT NULL,
  `codigo_proveedor` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion` text COLLATE utf8_spanish_ci,
  `ubicacion` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `categoria` int(3) DEFAULT NULL,
  `marca` int(2) DEFAULT NULL,
  `costo` int(11) DEFAULT NULL,
  `stock_m` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `margen_contado` int(11) DEFAULT NULL,
  `margen_oferta` int(11) DEFAULT NULL,
  `margen_credito` int(11) DEFAULT NULL,
  `precio_venta` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `productos` */

insert  into `productos`(`id`,`codigo`,`proveedor`,`codigo_proveedor`,`nombre`,`descripcion`,`ubicacion`,`categoria`,`marca`,`costo`,`stock_m`,`stock`,`margen_contado`,`margen_oferta`,`margen_credito`,`precio_venta`) values (3,'119946',1,'294A50  ','EMP. VALVULA SUP. 2063072.0','Este producto no sirve para modelos Mazda','F-5',3,10,13990,5,10,105,105,105,28680),(4,'1',1,'1','BOMBA D/HIDRAULICA()ELECTRICA','sin descripcion la bomba','F-6',1,10,10000,50,100,105,0,0,20500),(5,'2',1,'2','TAPABARRO DELIZQ','sin descripcion el tapabarro','F-7',1,10,12000,50,100,105,0,0,24600),(6,'3',1,'3','OPTICO DERECHO','sin descripcion optico derecho','F-7',1,10,8000,50,100,105,0,0,16400),(7,'4',2,'4','LUNETA MAZDA 5','','F-7',1,10,16000,50,100,105,0,0,32800),(8,'5',2,'5','BOMBA EMBRAGUE','','F-8',1,10,9432,50,100,129,0,0,21599),(9,'6',1,'65125','ESPEJO TRASERO','','F-5',7,10,15000,40,45,105,0,0,0),(10,'7',3,'659887','ALTERNADOR PEGAUT','','F-5',3,10,30000,100,200,105,0,0,0),(11,'8',1,'23245','PASTILLAS FRENOS','ESTE REPUESTO SIRVE SOLO PARA RENAULT AÑO 2019','G-5',3,10,13658,50,100,129,0,0,31277);

/*Table structure for table `proveedores` */

DROP TABLE IF EXISTS `proveedores`;

CREATE TABLE `proveedores` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `rut` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `direccion` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `ciudad` int(3) DEFAULT NULL,
  `fono` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `contacto` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `correo` varchar(100) COLLATE utf8_spanish_ci DEFAULT 's/co',
  `observacion` text COLLATE utf8_spanish_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `proveedores` */

insert  into `proveedores`(`id`,`rut`,`nombre`,`direccion`,`ciudad`,`fono`,`contacto`,`correo`,`observacion`) values (1,'52355657','VERSACHEM CHILE S.A','10 DE JULIO 388',279,'5632345','JUAN PEREZ','contacto@gmail.com','Sin Observacion'),(2,'937250002','MANNHEIM SPA','10 DE JULIO 388',279,'2556233','EDUARDO DIAZ 95255926','AUTO@GMAIL.COM','PABLO ASTUDILLO 999947512'),(3,'764854707','ACOSTA ARROYO Y CIA LTDA.','10 DE JULIO 388.',279,'6354570 - 2226285','EDUARDO DIAZ 95255926','ACOSTA@HOTMAIL.COM','SIN OBSERVACION');

/*Table structure for table `provincias` */

DROP TABLE IF EXISTS `provincias`;

CREATE TABLE `provincias` (
  `id` int(3) NOT NULL DEFAULT '0',
  `nombre` varchar(23) DEFAULT NULL,
  `idRegion` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `PROVINCIA_REGION_ID` (`idRegion`),
  CONSTRAINT `provincias_ibfk_1` FOREIGN KEY (`idRegion`) REFERENCES `regiones` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `provincias` */

insert  into `provincias`(`id`,`nombre`,`idRegion`) values (1,'Arica',15),(2,'Parinacota',15),(3,'Iquique',1),(4,'Tamarugal',1),(5,'Antofagasta',2),(6,'El Loa',2),(7,'Tocopilla',2),(8,'Copiapó',3),(9,'Chañaral',3),(10,'Huasco',3),(11,'Elqui',4),(12,'Choapa',4),(13,'Limarí',4),(14,'Valparaíso',5),(15,'Isla de Pascua',5),(16,'Los Andes',5),(17,'Petorca',5),(18,'Quillota',5),(19,'San Antonio',5),(20,'San Felipe de Aconcagua',5),(21,'Marga Marga',5),(22,'Cachapoal',6),(23,'Cardenal Caro',6),(24,'Colchagua',6),(25,'Talca',7),(26,'Cauquenes',7),(27,'Curicó',7),(28,'Linares',7),(29,'Concepción',8),(30,'Arauco',8),(31,'Biobío',8),(32,'Ñuble',8),(33,'Cautín',9),(34,'Malleco',9),(35,'Valdivia',14),(36,'Ranco',14),(37,'Llanquihue',10),(38,'Chiloé',10),(39,'Osorno',10),(40,'Palena',10),(41,'Coihaique',11),(42,'Aisén',11),(43,'Capitán Prat',11),(44,'General Carrera',11),(45,'Magallanes',12),(46,'Antártica Chilena',12),(47,'Tierra del Fuego',12),(48,'Última Esperanza',12),(49,'Santiago',13),(50,'Cordillera',13),(51,'Chacabuco',13),(52,'Maipo',13),(53,'Melipilla',13),(54,'Talagante',13);

/*Table structure for table `regiones` */

DROP TABLE IF EXISTS `regiones`;

CREATE TABLE `regiones` (
  `id` int(100) NOT NULL DEFAULT '0',
  `nombre` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `ISO_3166_2_CL` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `regiones` */

insert  into `regiones`(`id`,`nombre`,`ISO_3166_2_CL`) values (1,'Tarapaca','CL-TA'),(2,'Antofagasta','CL-AN'),(3,'Atacama','CL-AT'),(4,'Coquimbo','CL-CO'),(5,'Valparaíso','CL-VS'),(6,'Región del Libertador Gral Bernardo O\'Higgins','CL-LI'),(7,'Región del Maule','CL-ML'),(8,'Región del Biobío','CL-BI'),(9,'Región de la Araucanía','CL-AR'),(10,'Región de Los Lagos','CL-LL'),(11,'Región Aisén del Gral. Carlos Ibáñez del Campo','CL-AI'),(12,'Región de Magallanes y de la Antártica Chilena','CL-MA'),(13,'Región Metropolitana de Santiago','CL-RM'),(14,'Región de Los Ríos','CL-LR'),(15,'Arica y Parinacota','CL-AP');

/*Table structure for table `turnos` */

DROP TABLE IF EXISTS `turnos`;

CREATE TABLE `turnos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_turno` int(11) NOT NULL,
  `id_vendedor` int(11) NOT NULL,
  `fecha_inicio_turno` datetime NOT NULL,
  `fecha_termino_turno` datetime DEFAULT NULL,
  `caja_chica` int(15) NOT NULL,
  `caja_inicial` int(15) NOT NULL,
  `caja_final` int(15) NOT NULL,
  `transbank` int(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

/*Data for the table `turnos` */

insert  into `turnos`(`id`,`tipo_turno`,`id_vendedor`,`fecha_inicio_turno`,`fecha_termino_turno`,`caja_chica`,`caja_inicial`,`caja_final`,`transbank`) values (1,1,1,'2019-03-01 15:44:02','2019-04-03 02:30:59',0,29600,14000,1500),(2,2,1,'2019-04-03 02:30:59','2019-04-03 13:57:37',30000,29600,17250,3250),(3,1,1,'2019-04-03 13:57:59','2019-07-09 16:52:34',30000,30000,123647,0),(4,2,1,'2019-07-09 16:52:34','2019-09-02 23:10:33',45000,30000,723647,0),(5,1,1,'2019-09-02 23:11:26',NULL,45000,38000,0,0);

/*Table structure for table `vendedores` */

DROP TABLE IF EXISTS `vendedores`;

CREATE TABLE `vendedores` (
  `id_vendedor` int(11) NOT NULL AUTO_INCREMENT,
  `nombreVendedor` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `correoVendedor` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `passwordVendedor` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `nivel` int(2) NOT NULL DEFAULT '1',
  `activo` int(2) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_vendedor`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

/*Data for the table `vendedores` */

insert  into `vendedores`(`id_vendedor`,`nombreVendedor`,`correoVendedor`,`passwordVendedor`,`nivel`,`activo`) values (1,'Vanessa Martínez','admin@gmail.com','123456',0,1),(2,'Juan PAvez M','juan@gmail.com','123456',1,1),(3,'Diego Pérez','diego@gmail.com','123456',1,0),(4,'JUAN SOTO','JUAN@GMAIL.COM','123456',1,1);

/*Table structure for table `ventas` */

DROP TABLE IF EXISTS `ventas`;

CREATE TABLE `ventas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_vendedor` int(11) DEFAULT NULL,
  `fecha_venta` datetime DEFAULT '0000-00-00 00:00:00',
  `estado_venta` int(11) DEFAULT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `descuento` int(11) DEFAULT NULL,
  `descuento_pesos` int(11) DEFAULT NULL,
  `neto` int(11) DEFAULT NULL,
  `iva` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `total_sin_des` int(11) DEFAULT NULL,
  `fecha_nulo` datetime DEFAULT '0000-00-00 00:00:00',
  `observacion` text COLLATE utf8_spanish_ci,
  `medio_pago` int(2) DEFAULT NULL,
  `id_turno` int(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `ventas` */

insert  into `ventas`(`id`,`id_vendedor`,`fecha_venta`,`estado_venta`,`id_cliente`,`descuento`,`descuento_pesos`,`neto`,`iva`,`total`,`total_sin_des`,`fecha_nulo`,`observacion`,`medio_pago`,`id_turno`) values (36,1,'2019-10-15 01:23:27',1,0,0,0,135910,25823,161733,161733,NULL,'',1,5),(37,1,'2019-10-16 01:38:29',1,0,0,0,129677,24639,154316,154316,NULL,'',1,5),(38,1,'2019-10-17 14:52:42',1,0,0,0,53300,10127,63427,63427,NULL,'',1,5);

/*Table structure for table `ventas_relacional` */

DROP TABLE IF EXISTS `ventas_relacional`;

CREATE TABLE `ventas_relacional` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `codigo_producto` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `precio_unitario` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `total_unitario` int(11) DEFAULT NULL,
  `id_venta` int(11) DEFAULT NULL,
  `nombre_producto` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `ventas_relacional` */

insert  into `ventas_relacional`(`id`,`codigo_producto`,`precio_unitario`,`cantidad`,`total_unitario`,`id_venta`,`nombre_producto`) values (2,'1',10000,2,10000,36,'BOMBA D/HIDRAULICA()ELECTRICA'),(3,'119946',13990,9,125910,36,'EMP. VALVULA SUP. 2063072.0'),(4,'8',31277,1,31277,37,'PASTILLAS FRENOS'),(5,'4',32800,3,98400,37,'LUNETA MAZDA 5'),(6,'1',20500,1,20500,38,'BOMBA D/HIDRAULICA()ELECTRICA'),(7,'4',32800,1,32800,38,'LUNETA MAZDA 5');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
