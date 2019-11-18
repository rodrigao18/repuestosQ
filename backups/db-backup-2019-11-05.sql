

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO categoria VALUES("1","Notebook");
INSERT INTO categoria VALUES("2","Tablet");
INSERT INTO categoria VALUES("3","Almacenamiento");
INSERT INTO categoria VALUES("4","Perif�ricos");
INSERT INTO categoria VALUES("5","Celular");
INSERT INTO categoria VALUES("6","Audifonos");
INSERT INTO categoria VALUES("7","Cables");
INSERT INTO categoria VALUES("8","Pantallas");
INSERT INTO categoria VALUES("9","Routers");
INSERT INTO categoria VALUES("10","Tarjetas gr�ficas");
INSERT INTO categoria VALUES("11","Memorias ram");





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
  `observacion` text COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO clientes VALUES("1","139858778","MARCELO ANDRES RIQUELME","CHILE NUEVO PASAJE AZUCENA 376","58","9 56836053","9367757655677","CASA CAFE CON PADERETAS !!!","INFORM�TICA","105","SIN OBSERVACI�N !!!! BCBCB");
INSERT INTO clientes VALUES("2","158958785","ANDRES CHAPA ARAYA","SAN VICENTE 960 - QUILLOTA","59","9 56897845","","S/F","INFORM�TICA","0","SIN OBSERVACION");
INSERT INTO clientes VALUES("3","156829099","ANDRES CHAPA ARAYA","AZUCENA 365","58","955117115","61074062","CERCA HOSPITAL","Asesorias informaticas","500000","NO PAGA!!");
INSERT INTO clientes VALUES("4","150650135","VANESSA GONZALEZ MARTINEZ","G. RIESCO 1105","58","9995919148","","DUE�A","Repuestos","10000","JAJAJAJ");





CREATE TABLE `comunas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) DEFAULT NULL,
  `idProvincia` int(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `COMUNA_PROVINCIA_ID` (`idProvincia`),
  CONSTRAINT `comunas_ibfk_1` FOREIGN KEY (`idProvincia`) REFERENCES `provincias` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=347 DEFAULT CHARSET=utf8;

INSERT INTO comunas VALUES("1","Iquique","3");
INSERT INTO comunas VALUES("2","Alto Hospicio","3");
INSERT INTO comunas VALUES("3","Pozo Almonte","4");
INSERT INTO comunas VALUES("4","Cami�a","4");
INSERT INTO comunas VALUES("5","Colchane","4");
INSERT INTO comunas VALUES("6","Huara","4");
INSERT INTO comunas VALUES("7","Pica","4");
INSERT INTO comunas VALUES("8","Antofagasta","5");
INSERT INTO comunas VALUES("9","Mejillones","5");
INSERT INTO comunas VALUES("10","Sierra Gorda","5");
INSERT INTO comunas VALUES("11","Taltal","5");
INSERT INTO comunas VALUES("12","Calama","6");
INSERT INTO comunas VALUES("13","Ollag�e","6");
INSERT INTO comunas VALUES("14","San Pedro de Atacama","6");
INSERT INTO comunas VALUES("15","Tocopilla","7");
INSERT INTO comunas VALUES("16","Mar�a Elena","7");
INSERT INTO comunas VALUES("17","Copiap�","8");
INSERT INTO comunas VALUES("18","Caldera","8");
INSERT INTO comunas VALUES("19","Tierra Amarilla","8");
INSERT INTO comunas VALUES("20","Cha�aral","9");
INSERT INTO comunas VALUES("21","Diego de Almagro","9");
INSERT INTO comunas VALUES("22","Vallenar","10");
INSERT INTO comunas VALUES("23","Alto del Carmen","10");
INSERT INTO comunas VALUES("24","Freirina","10");
INSERT INTO comunas VALUES("25","Huasco","10");
INSERT INTO comunas VALUES("26","La Serena","11");
INSERT INTO comunas VALUES("27","Coquimbo","11");
INSERT INTO comunas VALUES("28","Andacollo","11");
INSERT INTO comunas VALUES("29","La Higuera","11");
INSERT INTO comunas VALUES("30","Paihuano","11");
INSERT INTO comunas VALUES("31","Vicu�a","11");
INSERT INTO comunas VALUES("32","Illapel","12");
INSERT INTO comunas VALUES("33","Canela","12");
INSERT INTO comunas VALUES("34","Los Vilos","12");
INSERT INTO comunas VALUES("35","Salamanca","12");
INSERT INTO comunas VALUES("36","Ovalle","13");
INSERT INTO comunas VALUES("37","Combarbal�","13");
INSERT INTO comunas VALUES("38","Monte Patria","13");
INSERT INTO comunas VALUES("39","Punitaqui","13");
INSERT INTO comunas VALUES("40","R�o Hurtado","13");
INSERT INTO comunas VALUES("41","Valpara�so","14");
INSERT INTO comunas VALUES("42","Casablanca","14");
INSERT INTO comunas VALUES("43","Conc�n","14");
INSERT INTO comunas VALUES("44","Juan Fern�ndez","14");
INSERT INTO comunas VALUES("45","Puchuncav�","14");
INSERT INTO comunas VALUES("46","Quintero","14");
INSERT INTO comunas VALUES("47","Vi�a del Mar","14");
INSERT INTO comunas VALUES("48","Isla de Pascua","15");
INSERT INTO comunas VALUES("49","Los Andes","16");
INSERT INTO comunas VALUES("50","Calle Larga","16");
INSERT INTO comunas VALUES("51","Rinconada","16");
INSERT INTO comunas VALUES("52","San Esteban","16");
INSERT INTO comunas VALUES("53","La Ligua","17");
INSERT INTO comunas VALUES("54","Cabildo","17");
INSERT INTO comunas VALUES("55","Papudo","17");
INSERT INTO comunas VALUES("56","Petorca","17");
INSERT INTO comunas VALUES("57","Zapallar","17");
INSERT INTO comunas VALUES("58","Quillota","18");
INSERT INTO comunas VALUES("59","La Calera","18");
INSERT INTO comunas VALUES("60","Hijuelas","18");
INSERT INTO comunas VALUES("61","La Cruz","18");
INSERT INTO comunas VALUES("62","Nogales","18");
INSERT INTO comunas VALUES("63","San Antonio","19");
INSERT INTO comunas VALUES("64","Algarrobo","19");
INSERT INTO comunas VALUES("65","Cartagena","19");
INSERT INTO comunas VALUES("66","El Quisco","19");
INSERT INTO comunas VALUES("67","El Tabo","19");
INSERT INTO comunas VALUES("68","Santo Domingo","19");
INSERT INTO comunas VALUES("69","San Felipe","20");
INSERT INTO comunas VALUES("70","Catemu","20");
INSERT INTO comunas VALUES("71","Llay Llay","20");
INSERT INTO comunas VALUES("72","Panquehue","20");
INSERT INTO comunas VALUES("73","Putaendo","20");
INSERT INTO comunas VALUES("74","Santa Mar�a","20");
INSERT INTO comunas VALUES("75","Quilpu�","21");
INSERT INTO comunas VALUES("76","Limache","21");
INSERT INTO comunas VALUES("77","Olmu�","21");
INSERT INTO comunas VALUES("78","Villa Alemana","21");
INSERT INTO comunas VALUES("79","Rancagua","22");
INSERT INTO comunas VALUES("80","Codegua","22");
INSERT INTO comunas VALUES("81","Coinco","22");
INSERT INTO comunas VALUES("82","Coltauco","22");
INSERT INTO comunas VALUES("83","Do�ihue","22");
INSERT INTO comunas VALUES("84","Graneros","22");
INSERT INTO comunas VALUES("85","Las Cabras","22");
INSERT INTO comunas VALUES("86","Machal�","22");
INSERT INTO comunas VALUES("87","Malloa","22");
INSERT INTO comunas VALUES("88","Mostazal","22");
INSERT INTO comunas VALUES("89","Olivar","22");
INSERT INTO comunas VALUES("90","Peumo","22");
INSERT INTO comunas VALUES("91","Pichidegua","22");
INSERT INTO comunas VALUES("92","Quinta de Tilcoco","22");
INSERT INTO comunas VALUES("93","Rengo","22");
INSERT INTO comunas VALUES("94","Requ�noa","22");
INSERT INTO comunas VALUES("95","San Vicente","22");
INSERT INTO comunas VALUES("96","Pichilemu","23");
INSERT INTO comunas VALUES("97","La Estrella","23");
INSERT INTO comunas VALUES("98","Litueche","23");
INSERT INTO comunas VALUES("99","Marchihue","23");
INSERT INTO comunas VALUES("100","Navidad","23");
INSERT INTO comunas VALUES("101","Paredones","23");
INSERT INTO comunas VALUES("102","San Fernando","24");
INSERT INTO comunas VALUES("103","Ch�pica","24");
INSERT INTO comunas VALUES("104","Chimbarongo","24");
INSERT INTO comunas VALUES("105","Lolol","24");
INSERT INTO comunas VALUES("106","Nancagua","24");
INSERT INTO comunas VALUES("107","Palmilla","24");
INSERT INTO comunas VALUES("108","Peralillo","24");
INSERT INTO comunas VALUES("109","Placilla","24");
INSERT INTO comunas VALUES("110","Pumanque","24");
INSERT INTO comunas VALUES("111","Santa Cruz","24");
INSERT INTO comunas VALUES("112","Talca","25");
INSERT INTO comunas VALUES("113","Constituci�n","25");
INSERT INTO comunas VALUES("114","Curepto","25");
INSERT INTO comunas VALUES("115","Empedrado","25");
INSERT INTO comunas VALUES("116","Maule","25");
INSERT INTO comunas VALUES("117","Pelarco","25");
INSERT INTO comunas VALUES("118","Pencahue","25");
INSERT INTO comunas VALUES("119","R�o Claro","25");
INSERT INTO comunas VALUES("120","San Clemente","25");
INSERT INTO comunas VALUES("121","San Rafael","25");
INSERT INTO comunas VALUES("122","Cauquenes","26");
INSERT INTO comunas VALUES("123","Chanco","26");
INSERT INTO comunas VALUES("124","Pelluhue","26");
INSERT INTO comunas VALUES("125","Curic�","27");
INSERT INTO comunas VALUES("126","Huala��","27");
INSERT INTO comunas VALUES("127","Licant�n","27");
INSERT INTO comunas VALUES("128","Molina","27");
INSERT INTO comunas VALUES("129","Rauco","27");
INSERT INTO comunas VALUES("130","Romeral","27");
INSERT INTO comunas VALUES("131","Sagrada Familia","27");
INSERT INTO comunas VALUES("132","Teno","27");
INSERT INTO comunas VALUES("133","Vichuqu�n","27");
INSERT INTO comunas VALUES("134","Linares","28");
INSERT INTO comunas VALUES("135","Colb�n","28");
INSERT INTO comunas VALUES("136","Longav�","28");
INSERT INTO comunas VALUES("137","Parral","28");
INSERT INTO comunas VALUES("138","Retiro","28");
INSERT INTO comunas VALUES("139","San Javier","28");
INSERT INTO comunas VALUES("140","Villa Alegre","28");
INSERT INTO comunas VALUES("141","Yerbas Buenas","28");
INSERT INTO comunas VALUES("142","Concepci�n","29");
INSERT INTO comunas VALUES("143","Coronel","29");
INSERT INTO comunas VALUES("144","Chiguayante","29");
INSERT INTO comunas VALUES("145","Florida","29");
INSERT INTO comunas VALUES("146","Hualqui","29");
INSERT INTO comunas VALUES("147","Lota","29");
INSERT INTO comunas VALUES("148","Penco","29");
INSERT INTO comunas VALUES("149","San Pedro de la Paz","29");
INSERT INTO comunas VALUES("150","Santa Juana","29");
INSERT INTO comunas VALUES("151","Talcahuano","29");
INSERT INTO comunas VALUES("152","Tom�","29");
INSERT INTO comunas VALUES("153","Hualp�n","29");
INSERT INTO comunas VALUES("154","Lebu","30");
INSERT INTO comunas VALUES("155","Arauco","30");
INSERT INTO comunas VALUES("156","Ca�ete","30");
INSERT INTO comunas VALUES("157","Contulmo","30");
INSERT INTO comunas VALUES("158","Curanilahue","30");
INSERT INTO comunas VALUES("159","Los �lamos","30");
INSERT INTO comunas VALUES("160","Tir�a","30");
INSERT INTO comunas VALUES("161","Los �ngeles","31");
INSERT INTO comunas VALUES("162","Antuco","31");
INSERT INTO comunas VALUES("163","Cabrero","31");
INSERT INTO comunas VALUES("164","Laja","31");
INSERT INTO comunas VALUES("165","Mulch�n","31");
INSERT INTO comunas VALUES("166","Nacimiento","31");
INSERT INTO comunas VALUES("167","Negrete","31");
INSERT INTO comunas VALUES("168","Quilaco","31");
INSERT INTO comunas VALUES("169","Quilleco","31");
INSERT INTO comunas VALUES("170","San Rosendo","31");
INSERT INTO comunas VALUES("171","Santa B�rbara","31");
INSERT INTO comunas VALUES("172","Tucapel","31");
INSERT INTO comunas VALUES("173","Yumbel","31");
INSERT INTO comunas VALUES("174","Alto Biob�o","31");
INSERT INTO comunas VALUES("175","Chill�n","32");
INSERT INTO comunas VALUES("176","Bulnes","32");
INSERT INTO comunas VALUES("177","Cobquecura","32");
INSERT INTO comunas VALUES("178","Coelemu","32");
INSERT INTO comunas VALUES("179","Coihueco","32");
INSERT INTO comunas VALUES("180","Chill�n Viejo","32");
INSERT INTO comunas VALUES("181","El Carmen","32");
INSERT INTO comunas VALUES("182","Ninhue","32");
INSERT INTO comunas VALUES("183","�iqu�n","32");
INSERT INTO comunas VALUES("184","Pemuco","32");
INSERT INTO comunas VALUES("185","Pinto","32");
INSERT INTO comunas VALUES("186","Portezuelo","32");
INSERT INTO comunas VALUES("187","Quill�n","32");
INSERT INTO comunas VALUES("188","Quirihue","32");
INSERT INTO comunas VALUES("189","R�nquil","32");
INSERT INTO comunas VALUES("190","San Carlos","32");
INSERT INTO comunas VALUES("191","San Fabi�n","32");
INSERT INTO comunas VALUES("192","San Ignacio","32");
INSERT INTO comunas VALUES("193","San Nicol�s","32");
INSERT INTO comunas VALUES("194","Treguaco","32");
INSERT INTO comunas VALUES("195","Yungay","32");
INSERT INTO comunas VALUES("196","Temuco","33");
INSERT INTO comunas VALUES("197","Carahue","33");
INSERT INTO comunas VALUES("198","Cunco","33");
INSERT INTO comunas VALUES("199","Curarrehue","33");
INSERT INTO comunas VALUES("200","Freire","33");
INSERT INTO comunas VALUES("201","Galvarino","33");
INSERT INTO comunas VALUES("202","Gorbea","33");
INSERT INTO comunas VALUES("203","Lautaro","33");
INSERT INTO comunas VALUES("204","Loncoche","33");
INSERT INTO comunas VALUES("205","Melipeuco","33");
INSERT INTO comunas VALUES("206","Nueva Imperial","33");
INSERT INTO comunas VALUES("207","Padre las Casas","33");
INSERT INTO comunas VALUES("208","Perquenco","33");
INSERT INTO comunas VALUES("209","Pitrufqu�n","33");
INSERT INTO comunas VALUES("210","Puc�n","33");
INSERT INTO comunas VALUES("211","Saavedra","33");
INSERT INTO comunas VALUES("212","Teodoro Schmidt","33");
INSERT INTO comunas VALUES("213","Tolt�n","33");
INSERT INTO comunas VALUES("214","Vilc�n","33");
INSERT INTO comunas VALUES("215","Villarrica","33");
INSERT INTO comunas VALUES("216","Cholchol","33");
INSERT INTO comunas VALUES("217","Angol","34");
INSERT INTO comunas VALUES("218","Collipulli","34");
INSERT INTO comunas VALUES("219","Curacaut�n","34");
INSERT INTO comunas VALUES("220","Ercilla","34");
INSERT INTO comunas VALUES("221","Lonquimay","34");
INSERT INTO comunas VALUES("222","Los Sauces","34");
INSERT INTO comunas VALUES("223","Lumaco","34");
INSERT INTO comunas VALUES("224","Pur�n","34");
INSERT INTO comunas VALUES("225","Renaico","34");
INSERT INTO comunas VALUES("226","Traigu�n","34");
INSERT INTO comunas VALUES("227","Victoria","34");
INSERT INTO comunas VALUES("228","Puerto Montt","37");
INSERT INTO comunas VALUES("229","Calbuco","37");
INSERT INTO comunas VALUES("230","Cocham�","37");
INSERT INTO comunas VALUES("231","Fresia","37");
INSERT INTO comunas VALUES("232","Frutillar","37");
INSERT INTO comunas VALUES("233","Los Muermos","37");
INSERT INTO comunas VALUES("234","Llanquihue","37");
INSERT INTO comunas VALUES("235","Maull�n","37");
INSERT INTO comunas VALUES("236","Puerto Varas","37");
INSERT INTO comunas VALUES("237","Castro","38");
INSERT INTO comunas VALUES("238","Ancud","38");
INSERT INTO comunas VALUES("239","Chonchi","38");
INSERT INTO comunas VALUES("240","Curaco de V�lez","38");
INSERT INTO comunas VALUES("241","Dalcahue","38");
INSERT INTO comunas VALUES("242","Puqueld�n","38");
INSERT INTO comunas VALUES("243","Queil�n","38");
INSERT INTO comunas VALUES("244","Quell�n","38");
INSERT INTO comunas VALUES("245","Quemchi","38");
INSERT INTO comunas VALUES("246","Quinchao","38");
INSERT INTO comunas VALUES("247","Osorno","39");
INSERT INTO comunas VALUES("248","Puerto Octay","39");
INSERT INTO comunas VALUES("249","Purranque","39");
INSERT INTO comunas VALUES("250","Puyehue","39");
INSERT INTO comunas VALUES("251","R�o Negro","39");
INSERT INTO comunas VALUES("252","San Juan de la Costa","39");
INSERT INTO comunas VALUES("253","San Pablo","39");
INSERT INTO comunas VALUES("254","Chait�n","40");
INSERT INTO comunas VALUES("255","Futaleuf�","40");
INSERT INTO comunas VALUES("256","Hualaihu�","40");
INSERT INTO comunas VALUES("257","Palena","40");
INSERT INTO comunas VALUES("258","Coyhaique","41");
INSERT INTO comunas VALUES("259","Lago Verde","41");
INSERT INTO comunas VALUES("260","Ays�n","42");
INSERT INTO comunas VALUES("261","Cisnes","42");
INSERT INTO comunas VALUES("262","Guaitecas","42");
INSERT INTO comunas VALUES("263","Cochrane","43");
INSERT INTO comunas VALUES("264","O\'Higgins","43");
INSERT INTO comunas VALUES("265","Tortel","43");
INSERT INTO comunas VALUES("266","Chile Chico","44");
INSERT INTO comunas VALUES("267","R�o Ib��ez","44");
INSERT INTO comunas VALUES("268","Punta Arenas","45");
INSERT INTO comunas VALUES("269","Laguna Blanca","45");
INSERT INTO comunas VALUES("270","R�o Verde","45");
INSERT INTO comunas VALUES("271","San Gregorio","45");
INSERT INTO comunas VALUES("272","Cabo de Hornos","46");
INSERT INTO comunas VALUES("273","Ant�rtica","46");
INSERT INTO comunas VALUES("274","Porvenir","47");
INSERT INTO comunas VALUES("275","Primavera","47");
INSERT INTO comunas VALUES("276","Timaukel","47");
INSERT INTO comunas VALUES("277","Natales","48");
INSERT INTO comunas VALUES("278","Torres del Paine","48");
INSERT INTO comunas VALUES("279","Santiago","49");
INSERT INTO comunas VALUES("280","Cerrillos","49");
INSERT INTO comunas VALUES("281","Cerro Navia","49");
INSERT INTO comunas VALUES("282","Conchal�","49");
INSERT INTO comunas VALUES("283","El Bosque","49");
INSERT INTO comunas VALUES("284","Estaci�n Central","49");
INSERT INTO comunas VALUES("285","Huechuraba","49");
INSERT INTO comunas VALUES("286","Independencia","49");
INSERT INTO comunas VALUES("287","La Cisterna","49");
INSERT INTO comunas VALUES("288","La Florida","49");
INSERT INTO comunas VALUES("289","La Granja","49");
INSERT INTO comunas VALUES("290","La Pintana","49");
INSERT INTO comunas VALUES("291","La Reina","49");
INSERT INTO comunas VALUES("292","Las Condes","49");
INSERT INTO comunas VALUES("293","Lo Barnechea","49");
INSERT INTO comunas VALUES("294","Lo Espejo","49");
INSERT INTO comunas VALUES("295","Lo Prado","49");
INSERT INTO comunas VALUES("296","Macul","49");
INSERT INTO comunas VALUES("297","Maip�","49");
INSERT INTO comunas VALUES("298","�u�oa","49");
INSERT INTO comunas VALUES("299","Pedro Aguirre Cerda","49");
INSERT INTO comunas VALUES("300","Pe�alol�n","49");
INSERT INTO comunas VALUES("301","Providencia","49");
INSERT INTO comunas VALUES("302","Pudahuel","49");
INSERT INTO comunas VALUES("303","Quilicura","49");
INSERT INTO comunas VALUES("304","Quinta Normal","49");
INSERT INTO comunas VALUES("305","Recoleta","49");
INSERT INTO comunas VALUES("306","Renca","49");
INSERT INTO comunas VALUES("307","San Joaqu�n","49");
INSERT INTO comunas VALUES("308","San Miguel","49");
INSERT INTO comunas VALUES("309","San Ram�n","49");
INSERT INTO comunas VALUES("310","Vitacura","49");
INSERT INTO comunas VALUES("311","Puente Alto","50");
INSERT INTO comunas VALUES("312","Pirque","50");
INSERT INTO comunas VALUES("313","San Jos� de Maipo","50");
INSERT INTO comunas VALUES("314","Colina","51");
INSERT INTO comunas VALUES("315","Lampa","51");
INSERT INTO comunas VALUES("316","Tiltil","51");
INSERT INTO comunas VALUES("317","San Bernardo","52");
INSERT INTO comunas VALUES("318","Buin","52");
INSERT INTO comunas VALUES("319","Calera de Tango","52");
INSERT INTO comunas VALUES("320","Paine","52");
INSERT INTO comunas VALUES("321","Melipilla","53");
INSERT INTO comunas VALUES("322","Alhu�","53");
INSERT INTO comunas VALUES("323","Curacav�","53");
INSERT INTO comunas VALUES("324","Mar�a Pinto","53");
INSERT INTO comunas VALUES("325","San Pedro","53");
INSERT INTO comunas VALUES("326","Talagante","54");
INSERT INTO comunas VALUES("327","El Monte","54");
INSERT INTO comunas VALUES("328","Isla de Maipo","54");
INSERT INTO comunas VALUES("329","Padre Hurtado","54");
INSERT INTO comunas VALUES("330","Pe�aflor","54");
INSERT INTO comunas VALUES("331","Valdivia","35");
INSERT INTO comunas VALUES("332","Corral","35");
INSERT INTO comunas VALUES("333","Lanco","35");
INSERT INTO comunas VALUES("334","Los Lagos","35");
INSERT INTO comunas VALUES("335","M�fil","35");
INSERT INTO comunas VALUES("336","Mariquina","35");
INSERT INTO comunas VALUES("337","Paillaco","35");
INSERT INTO comunas VALUES("338","Panguipulli","35");
INSERT INTO comunas VALUES("339","La Uni�n","36");
INSERT INTO comunas VALUES("340","Futrono","36");
INSERT INTO comunas VALUES("341","Lago Ranco","36");
INSERT INTO comunas VALUES("342","R�o Bueno","36");
INSERT INTO comunas VALUES("343","Arica","1");
INSERT INTO comunas VALUES("344","Camarones","1");
INSERT INTO comunas VALUES("345","Putre","2");
INSERT INTO comunas VALUES("346","General Lagos","2");





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

INSERT INTO facturas VALUES("1","2","2019-10-09 00:00:00","2019-10-09 00:00:00","2019-10-09 15:33:48","13990","2658","16648","1");
INSERT INTO facturas VALUES("2","3","2019-10-09 00:00:00","2019-10-09 00:00:00","2019-10-09 15:34:42","27980","5316","33296","2");
INSERT INTO facturas VALUES("3","1","2019-10-09 00:00:00","2019-10-09 00:00:00","2019-10-09 15:35:45","13990","2658","16648","3");
INSERT INTO facturas VALUES("4","1","2019-10-09 00:00:00","2019-10-09 00:00:00","2019-10-09 17:30:15","13990","2658","16648","4");
INSERT INTO facturas VALUES("5","1","2019-10-09 00:00:00","2019-10-09 00:00:00","2019-10-09 18:32:23","73050","13880","86930","5");
INSERT INTO facturas VALUES("6","1","2019-10-13 00:00:00","2019-10-17 00:00:00","2019-10-13 20:07:38","59432","11292","70724","154654");
INSERT INTO facturas VALUES("7","1","2019-10-16 00:00:00","2019-10-16 00:00:00","2019-10-16 01:16:16","80522","15299","95821","15624");





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

INSERT INTO facturas_relacional VALUES("1","294A5 ","119946","13990","1","13990","1","EMP. VALVULA SUP. 2063072.0");
INSERT INTO facturas_relacional VALUES("2","294A5 ","119946","13990","2","27980","2","EMP. VALVULA SUP. 2063072.0");
INSERT INTO facturas_relacional VALUES("3","294A5","119946","13990","1","13990","3","EMP. VALVULA SUP. 2063072.0");
INSERT INTO facturas_relacional VALUES("4","294A50","119946","13990","1","13990","4","EMP. VALVULA SUP. 2063072.0");
INSERT INTO facturas_relacional VALUES("5","1","1","9010","5","45050","5","BOMBA D/HIDRAULICA()ELECTRICA");
INSERT INTO facturas_relacional VALUES("6","2","2","12000","1","12000","5","TAPABARRO DELIZQ");
INSERT INTO facturas_relacional VALUES("7","4","4","16000","1","16000","5","LUNETA MAZDA 5");
INSERT INTO facturas_relacional VALUES("8","1","1","10000","5","50000","6","BOMBA D/HIDRAULICA()ELECTRICA");
INSERT INTO facturas_relacional VALUES("9","5","5","9432","1","9432","6","BOMBA EMBRAGUE");
INSERT INTO facturas_relacional VALUES("10","23245","8","13658","1","13658","7","PASTILLAS FRENOS");
INSERT INTO facturas_relacional VALUES("11","5","5","9432","2","18864","7","BOMBA EMBRAGUE");
INSERT INTO facturas_relacional VALUES("12","4","4","16000","3","48000","7","LUNETA MAZDA 5");





CREATE TABLE `marca` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO marca VALUES("1","SAMSUNG");
INSERT INTO marca VALUES("2","LENOVO");
INSERT INTO marca VALUES("3","SONY");
INSERT INTO marca VALUES("4","LG");
INSERT INTO marca VALUES("5","AOC");
INSERT INTO marca VALUES("6","MOTOROLA");
INSERT INTO marca VALUES("7","ASUS");
INSERT INTO marca VALUES("8","GENIUS");
INSERT INTO marca VALUES("9","HP");
INSERT INTO marca VALUES("10","RENAULT");





CREATE TABLE `productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `codigo` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `proveedor` int(3) DEFAULT NULL,
  `codigo_proveedor` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion` text COLLATE utf8_spanish_ci DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO productos VALUES("3","119946","1","294A50  ","EMP. VALVULA SUP. 2063072.0","Este producto no sirve para modelos Mazda","F-5","3","10","13990","5","10","105","105","105","28680");
INSERT INTO productos VALUES("4","1","1","1","BOMBA D/HIDRAULICA()ELECTRICA","sin descripcion la bomba","F-6","1","10","10000","50","100","205","0","0","30500");
INSERT INTO productos VALUES("5","2","1","2","TAPABARRO DELIZQ","sin descripcion el tapabarro","F-7","1","10","12000","50","100","105","0","0","24600");
INSERT INTO productos VALUES("6","3","1","3","OPTICO DERECHO","sin descripcion optico derecho","F-7","1","10","8000","50","100","105","0","0","16400");
INSERT INTO productos VALUES("7","4","2","4","LUNETA MAZDA 5","","F-7","1","10","16000","50","100","105","0","0","32800");
INSERT INTO productos VALUES("8","5","2","5","BOMBA EMBRAGUE","","F-8","1","10","9432","50","100","129","0","0","21599");
INSERT INTO productos VALUES("9","6","1","65125","ESPEJO TRASERO","","F-5","7","10","15000","40","45","105","0","0","0");
INSERT INTO productos VALUES("10","7","3","659887","ALTERNADOR PEGAUT","","F-5","3","10","30000","100","200","300","0","0","0");
INSERT INTO productos VALUES("11","8","1","23245","PASTILLAS FRENOS","ESTE REPUESTO SIRVE SOLO PARA RENAULT A�O 2019","G-5","3","10","13658","50","100","129","0","0","31277");
INSERT INTO productos VALUES("12","123456","2","abc123","PRODUCTO DE PRUEBA","PRODUCTO PARA MODELO 1A 2B","A1","3","2","30000","10","50","50","40","60","0");





CREATE TABLE `proveedores` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `rut` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `direccion` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `ciudad` int(3) DEFAULT NULL,
  `fono` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `contacto` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `correo` varchar(100) COLLATE utf8_spanish_ci DEFAULT 's/co',
  `observacion` text COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO proveedores VALUES("1","52355657","VERSACHEM CHILE S.A","10 DE JULIO 388","279","5632345","JUAN PEREZ","contacto@gmail.com","Sin Observacion");
INSERT INTO proveedores VALUES("2","937250002","MANNHEIM SPA","10 DE JULIO 388","279","2556233","EDUARDO DIAZ 95255926","AUTO@GMAIL.COM","PABLO ASTUDILLO 999947512");
INSERT INTO proveedores VALUES("3","764854707","ACOSTA ARROYO Y CIA LTDA.","10 DE JULIO 388.","279","6354570 - 2226285","EDUARDO DIAZ 95255926","ACOSTA@HOTMAIL.COM","SIN OBSERVACION");
INSERT INTO proveedores VALUES("4","987894565","MPS RODAMIENTOS","LAS INDUSTRIAS 1243","58","9557895456","PEDRO ROJAS","PEDRO@MPSRODAMIENTOS.CL","SIN OBSERVACION");





CREATE TABLE `provincias` (
  `id` int(3) NOT NULL DEFAULT 0,
  `nombre` varchar(23) DEFAULT NULL,
  `idRegion` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `PROVINCIA_REGION_ID` (`idRegion`),
  CONSTRAINT `provincias_ibfk_1` FOREIGN KEY (`idRegion`) REFERENCES `regiones` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO provincias VALUES("1","Arica","15");
INSERT INTO provincias VALUES("2","Parinacota","15");
INSERT INTO provincias VALUES("3","Iquique","1");
INSERT INTO provincias VALUES("4","Tamarugal","1");
INSERT INTO provincias VALUES("5","Antofagasta","2");
INSERT INTO provincias VALUES("6","El Loa","2");
INSERT INTO provincias VALUES("7","Tocopilla","2");
INSERT INTO provincias VALUES("8","Copiap�","3");
INSERT INTO provincias VALUES("9","Cha�aral","3");
INSERT INTO provincias VALUES("10","Huasco","3");
INSERT INTO provincias VALUES("11","Elqui","4");
INSERT INTO provincias VALUES("12","Choapa","4");
INSERT INTO provincias VALUES("13","Limar�","4");
INSERT INTO provincias VALUES("14","Valpara�so","5");
INSERT INTO provincias VALUES("15","Isla de Pascua","5");
INSERT INTO provincias VALUES("16","Los Andes","5");
INSERT INTO provincias VALUES("17","Petorca","5");
INSERT INTO provincias VALUES("18","Quillota","5");
INSERT INTO provincias VALUES("19","San Antonio","5");
INSERT INTO provincias VALUES("20","San Felipe de Aconcagua","5");
INSERT INTO provincias VALUES("21","Marga Marga","5");
INSERT INTO provincias VALUES("22","Cachapoal","6");
INSERT INTO provincias VALUES("23","Cardenal Caro","6");
INSERT INTO provincias VALUES("24","Colchagua","6");
INSERT INTO provincias VALUES("25","Talca","7");
INSERT INTO provincias VALUES("26","Cauquenes","7");
INSERT INTO provincias VALUES("27","Curic�","7");
INSERT INTO provincias VALUES("28","Linares","7");
INSERT INTO provincias VALUES("29","Concepci�n","8");
INSERT INTO provincias VALUES("30","Arauco","8");
INSERT INTO provincias VALUES("31","Biob�o","8");
INSERT INTO provincias VALUES("32","�uble","8");
INSERT INTO provincias VALUES("33","Caut�n","9");
INSERT INTO provincias VALUES("34","Malleco","9");
INSERT INTO provincias VALUES("35","Valdivia","14");
INSERT INTO provincias VALUES("36","Ranco","14");
INSERT INTO provincias VALUES("37","Llanquihue","10");
INSERT INTO provincias VALUES("38","Chilo�","10");
INSERT INTO provincias VALUES("39","Osorno","10");
INSERT INTO provincias VALUES("40","Palena","10");
INSERT INTO provincias VALUES("41","Coihaique","11");
INSERT INTO provincias VALUES("42","Ais�n","11");
INSERT INTO provincias VALUES("43","Capit�n Prat","11");
INSERT INTO provincias VALUES("44","General Carrera","11");
INSERT INTO provincias VALUES("45","Magallanes","12");
INSERT INTO provincias VALUES("46","Ant�rtica Chilena","12");
INSERT INTO provincias VALUES("47","Tierra del Fuego","12");
INSERT INTO provincias VALUES("48","�ltima Esperanza","12");
INSERT INTO provincias VALUES("49","Santiago","13");
INSERT INTO provincias VALUES("50","Cordillera","13");
INSERT INTO provincias VALUES("51","Chacabuco","13");
INSERT INTO provincias VALUES("52","Maipo","13");
INSERT INTO provincias VALUES("53","Melipilla","13");
INSERT INTO provincias VALUES("54","Talagante","13");





CREATE TABLE `regiones` (
  `id` int(100) NOT NULL DEFAULT 0,
  `nombre` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `ISO_3166_2_CL` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO regiones VALUES("1","Tarapaca","CL-TA");
INSERT INTO regiones VALUES("2","Antofagasta","CL-AN");
INSERT INTO regiones VALUES("3","Atacama","CL-AT");
INSERT INTO regiones VALUES("4","Coquimbo","CL-CO");
INSERT INTO regiones VALUES("5","Valpara�so","CL-VS");
INSERT INTO regiones VALUES("6","Regi�n del Libertador Gral Bernardo O\'Higgins","CL-LI");
INSERT INTO regiones VALUES("7","Regi�n del Maule","CL-ML");
INSERT INTO regiones VALUES("8","Regi�n del Biob�o","CL-BI");
INSERT INTO regiones VALUES("9","Regi�n de la Araucan�a","CL-AR");
INSERT INTO regiones VALUES("10","Regi�n de Los Lagos","CL-LL");
INSERT INTO regiones VALUES("11","Regi�n Ais�n del Gral. Carlos Ib��ez del Campo","CL-AI");
INSERT INTO regiones VALUES("12","Regi�n de Magallanes y de la Ant�rtica Chilena","CL-MA");
INSERT INTO regiones VALUES("13","Regi�n Metropolitana de Santiago","CL-RM");
INSERT INTO regiones VALUES("14","Regi�n de Los R�os","CL-LR");
INSERT INTO regiones VALUES("15","Arica y Parinacota","CL-AP");





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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO turnos VALUES("1","1","1","2019-03-01 15:44:02","2019-04-03 02:30:59","0","29600","14000","1500");
INSERT INTO turnos VALUES("2","2","1","2019-04-03 02:30:59","2019-04-03 13:57:37","30000","29600","17250","3250");
INSERT INTO turnos VALUES("3","1","1","2019-04-03 13:57:59","2019-07-09 16:52:34","30000","30000","123647","0");
INSERT INTO turnos VALUES("4","2","1","2019-07-09 16:52:34","2019-09-02 23:10:33","45000","30000","723647","0");
INSERT INTO turnos VALUES("5","1","1","2019-09-02 23:11:26","2019-10-20 20:05:41","45000","38000","417229","0");
INSERT INTO turnos VALUES("6","2","1","2019-10-20 20:05:41","2019-10-20 20:23:14","0","38000","0","0");
INSERT INTO turnos VALUES("7","2","1","2019-10-20 20:23:14","2019-10-20 20:23:47","45000","38000","0","0");
INSERT INTO turnos VALUES("8","1","1","2019-10-20 20:24:03","2019-11-04 21:04:55","40000","45000","340175","0");
INSERT INTO turnos VALUES("9","1","1","2019-11-04 21:05:20","","40000","0","0","0");





CREATE TABLE `vendedores` (
  `id_vendedor` int(11) NOT NULL AUTO_INCREMENT,
  `nombreVendedor` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `correoVendedor` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `passwordVendedor` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `nivel` int(2) NOT NULL DEFAULT 1,
  `activo` int(2) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_vendedor`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO vendedores VALUES("1","Vanessa Mart�nez","admin@gmail.com","123456","0","1");
INSERT INTO vendedores VALUES("2","Juan PAvez M","juan@gmail.com","123456","1","1");
INSERT INTO vendedores VALUES("3","Diego P�rez a","diego@gmail.com","123456","1","1");
INSERT INTO vendedores VALUES("4","JUAN SOTO","JUAN@GMAIL.COM","123456","1","1");





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
  `observacion` text COLLATE utf8_spanish_ci DEFAULT NULL,
  `medio_pago` int(2) DEFAULT NULL,
  `id_turno` int(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO ventas VALUES("36","1","2019-10-15 01:23:27","1","1","0","0","135910","25823","161733","161733","","","1","5");
INSERT INTO ventas VALUES("37","1","2019-10-16 01:38:29","1","0","0","0","129677","24639","154316","154316","","","1","5");
INSERT INTO ventas VALUES("38","1","2019-10-17 14:52:42","1","1","0","0","53300","10127","63427","63427","","","1","5");
INSERT INTO ventas VALUES("39","1","2019-10-20 20:04:40","1","0","40","25169","31725","6028","37753","62922","","","1","5");
INSERT INTO ventas VALUES("40","1","2019-10-20 20:24:18","1","1","0","0","50279","9553","59832","59832","","","1","8");
INSERT INTO ventas VALUES("41","1","2019-11-04 19:51:52","1","2","10","10455","79074","15024","94098","104553","","AFDASFDA","1","8");
INSERT INTO ventas VALUES("42","1","2019-11-04 19:56:58","3","1","0","0","92000","17480","109480","109480","","123156","1","8");
INSERT INTO ventas VALUES("43","1","2019-11-04 20:42:31","3","1","10","8529","64508","12257","76765","85294","","","1","8");





CREATE TABLE `ventas_relacional` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `codigo_producto` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `precio_unitario` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `total_unitario` int(11) DEFAULT NULL,
  `id_venta` int(11) DEFAULT NULL,
  `nombre_producto` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO ventas_relacional VALUES("2","1","10000","2","10000","36","BOMBA D/HIDRAULICA()ELECTRICA");
INSERT INTO ventas_relacional VALUES("3","119946","13990","9","125910","36","EMP. VALVULA SUP. 2063072.0");
INSERT INTO ventas_relacional VALUES("4","8","31277","1","31277","37","PASTILLAS FRENOS");
INSERT INTO ventas_relacional VALUES("5","4","32800","3","98400","37","LUNETA MAZDA 5");
INSERT INTO ventas_relacional VALUES("6","1","20500","1","20500","38","BOMBA D/HIDRAULICA()ELECTRICA");
INSERT INTO ventas_relacional VALUES("7","4","32800","1","32800","38","LUNETA MAZDA 5");
INSERT INTO ventas_relacional VALUES("8","8","31277","1","31277","39","PASTILLAS FRENOS");
INSERT INTO ventas_relacional VALUES("9","5","21599","1","21599","39","BOMBA EMBRAGUE");
INSERT INTO ventas_relacional VALUES("10","5","21599","1","21599","40","BOMBA EMBRAGUE");
INSERT INTO ventas_relacional VALUES("11","119946","28680","1","28680","40","EMP. VALVULA SUP. 2063072.0");
INSERT INTO ventas_relacional VALUES("12","119946","28680","2","57360","41","EMP. VALVULA SUP. 2063072.0");
INSERT INTO ventas_relacional VALUES("13","1","30500","1","30500","41","BOMBA D/HIDRAULICA()ELECTRICA");
INSERT INTO ventas_relacional VALUES("14","1","30500","1","30500","42","BOMBA D/HIDRAULICA()ELECTRICA");
INSERT INTO ventas_relacional VALUES("15","7","61500","1","61500","42","ALTERNADOR PEGAUT");
INSERT INTO ventas_relacional VALUES("16","1","30500","1","30500","43","BOMBA D/HIDRAULICA()ELECTRICA");
INSERT INTO ventas_relacional VALUES("17","1","20588","2","41176","43","BOMBA D/HIDRAULICA()ELECTRICA");
INSERT INTO ventas_relacional VALUES("18","123456","0","1","0","43","PRODUCTO DE PRUEBA");



