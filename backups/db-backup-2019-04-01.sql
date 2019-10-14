

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO categoria VALUES("1","Lacteos");
INSERT INTO categoria VALUES("2","Abarrotes");
INSERT INTO categoria VALUES("3","Bebidas");
INSERT INTO categoria VALUES("4","Aseo");
INSERT INTO categoria VALUES("5","Utiles");
INSERT INTO categoria VALUES("6","Higiene");
INSERT INTO categoria VALUES("7","Tabacos");





CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `alias` varchar(4) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO categorias VALUES("1","combustible","pago del combustibles ","COM");
INSERT INTO categorias VALUES("2","mercaderia","pago de mercaderia ","MER");
INSERT INTO categorias VALUES("3","impuestos","pago de impuesto a Sii","IMP");
INSERT INTO categorias VALUES("4","prestamo","prestamo de dinero","PRE");
INSERT INTO categorias VALUES("8","Tag","Pago de tag a santiago","TAG");
INSERT INTO categorias VALUES("9","Nota de pedido","Ingreso de una nota de pedido","NOT");
INSERT INTO categorias VALUES("10","Articulos de oficina","Articulos de oficina","ART");
INSERT INTO categorias VALUES("11","Articulos de aseo","Articulos de aseo","ARA");
INSERT INTO categorias VALUES("12","categoría 9","descripción categoría 9","CAT9");
INSERT INTO categorias VALUES("13","categoría 10","descripción categoría 10","CAT1");





CREATE TABLE `detalle_gastos_generales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mes` int(11) NOT NULL,
  `año` int(11) NOT NULL,
  `categoria` int(11) NOT NULL,
  `monto` int(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2481 DEFAULT CHARSET=latin1;

INSERT INTO detalle_gastos_generales VALUES("1","1","2018","1","0");
INSERT INTO detalle_gastos_generales VALUES("2","1","2018","2","0");
INSERT INTO detalle_gastos_generales VALUES("3","1","2018","3","0");
INSERT INTO detalle_gastos_generales VALUES("4","1","2018","4","0");
INSERT INTO detalle_gastos_generales VALUES("5","1","2018","5","0");
INSERT INTO detalle_gastos_generales VALUES("6","1","2018","6","0");
INSERT INTO detalle_gastos_generales VALUES("7","1","2018","7","0");
INSERT INTO detalle_gastos_generales VALUES("8","1","2018","8","0");
INSERT INTO detalle_gastos_generales VALUES("9","1","2018","9","0");
INSERT INTO detalle_gastos_generales VALUES("10","1","2018","10","0");
INSERT INTO detalle_gastos_generales VALUES("27","2","2018","1","0");
INSERT INTO detalle_gastos_generales VALUES("28","2","2018","2","0");
INSERT INTO detalle_gastos_generales VALUES("29","2","2018","3","0");
INSERT INTO detalle_gastos_generales VALUES("30","2","2018","4","0");
INSERT INTO detalle_gastos_generales VALUES("31","2","2018","5","0");
INSERT INTO detalle_gastos_generales VALUES("32","2","2018","6","0");
INSERT INTO detalle_gastos_generales VALUES("33","2","2018","7","0");
INSERT INTO detalle_gastos_generales VALUES("34","2","2018","8","0");
INSERT INTO detalle_gastos_generales VALUES("35","2","2018","9","0");
INSERT INTO detalle_gastos_generales VALUES("36","2","2018","10","0");
INSERT INTO detalle_gastos_generales VALUES("53","3","2018","1","0");
INSERT INTO detalle_gastos_generales VALUES("54","3","2018","2","0");
INSERT INTO detalle_gastos_generales VALUES("55","3","2018","3","0");
INSERT INTO detalle_gastos_generales VALUES("56","3","2018","4","0");
INSERT INTO detalle_gastos_generales VALUES("57","3","2018","5","0");
INSERT INTO detalle_gastos_generales VALUES("58","3","2018","6","0");
INSERT INTO detalle_gastos_generales VALUES("59","3","2018","7","0");
INSERT INTO detalle_gastos_generales VALUES("60","3","2018","8","0");
INSERT INTO detalle_gastos_generales VALUES("61","3","2018","9","0");
INSERT INTO detalle_gastos_generales VALUES("62","3","2018","10","0");
INSERT INTO detalle_gastos_generales VALUES("79","4","2018","1","0");
INSERT INTO detalle_gastos_generales VALUES("80","4","2018","2","0");
INSERT INTO detalle_gastos_generales VALUES("81","4","2018","3","0");
INSERT INTO detalle_gastos_generales VALUES("82","4","2018","4","0");
INSERT INTO detalle_gastos_generales VALUES("83","4","2018","5","0");
INSERT INTO detalle_gastos_generales VALUES("84","4","2018","6","0");
INSERT INTO detalle_gastos_generales VALUES("85","4","2018","7","0");
INSERT INTO detalle_gastos_generales VALUES("86","4","2018","8","0");
INSERT INTO detalle_gastos_generales VALUES("87","4","2018","9","0");
INSERT INTO detalle_gastos_generales VALUES("88","4","2018","10","0");
INSERT INTO detalle_gastos_generales VALUES("105","5","2018","1","0");
INSERT INTO detalle_gastos_generales VALUES("106","5","2018","2","0");
INSERT INTO detalle_gastos_generales VALUES("107","5","2018","3","0");
INSERT INTO detalle_gastos_generales VALUES("108","5","2018","4","0");
INSERT INTO detalle_gastos_generales VALUES("109","5","2018","5","0");
INSERT INTO detalle_gastos_generales VALUES("110","5","2018","6","0");
INSERT INTO detalle_gastos_generales VALUES("111","5","2018","7","0");
INSERT INTO detalle_gastos_generales VALUES("112","5","2018","8","0");
INSERT INTO detalle_gastos_generales VALUES("113","5","2018","9","0");
INSERT INTO detalle_gastos_generales VALUES("114","5","2018","10","0");
INSERT INTO detalle_gastos_generales VALUES("131","6","2018","1","0");
INSERT INTO detalle_gastos_generales VALUES("132","6","2018","2","0");
INSERT INTO detalle_gastos_generales VALUES("133","6","2018","3","0");
INSERT INTO detalle_gastos_generales VALUES("134","6","2018","4","0");
INSERT INTO detalle_gastos_generales VALUES("135","6","2018","5","0");
INSERT INTO detalle_gastos_generales VALUES("136","6","2018","6","0");
INSERT INTO detalle_gastos_generales VALUES("137","6","2018","7","0");
INSERT INTO detalle_gastos_generales VALUES("138","6","2018","8","0");
INSERT INTO detalle_gastos_generales VALUES("139","6","2018","9","0");
INSERT INTO detalle_gastos_generales VALUES("140","6","2018","10","0");
INSERT INTO detalle_gastos_generales VALUES("157","7","2018","1","0");
INSERT INTO detalle_gastos_generales VALUES("158","7","2018","2","0");
INSERT INTO detalle_gastos_generales VALUES("159","7","2018","3","0");
INSERT INTO detalle_gastos_generales VALUES("160","7","2018","4","0");
INSERT INTO detalle_gastos_generales VALUES("161","7","2018","5","0");
INSERT INTO detalle_gastos_generales VALUES("162","7","2018","6","0");
INSERT INTO detalle_gastos_generales VALUES("163","7","2018","7","0");
INSERT INTO detalle_gastos_generales VALUES("164","7","2018","8","0");
INSERT INTO detalle_gastos_generales VALUES("165","7","2018","9","0");
INSERT INTO detalle_gastos_generales VALUES("166","7","2018","10","0");
INSERT INTO detalle_gastos_generales VALUES("183","8","2018","1","0");
INSERT INTO detalle_gastos_generales VALUES("184","8","2018","2","0");
INSERT INTO detalle_gastos_generales VALUES("185","8","2018","3","0");
INSERT INTO detalle_gastos_generales VALUES("186","8","2018","4","0");
INSERT INTO detalle_gastos_generales VALUES("187","8","2018","5","0");
INSERT INTO detalle_gastos_generales VALUES("188","8","2018","6","0");
INSERT INTO detalle_gastos_generales VALUES("189","8","2018","7","0");
INSERT INTO detalle_gastos_generales VALUES("190","8","2018","8","0");
INSERT INTO detalle_gastos_generales VALUES("191","8","2018","9","0");
INSERT INTO detalle_gastos_generales VALUES("192","8","2018","10","0");
INSERT INTO detalle_gastos_generales VALUES("209","9","2018","1","0");
INSERT INTO detalle_gastos_generales VALUES("210","9","2018","2","0");
INSERT INTO detalle_gastos_generales VALUES("211","9","2018","3","0");
INSERT INTO detalle_gastos_generales VALUES("212","9","2018","4","0");
INSERT INTO detalle_gastos_generales VALUES("213","9","2018","5","0");
INSERT INTO detalle_gastos_generales VALUES("214","9","2018","6","0");
INSERT INTO detalle_gastos_generales VALUES("215","9","2018","7","0");
INSERT INTO detalle_gastos_generales VALUES("216","9","2018","8","0");
INSERT INTO detalle_gastos_generales VALUES("217","9","2018","9","0");
INSERT INTO detalle_gastos_generales VALUES("218","9","2018","10","0");
INSERT INTO detalle_gastos_generales VALUES("235","10","2018","1","0");
INSERT INTO detalle_gastos_generales VALUES("236","10","2018","2","0");
INSERT INTO detalle_gastos_generales VALUES("237","10","2018","3","0");
INSERT INTO detalle_gastos_generales VALUES("238","10","2018","4","0");
INSERT INTO detalle_gastos_generales VALUES("239","10","2018","5","0");
INSERT INTO detalle_gastos_generales VALUES("240","10","2018","6","0");
INSERT INTO detalle_gastos_generales VALUES("241","10","2018","7","0");
INSERT INTO detalle_gastos_generales VALUES("242","10","2018","8","0");
INSERT INTO detalle_gastos_generales VALUES("243","10","2018","9","0");
INSERT INTO detalle_gastos_generales VALUES("244","10","2018","10","0");
INSERT INTO detalle_gastos_generales VALUES("261","11","2018","1","0");
INSERT INTO detalle_gastos_generales VALUES("262","11","2018","2","0");
INSERT INTO detalle_gastos_generales VALUES("263","11","2018","3","0");
INSERT INTO detalle_gastos_generales VALUES("264","11","2018","4","0");
INSERT INTO detalle_gastos_generales VALUES("265","11","2018","5","0");
INSERT INTO detalle_gastos_generales VALUES("266","11","2018","6","0");
INSERT INTO detalle_gastos_generales VALUES("267","11","2018","7","0");
INSERT INTO detalle_gastos_generales VALUES("268","11","2018","8","0");
INSERT INTO detalle_gastos_generales VALUES("269","11","2018","9","0");
INSERT INTO detalle_gastos_generales VALUES("270","11","2018","10","0");
INSERT INTO detalle_gastos_generales VALUES("287","12","2018","1","0");
INSERT INTO detalle_gastos_generales VALUES("288","12","2018","2","0");
INSERT INTO detalle_gastos_generales VALUES("289","12","2018","3","0");
INSERT INTO detalle_gastos_generales VALUES("290","12","2018","4","0");
INSERT INTO detalle_gastos_generales VALUES("291","12","2018","5","0");
INSERT INTO detalle_gastos_generales VALUES("292","12","2018","6","0");
INSERT INTO detalle_gastos_generales VALUES("293","12","2018","7","0");
INSERT INTO detalle_gastos_generales VALUES("294","12","2018","8","0");
INSERT INTO detalle_gastos_generales VALUES("295","12","2018","9","0");
INSERT INTO detalle_gastos_generales VALUES("296","12","2018","10","0");
INSERT INTO detalle_gastos_generales VALUES("313","1","2019","1","10088");
INSERT INTO detalle_gastos_generales VALUES("314","1","2019","2","20000");
INSERT INTO detalle_gastos_generales VALUES("315","1","2019","3","30000");
INSERT INTO detalle_gastos_generales VALUES("316","1","2019","4","40000");
INSERT INTO detalle_gastos_generales VALUES("317","1","2019","5","100000");
INSERT INTO detalle_gastos_generales VALUES("318","1","2019","6","70000");
INSERT INTO detalle_gastos_generales VALUES("319","1","2019","7","80000");
INSERT INTO detalle_gastos_generales VALUES("320","1","2019","8","90000");
INSERT INTO detalle_gastos_generales VALUES("321","1","2019","9","0");
INSERT INTO detalle_gastos_generales VALUES("322","1","2019","10","0");
INSERT INTO detalle_gastos_generales VALUES("339","2","2019","1","15000");
INSERT INTO detalle_gastos_generales VALUES("340","2","2019","2","30000");
INSERT INTO detalle_gastos_generales VALUES("341","2","2019","3","0");
INSERT INTO detalle_gastos_generales VALUES("342","2","2019","4","0");
INSERT INTO detalle_gastos_generales VALUES("343","2","2019","5","0");
INSERT INTO detalle_gastos_generales VALUES("344","2","2019","6","0");
INSERT INTO detalle_gastos_generales VALUES("345","2","2019","7","0");
INSERT INTO detalle_gastos_generales VALUES("346","2","2019","8","0");
INSERT INTO detalle_gastos_generales VALUES("347","2","2019","9","0");
INSERT INTO detalle_gastos_generales VALUES("348","2","2019","10","0");
INSERT INTO detalle_gastos_generales VALUES("365","3","2019","1","20000");
INSERT INTO detalle_gastos_generales VALUES("366","3","2019","2","30000");
INSERT INTO detalle_gastos_generales VALUES("367","3","2019","3","0");
INSERT INTO detalle_gastos_generales VALUES("368","3","2019","4","0");
INSERT INTO detalle_gastos_generales VALUES("369","3","2019","5","0");
INSERT INTO detalle_gastos_generales VALUES("370","3","2019","6","0");
INSERT INTO detalle_gastos_generales VALUES("371","3","2019","7","0");
INSERT INTO detalle_gastos_generales VALUES("372","3","2019","8","0");
INSERT INTO detalle_gastos_generales VALUES("373","3","2019","9","0");
INSERT INTO detalle_gastos_generales VALUES("374","3","2019","10","0");
INSERT INTO detalle_gastos_generales VALUES("391","4","2019","1","25000");
INSERT INTO detalle_gastos_generales VALUES("392","4","2019","2","0");
INSERT INTO detalle_gastos_generales VALUES("393","4","2019","3","0");
INSERT INTO detalle_gastos_generales VALUES("394","4","2019","4","0");
INSERT INTO detalle_gastos_generales VALUES("395","4","2019","5","0");
INSERT INTO detalle_gastos_generales VALUES("396","4","2019","6","0");
INSERT INTO detalle_gastos_generales VALUES("397","4","2019","7","0");
INSERT INTO detalle_gastos_generales VALUES("398","4","2019","8","0");
INSERT INTO detalle_gastos_generales VALUES("399","4","2019","9","0");
INSERT INTO detalle_gastos_generales VALUES("400","4","2019","10","0");
INSERT INTO detalle_gastos_generales VALUES("417","5","2019","1","18000");
INSERT INTO detalle_gastos_generales VALUES("418","5","2019","2","0");
INSERT INTO detalle_gastos_generales VALUES("419","5","2019","3","0");
INSERT INTO detalle_gastos_generales VALUES("420","5","2019","4","0");
INSERT INTO detalle_gastos_generales VALUES("421","5","2019","5","0");
INSERT INTO detalle_gastos_generales VALUES("422","5","2019","6","0");
INSERT INTO detalle_gastos_generales VALUES("423","5","2019","7","0");
INSERT INTO detalle_gastos_generales VALUES("424","5","2019","8","0");
INSERT INTO detalle_gastos_generales VALUES("425","5","2019","9","0");
INSERT INTO detalle_gastos_generales VALUES("426","5","2019","10","0");
INSERT INTO detalle_gastos_generales VALUES("443","6","2019","1","0");
INSERT INTO detalle_gastos_generales VALUES("444","6","2019","2","0");
INSERT INTO detalle_gastos_generales VALUES("445","6","2019","3","0");
INSERT INTO detalle_gastos_generales VALUES("446","6","2019","4","0");
INSERT INTO detalle_gastos_generales VALUES("447","6","2019","5","0");
INSERT INTO detalle_gastos_generales VALUES("448","6","2019","6","0");
INSERT INTO detalle_gastos_generales VALUES("449","6","2019","7","0");
INSERT INTO detalle_gastos_generales VALUES("450","6","2019","8","0");
INSERT INTO detalle_gastos_generales VALUES("451","6","2019","9","0");
INSERT INTO detalle_gastos_generales VALUES("452","6","2019","10","0");
INSERT INTO detalle_gastos_generales VALUES("469","7","2019","1","0");
INSERT INTO detalle_gastos_generales VALUES("470","7","2019","2","0");
INSERT INTO detalle_gastos_generales VALUES("471","7","2019","3","0");
INSERT INTO detalle_gastos_generales VALUES("472","7","2019","4","0");
INSERT INTO detalle_gastos_generales VALUES("473","7","2019","5","0");
INSERT INTO detalle_gastos_generales VALUES("474","7","2019","6","0");
INSERT INTO detalle_gastos_generales VALUES("475","7","2019","7","0");
INSERT INTO detalle_gastos_generales VALUES("476","7","2019","8","0");
INSERT INTO detalle_gastos_generales VALUES("477","7","2019","9","0");
INSERT INTO detalle_gastos_generales VALUES("478","7","2019","10","0");
INSERT INTO detalle_gastos_generales VALUES("495","8","2019","1","0");
INSERT INTO detalle_gastos_generales VALUES("496","8","2019","2","0");
INSERT INTO detalle_gastos_generales VALUES("497","8","2019","3","0");
INSERT INTO detalle_gastos_generales VALUES("498","8","2019","4","0");
INSERT INTO detalle_gastos_generales VALUES("499","8","2019","5","0");
INSERT INTO detalle_gastos_generales VALUES("500","8","2019","6","0");
INSERT INTO detalle_gastos_generales VALUES("501","8","2019","7","0");
INSERT INTO detalle_gastos_generales VALUES("502","8","2019","8","0");
INSERT INTO detalle_gastos_generales VALUES("503","8","2019","9","0");
INSERT INTO detalle_gastos_generales VALUES("504","8","2019","10","0");
INSERT INTO detalle_gastos_generales VALUES("521","9","2019","1","0");
INSERT INTO detalle_gastos_generales VALUES("522","9","2019","2","0");
INSERT INTO detalle_gastos_generales VALUES("523","9","2019","3","0");
INSERT INTO detalle_gastos_generales VALUES("524","9","2019","4","0");
INSERT INTO detalle_gastos_generales VALUES("525","9","2019","5","0");
INSERT INTO detalle_gastos_generales VALUES("526","9","2019","6","0");
INSERT INTO detalle_gastos_generales VALUES("527","9","2019","7","0");
INSERT INTO detalle_gastos_generales VALUES("528","9","2019","8","0");
INSERT INTO detalle_gastos_generales VALUES("529","9","2019","9","0");
INSERT INTO detalle_gastos_generales VALUES("530","9","2019","10","0");
INSERT INTO detalle_gastos_generales VALUES("547","10","2019","1","0");
INSERT INTO detalle_gastos_generales VALUES("548","10","2019","2","0");
INSERT INTO detalle_gastos_generales VALUES("549","10","2019","3","0");
INSERT INTO detalle_gastos_generales VALUES("550","10","2019","4","0");
INSERT INTO detalle_gastos_generales VALUES("551","10","2019","5","0");
INSERT INTO detalle_gastos_generales VALUES("552","10","2019","6","0");
INSERT INTO detalle_gastos_generales VALUES("553","10","2019","7","0");
INSERT INTO detalle_gastos_generales VALUES("554","10","2019","8","0");
INSERT INTO detalle_gastos_generales VALUES("555","10","2019","9","0");
INSERT INTO detalle_gastos_generales VALUES("556","10","2019","10","0");
INSERT INTO detalle_gastos_generales VALUES("573","11","2019","1","0");
INSERT INTO detalle_gastos_generales VALUES("574","11","2019","2","0");
INSERT INTO detalle_gastos_generales VALUES("575","11","2019","3","0");
INSERT INTO detalle_gastos_generales VALUES("576","11","2019","4","0");
INSERT INTO detalle_gastos_generales VALUES("577","11","2019","5","0");
INSERT INTO detalle_gastos_generales VALUES("578","11","2019","6","0");
INSERT INTO detalle_gastos_generales VALUES("579","11","2019","7","0");
INSERT INTO detalle_gastos_generales VALUES("580","11","2019","8","0");
INSERT INTO detalle_gastos_generales VALUES("581","11","2019","9","0");
INSERT INTO detalle_gastos_generales VALUES("582","11","2019","10","0");
INSERT INTO detalle_gastos_generales VALUES("599","12","2019","1","0");
INSERT INTO detalle_gastos_generales VALUES("600","12","2019","2","0");
INSERT INTO detalle_gastos_generales VALUES("601","12","2019","3","0");
INSERT INTO detalle_gastos_generales VALUES("602","12","2019","4","0");
INSERT INTO detalle_gastos_generales VALUES("603","12","2019","5","0");
INSERT INTO detalle_gastos_generales VALUES("604","12","2019","6","0");
INSERT INTO detalle_gastos_generales VALUES("605","12","2019","7","0");
INSERT INTO detalle_gastos_generales VALUES("606","12","2019","8","0");
INSERT INTO detalle_gastos_generales VALUES("607","12","2019","9","0");
INSERT INTO detalle_gastos_generales VALUES("608","12","2019","10","0");
INSERT INTO detalle_gastos_generales VALUES("625","1","2020","1","0");
INSERT INTO detalle_gastos_generales VALUES("626","1","2020","2","0");
INSERT INTO detalle_gastos_generales VALUES("627","1","2020","3","0");
INSERT INTO detalle_gastos_generales VALUES("628","1","2020","4","0");
INSERT INTO detalle_gastos_generales VALUES("629","1","2020","5","0");
INSERT INTO detalle_gastos_generales VALUES("630","1","2020","6","0");
INSERT INTO detalle_gastos_generales VALUES("631","1","2020","7","0");
INSERT INTO detalle_gastos_generales VALUES("632","1","2020","8","0");
INSERT INTO detalle_gastos_generales VALUES("633","1","2020","9","0");
INSERT INTO detalle_gastos_generales VALUES("634","1","2020","10","0");
INSERT INTO detalle_gastos_generales VALUES("651","2","2020","1","0");
INSERT INTO detalle_gastos_generales VALUES("652","2","2020","2","0");
INSERT INTO detalle_gastos_generales VALUES("653","2","2020","3","0");
INSERT INTO detalle_gastos_generales VALUES("654","2","2020","4","0");
INSERT INTO detalle_gastos_generales VALUES("655","2","2020","5","0");
INSERT INTO detalle_gastos_generales VALUES("656","2","2020","6","0");
INSERT INTO detalle_gastos_generales VALUES("657","2","2020","7","0");
INSERT INTO detalle_gastos_generales VALUES("658","2","2020","8","0");
INSERT INTO detalle_gastos_generales VALUES("659","2","2020","9","0");
INSERT INTO detalle_gastos_generales VALUES("660","2","2020","10","0");
INSERT INTO detalle_gastos_generales VALUES("677","3","2020","1","0");
INSERT INTO detalle_gastos_generales VALUES("678","3","2020","2","0");
INSERT INTO detalle_gastos_generales VALUES("679","3","2020","3","0");
INSERT INTO detalle_gastos_generales VALUES("680","3","2020","4","0");
INSERT INTO detalle_gastos_generales VALUES("681","3","2020","5","0");
INSERT INTO detalle_gastos_generales VALUES("682","3","2020","6","0");
INSERT INTO detalle_gastos_generales VALUES("683","3","2020","7","0");
INSERT INTO detalle_gastos_generales VALUES("684","3","2020","8","0");
INSERT INTO detalle_gastos_generales VALUES("685","3","2020","9","0");
INSERT INTO detalle_gastos_generales VALUES("686","3","2020","10","0");
INSERT INTO detalle_gastos_generales VALUES("703","4","2020","1","0");
INSERT INTO detalle_gastos_generales VALUES("704","4","2020","2","0");
INSERT INTO detalle_gastos_generales VALUES("705","4","2020","3","0");
INSERT INTO detalle_gastos_generales VALUES("706","4","2020","4","0");
INSERT INTO detalle_gastos_generales VALUES("707","4","2020","5","0");
INSERT INTO detalle_gastos_generales VALUES("708","4","2020","6","0");
INSERT INTO detalle_gastos_generales VALUES("709","4","2020","7","0");
INSERT INTO detalle_gastos_generales VALUES("710","4","2020","8","0");
INSERT INTO detalle_gastos_generales VALUES("711","4","2020","9","0");
INSERT INTO detalle_gastos_generales VALUES("712","4","2020","10","0");
INSERT INTO detalle_gastos_generales VALUES("729","5","2020","1","0");
INSERT INTO detalle_gastos_generales VALUES("730","5","2020","2","0");
INSERT INTO detalle_gastos_generales VALUES("731","5","2020","3","0");
INSERT INTO detalle_gastos_generales VALUES("732","5","2020","4","0");
INSERT INTO detalle_gastos_generales VALUES("733","5","2020","5","0");
INSERT INTO detalle_gastos_generales VALUES("734","5","2020","6","0");
INSERT INTO detalle_gastos_generales VALUES("735","5","2020","7","0");
INSERT INTO detalle_gastos_generales VALUES("736","5","2020","8","0");
INSERT INTO detalle_gastos_generales VALUES("737","5","2020","9","0");
INSERT INTO detalle_gastos_generales VALUES("738","5","2020","10","0");
INSERT INTO detalle_gastos_generales VALUES("755","6","2020","1","0");
INSERT INTO detalle_gastos_generales VALUES("756","6","2020","2","0");
INSERT INTO detalle_gastos_generales VALUES("757","6","2020","3","0");
INSERT INTO detalle_gastos_generales VALUES("758","6","2020","4","0");
INSERT INTO detalle_gastos_generales VALUES("759","6","2020","5","0");
INSERT INTO detalle_gastos_generales VALUES("760","6","2020","6","0");
INSERT INTO detalle_gastos_generales VALUES("761","6","2020","7","0");
INSERT INTO detalle_gastos_generales VALUES("762","6","2020","8","0");
INSERT INTO detalle_gastos_generales VALUES("763","6","2020","9","0");
INSERT INTO detalle_gastos_generales VALUES("764","6","2020","10","0");
INSERT INTO detalle_gastos_generales VALUES("781","7","2020","1","0");
INSERT INTO detalle_gastos_generales VALUES("782","7","2020","2","0");
INSERT INTO detalle_gastos_generales VALUES("783","7","2020","3","0");
INSERT INTO detalle_gastos_generales VALUES("784","7","2020","4","0");
INSERT INTO detalle_gastos_generales VALUES("785","7","2020","5","0");
INSERT INTO detalle_gastos_generales VALUES("786","7","2020","6","0");
INSERT INTO detalle_gastos_generales VALUES("787","7","2020","7","0");
INSERT INTO detalle_gastos_generales VALUES("788","7","2020","8","0");
INSERT INTO detalle_gastos_generales VALUES("789","7","2020","9","0");
INSERT INTO detalle_gastos_generales VALUES("790","7","2020","10","0");
INSERT INTO detalle_gastos_generales VALUES("807","8","2020","1","0");
INSERT INTO detalle_gastos_generales VALUES("808","8","2020","2","0");
INSERT INTO detalle_gastos_generales VALUES("809","8","2020","3","0");
INSERT INTO detalle_gastos_generales VALUES("810","8","2020","4","0");
INSERT INTO detalle_gastos_generales VALUES("811","8","2020","5","0");
INSERT INTO detalle_gastos_generales VALUES("812","8","2020","6","0");
INSERT INTO detalle_gastos_generales VALUES("813","8","2020","7","0");
INSERT INTO detalle_gastos_generales VALUES("814","8","2020","8","0");
INSERT INTO detalle_gastos_generales VALUES("815","8","2020","9","0");
INSERT INTO detalle_gastos_generales VALUES("816","8","2020","10","0");
INSERT INTO detalle_gastos_generales VALUES("833","9","2020","1","0");
INSERT INTO detalle_gastos_generales VALUES("834","9","2020","2","0");
INSERT INTO detalle_gastos_generales VALUES("835","9","2020","3","0");
INSERT INTO detalle_gastos_generales VALUES("836","9","2020","4","0");
INSERT INTO detalle_gastos_generales VALUES("837","9","2020","5","0");
INSERT INTO detalle_gastos_generales VALUES("838","9","2020","6","0");
INSERT INTO detalle_gastos_generales VALUES("839","9","2020","7","0");
INSERT INTO detalle_gastos_generales VALUES("840","9","2020","8","0");
INSERT INTO detalle_gastos_generales VALUES("841","9","2020","9","0");
INSERT INTO detalle_gastos_generales VALUES("842","9","2020","10","0");
INSERT INTO detalle_gastos_generales VALUES("859","10","2020","1","0");
INSERT INTO detalle_gastos_generales VALUES("860","10","2020","2","0");
INSERT INTO detalle_gastos_generales VALUES("861","10","2020","3","0");
INSERT INTO detalle_gastos_generales VALUES("862","10","2020","4","0");
INSERT INTO detalle_gastos_generales VALUES("863","10","2020","5","0");
INSERT INTO detalle_gastos_generales VALUES("864","10","2020","6","0");
INSERT INTO detalle_gastos_generales VALUES("865","10","2020","7","0");
INSERT INTO detalle_gastos_generales VALUES("866","10","2020","8","0");
INSERT INTO detalle_gastos_generales VALUES("867","10","2020","9","0");
INSERT INTO detalle_gastos_generales VALUES("868","10","2020","10","0");
INSERT INTO detalle_gastos_generales VALUES("885","11","2020","1","0");
INSERT INTO detalle_gastos_generales VALUES("886","11","2020","2","0");
INSERT INTO detalle_gastos_generales VALUES("887","11","2020","3","0");
INSERT INTO detalle_gastos_generales VALUES("888","11","2020","4","0");
INSERT INTO detalle_gastos_generales VALUES("889","11","2020","5","0");
INSERT INTO detalle_gastos_generales VALUES("890","11","2020","6","0");
INSERT INTO detalle_gastos_generales VALUES("891","11","2020","7","0");
INSERT INTO detalle_gastos_generales VALUES("892","11","2020","8","0");
INSERT INTO detalle_gastos_generales VALUES("893","11","2020","9","0");
INSERT INTO detalle_gastos_generales VALUES("894","11","2020","10","0");
INSERT INTO detalle_gastos_generales VALUES("911","12","2020","1","0");
INSERT INTO detalle_gastos_generales VALUES("912","12","2020","2","0");
INSERT INTO detalle_gastos_generales VALUES("913","12","2020","3","0");
INSERT INTO detalle_gastos_generales VALUES("914","12","2020","4","0");
INSERT INTO detalle_gastos_generales VALUES("915","12","2020","5","0");
INSERT INTO detalle_gastos_generales VALUES("916","12","2020","6","0");
INSERT INTO detalle_gastos_generales VALUES("917","12","2020","7","0");
INSERT INTO detalle_gastos_generales VALUES("918","12","2020","8","0");
INSERT INTO detalle_gastos_generales VALUES("919","12","2020","9","0");
INSERT INTO detalle_gastos_generales VALUES("920","12","2020","10","0");
INSERT INTO detalle_gastos_generales VALUES("937","1","2021","1","0");
INSERT INTO detalle_gastos_generales VALUES("938","1","2021","2","0");
INSERT INTO detalle_gastos_generales VALUES("939","1","2021","3","0");
INSERT INTO detalle_gastos_generales VALUES("940","1","2021","4","0");
INSERT INTO detalle_gastos_generales VALUES("941","1","2021","5","0");
INSERT INTO detalle_gastos_generales VALUES("942","1","2021","6","0");
INSERT INTO detalle_gastos_generales VALUES("943","1","2021","7","0");
INSERT INTO detalle_gastos_generales VALUES("944","1","2021","8","0");
INSERT INTO detalle_gastos_generales VALUES("945","1","2021","9","0");
INSERT INTO detalle_gastos_generales VALUES("946","1","2021","10","0");
INSERT INTO detalle_gastos_generales VALUES("963","2","2021","1","0");
INSERT INTO detalle_gastos_generales VALUES("964","2","2021","2","0");
INSERT INTO detalle_gastos_generales VALUES("965","2","2021","3","0");
INSERT INTO detalle_gastos_generales VALUES("966","2","2021","4","0");
INSERT INTO detalle_gastos_generales VALUES("967","2","2021","5","0");
INSERT INTO detalle_gastos_generales VALUES("968","2","2021","6","0");
INSERT INTO detalle_gastos_generales VALUES("969","2","2021","7","0");
INSERT INTO detalle_gastos_generales VALUES("970","2","2021","8","0");
INSERT INTO detalle_gastos_generales VALUES("971","2","2021","9","0");
INSERT INTO detalle_gastos_generales VALUES("972","2","2021","10","0");
INSERT INTO detalle_gastos_generales VALUES("989","3","2021","1","0");
INSERT INTO detalle_gastos_generales VALUES("990","3","2021","2","0");
INSERT INTO detalle_gastos_generales VALUES("991","3","2021","3","0");
INSERT INTO detalle_gastos_generales VALUES("992","3","2021","4","0");
INSERT INTO detalle_gastos_generales VALUES("993","3","2021","5","0");
INSERT INTO detalle_gastos_generales VALUES("994","3","2021","6","0");
INSERT INTO detalle_gastos_generales VALUES("995","3","2021","7","0");
INSERT INTO detalle_gastos_generales VALUES("996","3","2021","8","0");
INSERT INTO detalle_gastos_generales VALUES("997","3","2021","9","0");
INSERT INTO detalle_gastos_generales VALUES("998","3","2021","10","0");
INSERT INTO detalle_gastos_generales VALUES("1015","4","2021","1","0");
INSERT INTO detalle_gastos_generales VALUES("1016","4","2021","2","0");
INSERT INTO detalle_gastos_generales VALUES("1017","4","2021","3","0");
INSERT INTO detalle_gastos_generales VALUES("1018","4","2021","4","0");
INSERT INTO detalle_gastos_generales VALUES("1019","4","2021","5","0");
INSERT INTO detalle_gastos_generales VALUES("1020","4","2021","6","0");
INSERT INTO detalle_gastos_generales VALUES("1021","4","2021","7","0");
INSERT INTO detalle_gastos_generales VALUES("1022","4","2021","8","0");
INSERT INTO detalle_gastos_generales VALUES("1023","4","2021","9","0");
INSERT INTO detalle_gastos_generales VALUES("1024","4","2021","10","0");
INSERT INTO detalle_gastos_generales VALUES("1041","5","2021","1","0");
INSERT INTO detalle_gastos_generales VALUES("1042","5","2021","2","0");
INSERT INTO detalle_gastos_generales VALUES("1043","5","2021","3","0");
INSERT INTO detalle_gastos_generales VALUES("1044","5","2021","4","0");
INSERT INTO detalle_gastos_generales VALUES("1045","5","2021","5","0");
INSERT INTO detalle_gastos_generales VALUES("1046","5","2021","6","0");
INSERT INTO detalle_gastos_generales VALUES("1047","5","2021","7","0");
INSERT INTO detalle_gastos_generales VALUES("1048","5","2021","8","0");
INSERT INTO detalle_gastos_generales VALUES("1049","5","2021","9","0");
INSERT INTO detalle_gastos_generales VALUES("1050","5","2021","10","0");
INSERT INTO detalle_gastos_generales VALUES("1067","6","2021","1","0");
INSERT INTO detalle_gastos_generales VALUES("1068","6","2021","2","0");
INSERT INTO detalle_gastos_generales VALUES("1069","6","2021","3","0");
INSERT INTO detalle_gastos_generales VALUES("1070","6","2021","4","0");
INSERT INTO detalle_gastos_generales VALUES("1071","6","2021","5","0");
INSERT INTO detalle_gastos_generales VALUES("1072","6","2021","6","0");
INSERT INTO detalle_gastos_generales VALUES("1073","6","2021","7","0");
INSERT INTO detalle_gastos_generales VALUES("1074","6","2021","8","0");
INSERT INTO detalle_gastos_generales VALUES("1075","6","2021","9","0");
INSERT INTO detalle_gastos_generales VALUES("1076","6","2021","10","0");
INSERT INTO detalle_gastos_generales VALUES("1093","7","2021","1","0");
INSERT INTO detalle_gastos_generales VALUES("1094","7","2021","2","0");
INSERT INTO detalle_gastos_generales VALUES("1095","7","2021","3","0");
INSERT INTO detalle_gastos_generales VALUES("1096","7","2021","4","0");
INSERT INTO detalle_gastos_generales VALUES("1097","7","2021","5","0");
INSERT INTO detalle_gastos_generales VALUES("1098","7","2021","6","0");
INSERT INTO detalle_gastos_generales VALUES("1099","7","2021","7","0");
INSERT INTO detalle_gastos_generales VALUES("1100","7","2021","8","0");
INSERT INTO detalle_gastos_generales VALUES("1101","7","2021","9","0");
INSERT INTO detalle_gastos_generales VALUES("1102","7","2021","10","0");
INSERT INTO detalle_gastos_generales VALUES("1119","8","2021","1","0");
INSERT INTO detalle_gastos_generales VALUES("1120","8","2021","2","0");
INSERT INTO detalle_gastos_generales VALUES("1121","8","2021","3","0");
INSERT INTO detalle_gastos_generales VALUES("1122","8","2021","4","0");
INSERT INTO detalle_gastos_generales VALUES("1123","8","2021","5","0");
INSERT INTO detalle_gastos_generales VALUES("1124","8","2021","6","0");
INSERT INTO detalle_gastos_generales VALUES("1125","8","2021","7","0");
INSERT INTO detalle_gastos_generales VALUES("1126","8","2021","8","0");
INSERT INTO detalle_gastos_generales VALUES("1127","8","2021","9","0");
INSERT INTO detalle_gastos_generales VALUES("1128","8","2021","10","0");
INSERT INTO detalle_gastos_generales VALUES("1145","9","2021","1","0");
INSERT INTO detalle_gastos_generales VALUES("1146","9","2021","2","0");
INSERT INTO detalle_gastos_generales VALUES("1147","9","2021","3","0");
INSERT INTO detalle_gastos_generales VALUES("1148","9","2021","4","0");
INSERT INTO detalle_gastos_generales VALUES("1149","9","2021","5","0");
INSERT INTO detalle_gastos_generales VALUES("1150","9","2021","6","0");
INSERT INTO detalle_gastos_generales VALUES("1151","9","2021","7","0");
INSERT INTO detalle_gastos_generales VALUES("1152","9","2021","8","0");
INSERT INTO detalle_gastos_generales VALUES("1153","9","2021","9","0");
INSERT INTO detalle_gastos_generales VALUES("1154","9","2021","10","0");
INSERT INTO detalle_gastos_generales VALUES("1171","10","2021","1","0");
INSERT INTO detalle_gastos_generales VALUES("1172","10","2021","2","0");
INSERT INTO detalle_gastos_generales VALUES("1173","10","2021","3","0");
INSERT INTO detalle_gastos_generales VALUES("1174","10","2021","4","0");
INSERT INTO detalle_gastos_generales VALUES("1175","10","2021","5","0");
INSERT INTO detalle_gastos_generales VALUES("1176","10","2021","6","0");
INSERT INTO detalle_gastos_generales VALUES("1177","10","2021","7","0");
INSERT INTO detalle_gastos_generales VALUES("1178","10","2021","8","0");
INSERT INTO detalle_gastos_generales VALUES("1179","10","2021","9","0");
INSERT INTO detalle_gastos_generales VALUES("1180","10","2021","10","0");
INSERT INTO detalle_gastos_generales VALUES("1197","11","2021","1","0");
INSERT INTO detalle_gastos_generales VALUES("1198","11","2021","2","0");
INSERT INTO detalle_gastos_generales VALUES("1199","11","2021","3","0");
INSERT INTO detalle_gastos_generales VALUES("1200","11","2021","4","0");
INSERT INTO detalle_gastos_generales VALUES("1201","11","2021","5","0");
INSERT INTO detalle_gastos_generales VALUES("1202","11","2021","6","0");
INSERT INTO detalle_gastos_generales VALUES("1203","11","2021","7","0");
INSERT INTO detalle_gastos_generales VALUES("1204","11","2021","8","0");
INSERT INTO detalle_gastos_generales VALUES("1205","11","2021","9","0");
INSERT INTO detalle_gastos_generales VALUES("1206","11","2021","10","0");
INSERT INTO detalle_gastos_generales VALUES("1223","12","2021","1","0");
INSERT INTO detalle_gastos_generales VALUES("1224","12","2021","2","0");
INSERT INTO detalle_gastos_generales VALUES("1225","12","2021","3","0");
INSERT INTO detalle_gastos_generales VALUES("1226","12","2021","4","0");
INSERT INTO detalle_gastos_generales VALUES("1227","12","2021","5","0");
INSERT INTO detalle_gastos_generales VALUES("1228","12","2021","6","0");
INSERT INTO detalle_gastos_generales VALUES("1229","12","2021","7","0");
INSERT INTO detalle_gastos_generales VALUES("1230","12","2021","8","0");
INSERT INTO detalle_gastos_generales VALUES("1231","12","2021","9","0");
INSERT INTO detalle_gastos_generales VALUES("1232","12","2021","10","0");
INSERT INTO detalle_gastos_generales VALUES("1249","1","2022","1","0");
INSERT INTO detalle_gastos_generales VALUES("1250","1","2022","2","0");
INSERT INTO detalle_gastos_generales VALUES("1251","1","2022","3","0");
INSERT INTO detalle_gastos_generales VALUES("1252","1","2022","4","0");
INSERT INTO detalle_gastos_generales VALUES("1253","1","2022","5","0");
INSERT INTO detalle_gastos_generales VALUES("1254","1","2022","6","0");
INSERT INTO detalle_gastos_generales VALUES("1255","1","2022","7","0");
INSERT INTO detalle_gastos_generales VALUES("1256","1","2022","8","0");
INSERT INTO detalle_gastos_generales VALUES("1257","1","2022","9","0");
INSERT INTO detalle_gastos_generales VALUES("1258","1","2022","10","0");
INSERT INTO detalle_gastos_generales VALUES("1275","2","2022","1","0");
INSERT INTO detalle_gastos_generales VALUES("1276","2","2022","2","0");
INSERT INTO detalle_gastos_generales VALUES("1277","2","2022","3","0");
INSERT INTO detalle_gastos_generales VALUES("1278","2","2022","4","0");
INSERT INTO detalle_gastos_generales VALUES("1279","2","2022","5","0");
INSERT INTO detalle_gastos_generales VALUES("1280","2","2022","6","0");
INSERT INTO detalle_gastos_generales VALUES("1281","2","2022","7","0");
INSERT INTO detalle_gastos_generales VALUES("1282","2","2022","8","0");
INSERT INTO detalle_gastos_generales VALUES("1283","2","2022","9","0");
INSERT INTO detalle_gastos_generales VALUES("1284","2","2022","10","0");
INSERT INTO detalle_gastos_generales VALUES("1301","3","2022","1","0");
INSERT INTO detalle_gastos_generales VALUES("1302","3","2022","2","0");
INSERT INTO detalle_gastos_generales VALUES("1303","3","2022","3","0");
INSERT INTO detalle_gastos_generales VALUES("1304","3","2022","4","0");
INSERT INTO detalle_gastos_generales VALUES("1305","3","2022","5","0");
INSERT INTO detalle_gastos_generales VALUES("1306","3","2022","6","0");
INSERT INTO detalle_gastos_generales VALUES("1307","3","2022","7","0");
INSERT INTO detalle_gastos_generales VALUES("1308","3","2022","8","0");
INSERT INTO detalle_gastos_generales VALUES("1309","3","2022","9","0");
INSERT INTO detalle_gastos_generales VALUES("1310","3","2022","10","0");
INSERT INTO detalle_gastos_generales VALUES("1327","4","2022","1","0");
INSERT INTO detalle_gastos_generales VALUES("1328","4","2022","2","0");
INSERT INTO detalle_gastos_generales VALUES("1329","4","2022","3","0");
INSERT INTO detalle_gastos_generales VALUES("1330","4","2022","4","0");
INSERT INTO detalle_gastos_generales VALUES("1331","4","2022","5","0");
INSERT INTO detalle_gastos_generales VALUES("1332","4","2022","6","0");
INSERT INTO detalle_gastos_generales VALUES("1333","4","2022","7","0");
INSERT INTO detalle_gastos_generales VALUES("1334","4","2022","8","0");
INSERT INTO detalle_gastos_generales VALUES("1335","4","2022","9","0");
INSERT INTO detalle_gastos_generales VALUES("1336","4","2022","10","0");
INSERT INTO detalle_gastos_generales VALUES("1353","5","2022","1","0");
INSERT INTO detalle_gastos_generales VALUES("1354","5","2022","2","0");
INSERT INTO detalle_gastos_generales VALUES("1355","5","2022","3","0");
INSERT INTO detalle_gastos_generales VALUES("1356","5","2022","4","0");
INSERT INTO detalle_gastos_generales VALUES("1357","5","2022","5","0");
INSERT INTO detalle_gastos_generales VALUES("1358","5","2022","6","0");
INSERT INTO detalle_gastos_generales VALUES("1359","5","2022","7","0");
INSERT INTO detalle_gastos_generales VALUES("1360","5","2022","8","0");
INSERT INTO detalle_gastos_generales VALUES("1361","5","2022","9","0");
INSERT INTO detalle_gastos_generales VALUES("1362","5","2022","10","0");
INSERT INTO detalle_gastos_generales VALUES("1379","6","2022","1","0");
INSERT INTO detalle_gastos_generales VALUES("1380","6","2022","2","0");
INSERT INTO detalle_gastos_generales VALUES("1381","6","2022","3","0");
INSERT INTO detalle_gastos_generales VALUES("1382","6","2022","4","0");
INSERT INTO detalle_gastos_generales VALUES("1383","6","2022","5","0");
INSERT INTO detalle_gastos_generales VALUES("1384","6","2022","6","0");
INSERT INTO detalle_gastos_generales VALUES("1385","6","2022","7","0");
INSERT INTO detalle_gastos_generales VALUES("1386","6","2022","8","0");
INSERT INTO detalle_gastos_generales VALUES("1387","6","2022","9","0");
INSERT INTO detalle_gastos_generales VALUES("1388","6","2022","10","0");
INSERT INTO detalle_gastos_generales VALUES("1405","7","2022","1","0");
INSERT INTO detalle_gastos_generales VALUES("1406","7","2022","2","0");
INSERT INTO detalle_gastos_generales VALUES("1407","7","2022","3","0");
INSERT INTO detalle_gastos_generales VALUES("1408","7","2022","4","0");
INSERT INTO detalle_gastos_generales VALUES("1409","7","2022","5","0");
INSERT INTO detalle_gastos_generales VALUES("1410","7","2022","6","0");
INSERT INTO detalle_gastos_generales VALUES("1411","7","2022","7","0");
INSERT INTO detalle_gastos_generales VALUES("1412","7","2022","8","0");
INSERT INTO detalle_gastos_generales VALUES("1413","7","2022","9","0");
INSERT INTO detalle_gastos_generales VALUES("1414","7","2022","10","0");
INSERT INTO detalle_gastos_generales VALUES("1431","8","2022","1","0");
INSERT INTO detalle_gastos_generales VALUES("1432","8","2022","2","0");
INSERT INTO detalle_gastos_generales VALUES("1433","8","2022","3","0");
INSERT INTO detalle_gastos_generales VALUES("1434","8","2022","4","0");
INSERT INTO detalle_gastos_generales VALUES("1435","8","2022","5","0");
INSERT INTO detalle_gastos_generales VALUES("1436","8","2022","6","0");
INSERT INTO detalle_gastos_generales VALUES("1437","8","2022","7","0");
INSERT INTO detalle_gastos_generales VALUES("1438","8","2022","8","0");
INSERT INTO detalle_gastos_generales VALUES("1439","8","2022","9","0");
INSERT INTO detalle_gastos_generales VALUES("1440","8","2022","10","0");
INSERT INTO detalle_gastos_generales VALUES("1457","9","2022","1","0");
INSERT INTO detalle_gastos_generales VALUES("1458","9","2022","2","0");
INSERT INTO detalle_gastos_generales VALUES("1459","9","2022","3","0");
INSERT INTO detalle_gastos_generales VALUES("1460","9","2022","4","0");
INSERT INTO detalle_gastos_generales VALUES("1461","9","2022","5","0");
INSERT INTO detalle_gastos_generales VALUES("1462","9","2022","6","0");
INSERT INTO detalle_gastos_generales VALUES("1463","9","2022","7","0");
INSERT INTO detalle_gastos_generales VALUES("1464","9","2022","8","0");
INSERT INTO detalle_gastos_generales VALUES("1465","9","2022","9","0");
INSERT INTO detalle_gastos_generales VALUES("1466","9","2022","10","0");
INSERT INTO detalle_gastos_generales VALUES("1483","10","2022","1","0");
INSERT INTO detalle_gastos_generales VALUES("1484","10","2022","2","0");
INSERT INTO detalle_gastos_generales VALUES("1485","10","2022","3","0");
INSERT INTO detalle_gastos_generales VALUES("1486","10","2022","4","0");
INSERT INTO detalle_gastos_generales VALUES("1487","10","2022","5","0");
INSERT INTO detalle_gastos_generales VALUES("1488","10","2022","6","0");
INSERT INTO detalle_gastos_generales VALUES("1489","10","2022","7","0");
INSERT INTO detalle_gastos_generales VALUES("1490","10","2022","8","0");
INSERT INTO detalle_gastos_generales VALUES("1491","10","2022","9","0");
INSERT INTO detalle_gastos_generales VALUES("1492","10","2022","10","0");
INSERT INTO detalle_gastos_generales VALUES("1509","11","2022","1","0");
INSERT INTO detalle_gastos_generales VALUES("1510","11","2022","2","0");
INSERT INTO detalle_gastos_generales VALUES("1511","11","2022","3","0");
INSERT INTO detalle_gastos_generales VALUES("1512","11","2022","4","0");
INSERT INTO detalle_gastos_generales VALUES("1513","11","2022","5","0");
INSERT INTO detalle_gastos_generales VALUES("1514","11","2022","6","0");
INSERT INTO detalle_gastos_generales VALUES("1515","11","2022","7","0");
INSERT INTO detalle_gastos_generales VALUES("1516","11","2022","8","0");
INSERT INTO detalle_gastos_generales VALUES("1517","11","2022","9","0");
INSERT INTO detalle_gastos_generales VALUES("1518","11","2022","10","0");
INSERT INTO detalle_gastos_generales VALUES("1535","12","2022","1","0");
INSERT INTO detalle_gastos_generales VALUES("1536","12","2022","2","0");
INSERT INTO detalle_gastos_generales VALUES("1537","12","2022","3","0");
INSERT INTO detalle_gastos_generales VALUES("1538","12","2022","4","0");
INSERT INTO detalle_gastos_generales VALUES("1539","12","2022","5","0");
INSERT INTO detalle_gastos_generales VALUES("1540","12","2022","6","0");
INSERT INTO detalle_gastos_generales VALUES("1541","12","2022","7","0");
INSERT INTO detalle_gastos_generales VALUES("1542","12","2022","8","0");
INSERT INTO detalle_gastos_generales VALUES("1543","12","2022","9","0");
INSERT INTO detalle_gastos_generales VALUES("1544","12","2022","10","0");
INSERT INTO detalle_gastos_generales VALUES("1561","1","2023","1","0");
INSERT INTO detalle_gastos_generales VALUES("1562","1","2023","2","0");
INSERT INTO detalle_gastos_generales VALUES("1563","1","2023","3","0");
INSERT INTO detalle_gastos_generales VALUES("1564","1","2023","4","0");
INSERT INTO detalle_gastos_generales VALUES("1565","1","2023","5","0");
INSERT INTO detalle_gastos_generales VALUES("1566","1","2023","6","0");
INSERT INTO detalle_gastos_generales VALUES("1567","1","2023","7","0");
INSERT INTO detalle_gastos_generales VALUES("1568","1","2023","8","0");
INSERT INTO detalle_gastos_generales VALUES("1569","1","2023","9","0");
INSERT INTO detalle_gastos_generales VALUES("1570","1","2023","10","0");
INSERT INTO detalle_gastos_generales VALUES("1587","2","2023","1","0");
INSERT INTO detalle_gastos_generales VALUES("1588","2","2023","2","0");
INSERT INTO detalle_gastos_generales VALUES("1589","2","2023","3","0");
INSERT INTO detalle_gastos_generales VALUES("1590","2","2023","4","0");
INSERT INTO detalle_gastos_generales VALUES("1591","2","2023","5","0");
INSERT INTO detalle_gastos_generales VALUES("1592","2","2023","6","0");
INSERT INTO detalle_gastos_generales VALUES("1593","2","2023","7","0");
INSERT INTO detalle_gastos_generales VALUES("1594","2","2023","8","0");
INSERT INTO detalle_gastos_generales VALUES("1595","2","2023","9","0");
INSERT INTO detalle_gastos_generales VALUES("1596","2","2023","10","0");
INSERT INTO detalle_gastos_generales VALUES("1613","3","2023","1","0");
INSERT INTO detalle_gastos_generales VALUES("1614","3","2023","2","0");
INSERT INTO detalle_gastos_generales VALUES("1615","3","2023","3","0");
INSERT INTO detalle_gastos_generales VALUES("1616","3","2023","4","0");
INSERT INTO detalle_gastos_generales VALUES("1617","3","2023","5","0");
INSERT INTO detalle_gastos_generales VALUES("1618","3","2023","6","0");
INSERT INTO detalle_gastos_generales VALUES("1619","3","2023","7","0");
INSERT INTO detalle_gastos_generales VALUES("1620","3","2023","8","0");
INSERT INTO detalle_gastos_generales VALUES("1621","3","2023","9","0");
INSERT INTO detalle_gastos_generales VALUES("1622","3","2023","10","0");
INSERT INTO detalle_gastos_generales VALUES("1639","4","2023","1","0");
INSERT INTO detalle_gastos_generales VALUES("1640","4","2023","2","0");
INSERT INTO detalle_gastos_generales VALUES("1641","4","2023","3","0");
INSERT INTO detalle_gastos_generales VALUES("1642","4","2023","4","0");
INSERT INTO detalle_gastos_generales VALUES("1643","4","2023","5","0");
INSERT INTO detalle_gastos_generales VALUES("1644","4","2023","6","0");
INSERT INTO detalle_gastos_generales VALUES("1645","4","2023","7","0");
INSERT INTO detalle_gastos_generales VALUES("1646","4","2023","8","0");
INSERT INTO detalle_gastos_generales VALUES("1647","4","2023","9","0");
INSERT INTO detalle_gastos_generales VALUES("1648","4","2023","10","0");
INSERT INTO detalle_gastos_generales VALUES("1665","5","2023","1","0");
INSERT INTO detalle_gastos_generales VALUES("1666","5","2023","2","0");
INSERT INTO detalle_gastos_generales VALUES("1667","5","2023","3","0");
INSERT INTO detalle_gastos_generales VALUES("1668","5","2023","4","0");
INSERT INTO detalle_gastos_generales VALUES("1669","5","2023","5","0");
INSERT INTO detalle_gastos_generales VALUES("1670","5","2023","6","0");
INSERT INTO detalle_gastos_generales VALUES("1671","5","2023","7","0");
INSERT INTO detalle_gastos_generales VALUES("1672","5","2023","8","0");
INSERT INTO detalle_gastos_generales VALUES("1673","5","2023","9","0");
INSERT INTO detalle_gastos_generales VALUES("1674","5","2023","10","0");
INSERT INTO detalle_gastos_generales VALUES("1691","6","2023","1","0");
INSERT INTO detalle_gastos_generales VALUES("1692","6","2023","2","0");
INSERT INTO detalle_gastos_generales VALUES("1693","6","2023","3","0");
INSERT INTO detalle_gastos_generales VALUES("1694","6","2023","4","0");
INSERT INTO detalle_gastos_generales VALUES("1695","6","2023","5","0");
INSERT INTO detalle_gastos_generales VALUES("1696","6","2023","6","0");
INSERT INTO detalle_gastos_generales VALUES("1697","6","2023","7","0");
INSERT INTO detalle_gastos_generales VALUES("1698","6","2023","8","0");
INSERT INTO detalle_gastos_generales VALUES("1699","6","2023","9","0");
INSERT INTO detalle_gastos_generales VALUES("1700","6","2023","10","0");
INSERT INTO detalle_gastos_generales VALUES("1717","7","2023","1","0");
INSERT INTO detalle_gastos_generales VALUES("1718","7","2023","2","0");
INSERT INTO detalle_gastos_generales VALUES("1719","7","2023","3","0");
INSERT INTO detalle_gastos_generales VALUES("1720","7","2023","4","0");
INSERT INTO detalle_gastos_generales VALUES("1721","7","2023","5","0");
INSERT INTO detalle_gastos_generales VALUES("1722","7","2023","6","0");
INSERT INTO detalle_gastos_generales VALUES("1723","7","2023","7","0");
INSERT INTO detalle_gastos_generales VALUES("1724","7","2023","8","0");
INSERT INTO detalle_gastos_generales VALUES("1725","7","2023","9","0");
INSERT INTO detalle_gastos_generales VALUES("1726","7","2023","10","0");
INSERT INTO detalle_gastos_generales VALUES("1743","8","2023","1","0");
INSERT INTO detalle_gastos_generales VALUES("1744","8","2023","2","0");
INSERT INTO detalle_gastos_generales VALUES("1745","8","2023","3","0");
INSERT INTO detalle_gastos_generales VALUES("1746","8","2023","4","0");
INSERT INTO detalle_gastos_generales VALUES("1747","8","2023","5","0");
INSERT INTO detalle_gastos_generales VALUES("1748","8","2023","6","0");
INSERT INTO detalle_gastos_generales VALUES("1749","8","2023","7","0");
INSERT INTO detalle_gastos_generales VALUES("1750","8","2023","8","0");
INSERT INTO detalle_gastos_generales VALUES("1751","8","2023","9","0");
INSERT INTO detalle_gastos_generales VALUES("1752","8","2023","10","0");
INSERT INTO detalle_gastos_generales VALUES("1769","9","2023","1","0");
INSERT INTO detalle_gastos_generales VALUES("1770","9","2023","2","0");
INSERT INTO detalle_gastos_generales VALUES("1771","9","2023","3","0");
INSERT INTO detalle_gastos_generales VALUES("1772","9","2023","4","0");
INSERT INTO detalle_gastos_generales VALUES("1773","9","2023","5","0");
INSERT INTO detalle_gastos_generales VALUES("1774","9","2023","6","0");
INSERT INTO detalle_gastos_generales VALUES("1775","9","2023","7","0");
INSERT INTO detalle_gastos_generales VALUES("1776","9","2023","8","0");
INSERT INTO detalle_gastos_generales VALUES("1777","9","2023","9","0");
INSERT INTO detalle_gastos_generales VALUES("1778","9","2023","10","0");
INSERT INTO detalle_gastos_generales VALUES("1795","10","2023","1","0");
INSERT INTO detalle_gastos_generales VALUES("1796","10","2023","2","0");
INSERT INTO detalle_gastos_generales VALUES("1797","10","2023","3","0");
INSERT INTO detalle_gastos_generales VALUES("1798","10","2023","4","0");
INSERT INTO detalle_gastos_generales VALUES("1799","10","2023","5","0");
INSERT INTO detalle_gastos_generales VALUES("1800","10","2023","6","0");
INSERT INTO detalle_gastos_generales VALUES("1801","10","2023","7","0");
INSERT INTO detalle_gastos_generales VALUES("1802","10","2023","8","0");
INSERT INTO detalle_gastos_generales VALUES("1803","10","2023","9","0");
INSERT INTO detalle_gastos_generales VALUES("1804","10","2023","10","0");
INSERT INTO detalle_gastos_generales VALUES("1821","11","2023","1","0");
INSERT INTO detalle_gastos_generales VALUES("1822","11","2023","2","0");
INSERT INTO detalle_gastos_generales VALUES("1823","11","2023","3","0");
INSERT INTO detalle_gastos_generales VALUES("1824","11","2023","4","0");
INSERT INTO detalle_gastos_generales VALUES("1825","11","2023","5","0");
INSERT INTO detalle_gastos_generales VALUES("1826","11","2023","6","0");
INSERT INTO detalle_gastos_generales VALUES("1827","11","2023","7","0");
INSERT INTO detalle_gastos_generales VALUES("1828","11","2023","8","0");
INSERT INTO detalle_gastos_generales VALUES("1829","11","2023","9","0");
INSERT INTO detalle_gastos_generales VALUES("1830","11","2023","10","0");
INSERT INTO detalle_gastos_generales VALUES("1847","12","2023","1","0");
INSERT INTO detalle_gastos_generales VALUES("1848","12","2023","2","0");
INSERT INTO detalle_gastos_generales VALUES("1849","12","2023","3","0");
INSERT INTO detalle_gastos_generales VALUES("1850","12","2023","4","0");
INSERT INTO detalle_gastos_generales VALUES("1851","12","2023","5","0");
INSERT INTO detalle_gastos_generales VALUES("1852","12","2023","6","0");
INSERT INTO detalle_gastos_generales VALUES("1853","12","2023","7","0");
INSERT INTO detalle_gastos_generales VALUES("1854","12","2023","8","0");
INSERT INTO detalle_gastos_generales VALUES("1855","12","2023","9","0");
INSERT INTO detalle_gastos_generales VALUES("1856","12","2023","10","0");
INSERT INTO detalle_gastos_generales VALUES("1873","1","2024","1","0");
INSERT INTO detalle_gastos_generales VALUES("1874","1","2024","2","0");
INSERT INTO detalle_gastos_generales VALUES("1875","1","2024","3","0");
INSERT INTO detalle_gastos_generales VALUES("1876","1","2024","4","0");
INSERT INTO detalle_gastos_generales VALUES("1877","1","2024","5","0");
INSERT INTO detalle_gastos_generales VALUES("1878","1","2024","6","0");
INSERT INTO detalle_gastos_generales VALUES("1879","1","2024","7","0");
INSERT INTO detalle_gastos_generales VALUES("1880","1","2024","8","0");
INSERT INTO detalle_gastos_generales VALUES("1881","1","2024","9","0");
INSERT INTO detalle_gastos_generales VALUES("1882","1","2024","10","0");
INSERT INTO detalle_gastos_generales VALUES("1899","2","2024","1","0");
INSERT INTO detalle_gastos_generales VALUES("1900","2","2024","2","0");
INSERT INTO detalle_gastos_generales VALUES("1901","2","2024","3","0");
INSERT INTO detalle_gastos_generales VALUES("1902","2","2024","4","0");
INSERT INTO detalle_gastos_generales VALUES("1903","2","2024","5","0");
INSERT INTO detalle_gastos_generales VALUES("1904","2","2024","6","0");
INSERT INTO detalle_gastos_generales VALUES("1905","2","2024","7","0");
INSERT INTO detalle_gastos_generales VALUES("1906","2","2024","8","0");
INSERT INTO detalle_gastos_generales VALUES("1907","2","2024","9","0");
INSERT INTO detalle_gastos_generales VALUES("1908","2","2024","10","0");
INSERT INTO detalle_gastos_generales VALUES("1925","3","2024","1","0");
INSERT INTO detalle_gastos_generales VALUES("1926","3","2024","2","0");
INSERT INTO detalle_gastos_generales VALUES("1927","3","2024","3","0");
INSERT INTO detalle_gastos_generales VALUES("1928","3","2024","4","0");
INSERT INTO detalle_gastos_generales VALUES("1929","3","2024","5","0");
INSERT INTO detalle_gastos_generales VALUES("1930","3","2024","6","0");
INSERT INTO detalle_gastos_generales VALUES("1931","3","2024","7","0");
INSERT INTO detalle_gastos_generales VALUES("1932","3","2024","8","0");
INSERT INTO detalle_gastos_generales VALUES("1933","3","2024","9","0");
INSERT INTO detalle_gastos_generales VALUES("1934","3","2024","10","0");
INSERT INTO detalle_gastos_generales VALUES("1951","4","2024","1","0");
INSERT INTO detalle_gastos_generales VALUES("1952","4","2024","2","0");
INSERT INTO detalle_gastos_generales VALUES("1953","4","2024","3","0");
INSERT INTO detalle_gastos_generales VALUES("1954","4","2024","4","0");
INSERT INTO detalle_gastos_generales VALUES("1955","4","2024","5","0");
INSERT INTO detalle_gastos_generales VALUES("1956","4","2024","6","0");
INSERT INTO detalle_gastos_generales VALUES("1957","4","2024","7","0");
INSERT INTO detalle_gastos_generales VALUES("1958","4","2024","8","0");
INSERT INTO detalle_gastos_generales VALUES("1959","4","2024","9","0");
INSERT INTO detalle_gastos_generales VALUES("1960","4","2024","10","0");
INSERT INTO detalle_gastos_generales VALUES("1977","5","2024","1","0");
INSERT INTO detalle_gastos_generales VALUES("1978","5","2024","2","0");
INSERT INTO detalle_gastos_generales VALUES("1979","5","2024","3","0");
INSERT INTO detalle_gastos_generales VALUES("1980","5","2024","4","0");
INSERT INTO detalle_gastos_generales VALUES("1981","5","2024","5","0");
INSERT INTO detalle_gastos_generales VALUES("1982","5","2024","6","0");
INSERT INTO detalle_gastos_generales VALUES("1983","5","2024","7","0");
INSERT INTO detalle_gastos_generales VALUES("1984","5","2024","8","0");
INSERT INTO detalle_gastos_generales VALUES("1985","5","2024","9","0");
INSERT INTO detalle_gastos_generales VALUES("1986","5","2024","10","0");
INSERT INTO detalle_gastos_generales VALUES("2003","6","2024","1","0");
INSERT INTO detalle_gastos_generales VALUES("2004","6","2024","2","0");
INSERT INTO detalle_gastos_generales VALUES("2005","6","2024","3","0");
INSERT INTO detalle_gastos_generales VALUES("2006","6","2024","4","0");
INSERT INTO detalle_gastos_generales VALUES("2007","6","2024","5","0");
INSERT INTO detalle_gastos_generales VALUES("2008","6","2024","6","0");
INSERT INTO detalle_gastos_generales VALUES("2009","6","2024","7","0");
INSERT INTO detalle_gastos_generales VALUES("2010","6","2024","8","0");
INSERT INTO detalle_gastos_generales VALUES("2011","6","2024","9","0");
INSERT INTO detalle_gastos_generales VALUES("2012","6","2024","10","0");
INSERT INTO detalle_gastos_generales VALUES("2029","7","2024","1","0");
INSERT INTO detalle_gastos_generales VALUES("2030","7","2024","2","0");
INSERT INTO detalle_gastos_generales VALUES("2031","7","2024","3","0");
INSERT INTO detalle_gastos_generales VALUES("2032","7","2024","4","0");
INSERT INTO detalle_gastos_generales VALUES("2033","7","2024","5","0");
INSERT INTO detalle_gastos_generales VALUES("2034","7","2024","6","0");
INSERT INTO detalle_gastos_generales VALUES("2035","7","2024","7","0");
INSERT INTO detalle_gastos_generales VALUES("2036","7","2024","8","0");
INSERT INTO detalle_gastos_generales VALUES("2037","7","2024","9","0");
INSERT INTO detalle_gastos_generales VALUES("2038","7","2024","10","0");
INSERT INTO detalle_gastos_generales VALUES("2055","8","2024","1","0");
INSERT INTO detalle_gastos_generales VALUES("2056","8","2024","2","0");
INSERT INTO detalle_gastos_generales VALUES("2057","8","2024","3","0");
INSERT INTO detalle_gastos_generales VALUES("2058","8","2024","4","0");
INSERT INTO detalle_gastos_generales VALUES("2059","8","2024","5","0");
INSERT INTO detalle_gastos_generales VALUES("2060","8","2024","6","0");
INSERT INTO detalle_gastos_generales VALUES("2061","8","2024","7","0");
INSERT INTO detalle_gastos_generales VALUES("2062","8","2024","8","0");
INSERT INTO detalle_gastos_generales VALUES("2063","8","2024","9","0");
INSERT INTO detalle_gastos_generales VALUES("2064","8","2024","10","0");
INSERT INTO detalle_gastos_generales VALUES("2081","9","2024","1","0");
INSERT INTO detalle_gastos_generales VALUES("2082","9","2024","2","0");
INSERT INTO detalle_gastos_generales VALUES("2083","9","2024","3","0");
INSERT INTO detalle_gastos_generales VALUES("2084","9","2024","4","0");
INSERT INTO detalle_gastos_generales VALUES("2085","9","2024","5","0");
INSERT INTO detalle_gastos_generales VALUES("2086","9","2024","6","0");
INSERT INTO detalle_gastos_generales VALUES("2087","9","2024","7","0");
INSERT INTO detalle_gastos_generales VALUES("2088","9","2024","8","0");
INSERT INTO detalle_gastos_generales VALUES("2089","9","2024","9","0");
INSERT INTO detalle_gastos_generales VALUES("2090","9","2024","10","0");
INSERT INTO detalle_gastos_generales VALUES("2107","10","2024","1","0");
INSERT INTO detalle_gastos_generales VALUES("2108","10","2024","2","0");
INSERT INTO detalle_gastos_generales VALUES("2109","10","2024","3","0");
INSERT INTO detalle_gastos_generales VALUES("2110","10","2024","4","0");
INSERT INTO detalle_gastos_generales VALUES("2111","10","2024","5","0");
INSERT INTO detalle_gastos_generales VALUES("2112","10","2024","6","0");
INSERT INTO detalle_gastos_generales VALUES("2113","10","2024","7","0");
INSERT INTO detalle_gastos_generales VALUES("2114","10","2024","8","0");
INSERT INTO detalle_gastos_generales VALUES("2115","10","2024","9","0");
INSERT INTO detalle_gastos_generales VALUES("2116","10","2024","10","0");
INSERT INTO detalle_gastos_generales VALUES("2133","11","2024","1","0");
INSERT INTO detalle_gastos_generales VALUES("2134","11","2024","2","0");
INSERT INTO detalle_gastos_generales VALUES("2135","11","2024","3","0");
INSERT INTO detalle_gastos_generales VALUES("2136","11","2024","4","0");
INSERT INTO detalle_gastos_generales VALUES("2137","11","2024","5","0");
INSERT INTO detalle_gastos_generales VALUES("2138","11","2024","6","0");
INSERT INTO detalle_gastos_generales VALUES("2139","11","2024","7","0");
INSERT INTO detalle_gastos_generales VALUES("2140","11","2024","8","0");
INSERT INTO detalle_gastos_generales VALUES("2141","11","2024","9","0");
INSERT INTO detalle_gastos_generales VALUES("2142","11","2024","10","0");
INSERT INTO detalle_gastos_generales VALUES("2159","12","2024","1","0");
INSERT INTO detalle_gastos_generales VALUES("2160","12","2024","2","0");
INSERT INTO detalle_gastos_generales VALUES("2161","12","2024","3","0");
INSERT INTO detalle_gastos_generales VALUES("2162","12","2024","4","0");
INSERT INTO detalle_gastos_generales VALUES("2163","12","2024","5","0");
INSERT INTO detalle_gastos_generales VALUES("2164","12","2024","6","0");
INSERT INTO detalle_gastos_generales VALUES("2165","12","2024","7","0");
INSERT INTO detalle_gastos_generales VALUES("2166","12","2024","8","0");
INSERT INTO detalle_gastos_generales VALUES("2167","12","2024","9","0");
INSERT INTO detalle_gastos_generales VALUES("2168","12","2024","10","0");
INSERT INTO detalle_gastos_generales VALUES("2185","1","2025","1","0");
INSERT INTO detalle_gastos_generales VALUES("2186","1","2025","2","0");
INSERT INTO detalle_gastos_generales VALUES("2187","1","2025","3","0");
INSERT INTO detalle_gastos_generales VALUES("2188","1","2025","4","0");
INSERT INTO detalle_gastos_generales VALUES("2189","1","2025","5","0");
INSERT INTO detalle_gastos_generales VALUES("2190","1","2025","6","0");
INSERT INTO detalle_gastos_generales VALUES("2191","1","2025","7","0");
INSERT INTO detalle_gastos_generales VALUES("2192","1","2025","8","0");
INSERT INTO detalle_gastos_generales VALUES("2193","1","2025","9","0");
INSERT INTO detalle_gastos_generales VALUES("2194","1","2025","10","0");
INSERT INTO detalle_gastos_generales VALUES("2211","2","2025","1","0");
INSERT INTO detalle_gastos_generales VALUES("2212","2","2025","2","0");
INSERT INTO detalle_gastos_generales VALUES("2213","2","2025","3","0");
INSERT INTO detalle_gastos_generales VALUES("2214","2","2025","4","0");
INSERT INTO detalle_gastos_generales VALUES("2215","2","2025","5","0");
INSERT INTO detalle_gastos_generales VALUES("2216","2","2025","6","0");
INSERT INTO detalle_gastos_generales VALUES("2217","2","2025","7","0");
INSERT INTO detalle_gastos_generales VALUES("2218","2","2025","8","0");
INSERT INTO detalle_gastos_generales VALUES("2219","2","2025","9","0");
INSERT INTO detalle_gastos_generales VALUES("2220","2","2025","10","0");
INSERT INTO detalle_gastos_generales VALUES("2237","3","2025","1","0");
INSERT INTO detalle_gastos_generales VALUES("2238","3","2025","2","0");
INSERT INTO detalle_gastos_generales VALUES("2239","3","2025","3","0");
INSERT INTO detalle_gastos_generales VALUES("2240","3","2025","4","0");
INSERT INTO detalle_gastos_generales VALUES("2241","3","2025","5","0");
INSERT INTO detalle_gastos_generales VALUES("2242","3","2025","6","0");
INSERT INTO detalle_gastos_generales VALUES("2243","3","2025","7","0");
INSERT INTO detalle_gastos_generales VALUES("2244","3","2025","8","0");
INSERT INTO detalle_gastos_generales VALUES("2245","3","2025","9","0");
INSERT INTO detalle_gastos_generales VALUES("2246","3","2025","10","0");
INSERT INTO detalle_gastos_generales VALUES("2263","4","2025","1","0");
INSERT INTO detalle_gastos_generales VALUES("2264","4","2025","2","0");
INSERT INTO detalle_gastos_generales VALUES("2265","4","2025","3","0");
INSERT INTO detalle_gastos_generales VALUES("2266","4","2025","4","0");
INSERT INTO detalle_gastos_generales VALUES("2267","4","2025","5","0");
INSERT INTO detalle_gastos_generales VALUES("2268","4","2025","6","0");
INSERT INTO detalle_gastos_generales VALUES("2269","4","2025","7","0");
INSERT INTO detalle_gastos_generales VALUES("2270","4","2025","8","0");
INSERT INTO detalle_gastos_generales VALUES("2271","4","2025","9","0");
INSERT INTO detalle_gastos_generales VALUES("2272","4","2025","10","0");
INSERT INTO detalle_gastos_generales VALUES("2289","5","2025","1","0");
INSERT INTO detalle_gastos_generales VALUES("2290","5","2025","2","0");
INSERT INTO detalle_gastos_generales VALUES("2291","5","2025","3","0");
INSERT INTO detalle_gastos_generales VALUES("2292","5","2025","4","0");
INSERT INTO detalle_gastos_generales VALUES("2293","5","2025","5","0");
INSERT INTO detalle_gastos_generales VALUES("2294","5","2025","6","0");
INSERT INTO detalle_gastos_generales VALUES("2295","5","2025","7","0");
INSERT INTO detalle_gastos_generales VALUES("2296","5","2025","8","0");
INSERT INTO detalle_gastos_generales VALUES("2297","5","2025","9","0");
INSERT INTO detalle_gastos_generales VALUES("2298","5","2025","10","0");
INSERT INTO detalle_gastos_generales VALUES("2315","6","2025","1","0");
INSERT INTO detalle_gastos_generales VALUES("2316","6","2025","2","0");
INSERT INTO detalle_gastos_generales VALUES("2317","6","2025","3","0");
INSERT INTO detalle_gastos_generales VALUES("2318","6","2025","4","0");
INSERT INTO detalle_gastos_generales VALUES("2319","6","2025","5","0");
INSERT INTO detalle_gastos_generales VALUES("2320","6","2025","6","0");
INSERT INTO detalle_gastos_generales VALUES("2321","6","2025","7","0");
INSERT INTO detalle_gastos_generales VALUES("2322","6","2025","8","0");
INSERT INTO detalle_gastos_generales VALUES("2323","6","2025","9","0");
INSERT INTO detalle_gastos_generales VALUES("2324","6","2025","10","0");
INSERT INTO detalle_gastos_generales VALUES("2341","7","2025","1","0");
INSERT INTO detalle_gastos_generales VALUES("2342","7","2025","2","0");
INSERT INTO detalle_gastos_generales VALUES("2343","7","2025","3","0");
INSERT INTO detalle_gastos_generales VALUES("2344","7","2025","4","0");
INSERT INTO detalle_gastos_generales VALUES("2345","7","2025","5","0");
INSERT INTO detalle_gastos_generales VALUES("2346","7","2025","6","0");
INSERT INTO detalle_gastos_generales VALUES("2347","7","2025","7","0");
INSERT INTO detalle_gastos_generales VALUES("2348","7","2025","8","0");
INSERT INTO detalle_gastos_generales VALUES("2349","7","2025","9","0");
INSERT INTO detalle_gastos_generales VALUES("2350","7","2025","10","0");
INSERT INTO detalle_gastos_generales VALUES("2367","8","2025","1","0");
INSERT INTO detalle_gastos_generales VALUES("2368","8","2025","2","0");
INSERT INTO detalle_gastos_generales VALUES("2369","8","2025","3","0");
INSERT INTO detalle_gastos_generales VALUES("2370","8","2025","4","0");
INSERT INTO detalle_gastos_generales VALUES("2371","8","2025","5","0");
INSERT INTO detalle_gastos_generales VALUES("2372","8","2025","6","0");
INSERT INTO detalle_gastos_generales VALUES("2373","8","2025","7","0");
INSERT INTO detalle_gastos_generales VALUES("2374","8","2025","8","0");
INSERT INTO detalle_gastos_generales VALUES("2375","8","2025","9","0");
INSERT INTO detalle_gastos_generales VALUES("2376","8","2025","10","0");
INSERT INTO detalle_gastos_generales VALUES("2393","9","2025","1","0");
INSERT INTO detalle_gastos_generales VALUES("2394","9","2025","2","0");
INSERT INTO detalle_gastos_generales VALUES("2395","9","2025","3","0");
INSERT INTO detalle_gastos_generales VALUES("2396","9","2025","4","0");
INSERT INTO detalle_gastos_generales VALUES("2397","9","2025","5","0");
INSERT INTO detalle_gastos_generales VALUES("2398","9","2025","6","0");
INSERT INTO detalle_gastos_generales VALUES("2399","9","2025","7","0");
INSERT INTO detalle_gastos_generales VALUES("2400","9","2025","8","0");
INSERT INTO detalle_gastos_generales VALUES("2401","9","2025","9","0");
INSERT INTO detalle_gastos_generales VALUES("2402","9","2025","10","0");
INSERT INTO detalle_gastos_generales VALUES("2419","10","2025","1","0");
INSERT INTO detalle_gastos_generales VALUES("2420","10","2025","2","0");
INSERT INTO detalle_gastos_generales VALUES("2421","10","2025","3","0");
INSERT INTO detalle_gastos_generales VALUES("2422","10","2025","4","0");
INSERT INTO detalle_gastos_generales VALUES("2423","10","2025","5","0");
INSERT INTO detalle_gastos_generales VALUES("2424","10","2025","6","0");
INSERT INTO detalle_gastos_generales VALUES("2425","10","2025","7","0");
INSERT INTO detalle_gastos_generales VALUES("2426","10","2025","8","0");
INSERT INTO detalle_gastos_generales VALUES("2427","10","2025","9","0");
INSERT INTO detalle_gastos_generales VALUES("2428","10","2025","10","0");
INSERT INTO detalle_gastos_generales VALUES("2445","11","2025","1","0");
INSERT INTO detalle_gastos_generales VALUES("2446","11","2025","2","0");
INSERT INTO detalle_gastos_generales VALUES("2447","11","2025","3","0");
INSERT INTO detalle_gastos_generales VALUES("2448","11","2025","4","0");
INSERT INTO detalle_gastos_generales VALUES("2449","11","2025","5","0");
INSERT INTO detalle_gastos_generales VALUES("2450","11","2025","6","0");
INSERT INTO detalle_gastos_generales VALUES("2451","11","2025","7","0");
INSERT INTO detalle_gastos_generales VALUES("2452","11","2025","8","0");
INSERT INTO detalle_gastos_generales VALUES("2453","11","2025","9","0");
INSERT INTO detalle_gastos_generales VALUES("2454","11","2025","10","0");
INSERT INTO detalle_gastos_generales VALUES("2471","12","2025","1","0");
INSERT INTO detalle_gastos_generales VALUES("2472","12","2025","2","0");
INSERT INTO detalle_gastos_generales VALUES("2473","12","2025","3","0");
INSERT INTO detalle_gastos_generales VALUES("2474","12","2025","4","0");
INSERT INTO detalle_gastos_generales VALUES("2475","12","2025","5","0");
INSERT INTO detalle_gastos_generales VALUES("2476","12","2025","6","0");
INSERT INTO detalle_gastos_generales VALUES("2477","12","2025","7","0");
INSERT INTO detalle_gastos_generales VALUES("2478","12","2025","8","0");
INSERT INTO detalle_gastos_generales VALUES("2479","12","2025","9","0");
INSERT INTO detalle_gastos_generales VALUES("2480","12","2025","10","0");





CREATE TABLE `inventario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_inventario` datetime DEFAULT '0000-00-00 00:00:00',
  `id_vendedor` int(11) DEFAULT NULL,
  `id_turno` int(11) DEFAULT '0',
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO inventario VALUES("1","2019-02-20 17:17:16","1","0","1");





CREATE TABLE `inventario_relacional` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_barra` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id_inventario` int(11) DEFAULT NULL,
  `cantidad_ingresada` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO inventario_relacional VALUES("1","8858463003456","1","10");
INSERT INTO inventario_relacional VALUES("2","7804609730077","1","15");
INSERT INTO inventario_relacional VALUES("3","3100003938182","1","5");





CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_barra` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `precio_compra` int(11) DEFAULT NULL,
  `precio_venta` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `stock_minimo` int(11) DEFAULT NULL,
  `id_categoria` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO productos VALUES("1","123","Mantequilla","550","1500","93","50","1");
INSERT INTO productos VALUES("2","8858463003456","Tarro de atún","562","1250","127","50","2");
INSERT INTO productos VALUES("3","78022010","Lucky Strike","1200","2000","97","10","7");
INSERT INTO productos VALUES("4","7804609730077","Detergente bio ","2500","3000","527","100","4");
INSERT INTO productos VALUES("5","3100003938182","Caja de plumones","1000","1750","54","10","5");





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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO turnos VALUES("1","1","1","2019-03-01 15:44:02","","0","29600","0","0");





CREATE TABLE `vendedores` (
  `id_vendedor` int(11) NOT NULL AUTO_INCREMENT,
  `nombreVendedor` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `correoVendedor` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `passwordVendedor` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `nivel` int(2) NOT NULL DEFAULT '1',
  `activo` int(2) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_vendedor`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO vendedores VALUES("1","Andrés Chapa A","admin@gmail.com","123456","0","1");
INSERT INTO vendedores VALUES("2","Rodrigo Figueroa M","rfigueroa.rodrigo@gmail.com","123456","1","1");
INSERT INTO vendedores VALUES("3","Diego Pérez","diego@gmail.com","123456","1","1");





CREATE TABLE `ventas` (
  `numeroVenta` int(11) NOT NULL AUTO_INCREMENT,
  `id_vendedor` int(11) NOT NULL,
  `medio_pago` int(11) DEFAULT NULL,
  `fechaVenta` datetime DEFAULT NULL,
  `neto` int(11) DEFAULT NULL,
  `iva` int(11) DEFAULT NULL,
  `totalVenta` int(11) DEFAULT NULL,
  `id_turno` int(11) DEFAULT NULL,
  PRIMARY KEY (`numeroVenta`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO ventas VALUES("30","1","1","2019-03-19 14:36:40","","","5250","1");
INSERT INTO ventas VALUES("31","1","2","2019-03-19 14:37:24","","","9750","1");
INSERT INTO ventas VALUES("32","2","1","2019-03-19 14:39:32","","","9250","1");
INSERT INTO ventas VALUES("33","2","1","2019-03-19 14:39:49","","","3000","1");
INSERT INTO ventas VALUES("34","1","1","2019-03-19 14:42:20","","","5500","1");
INSERT INTO ventas VALUES("35","3","1","2019-03-21 01:50:37","","","12250","1");
INSERT INTO ventas VALUES("36","1","1","2019-03-31 23:58:59","","","1500","1");





CREATE TABLE `ventas_relacional` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigoProducto` int(11) DEFAULT NULL,
  `precioUnitario` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `totalUnitario` int(11) DEFAULT NULL,
  `idVenta` int(11) DEFAULT NULL,
  `nombreProducto` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO ventas_relacional VALUES("35","2147483647","1250","1","1250","30","Tarro de atún");
INSERT INTO ventas_relacional VALUES("36","78022010","2000","2","4000","30","Lucky Strike");
INSERT INTO ventas_relacional VALUES("37","2147483647","3000","1","3000","31","Detergente bio ");
INSERT INTO ventas_relacional VALUES("38","2147483647","1750","3","5250","31","Caja de plumones");
INSERT INTO ventas_relacional VALUES("39","123","1500","1","1500","31","Mantequilla");
INSERT INTO ventas_relacional VALUES("40","123","1500","2","3000","32","Mantequilla");
INSERT INTO ventas_relacional VALUES("41","2147483647","1250","5","6250","32","Tarro de atún");
INSERT INTO ventas_relacional VALUES("42","2147483647","3000","1","3000","33","Detergente bio ");
INSERT INTO ventas_relacional VALUES("43","123","1500","1","1500","34","Mantequilla");
INSERT INTO ventas_relacional VALUES("44","78022010","2000","2","4000","34","Lucky Strike");
INSERT INTO ventas_relacional VALUES("45","123","1500","1","1500","35","Mantequilla");
INSERT INTO ventas_relacional VALUES("46","2147483647","1250","3","3750","35","Tarro de atún");
INSERT INTO ventas_relacional VALUES("47","78022010","2000","2","4000","35","Lucky Strike");
INSERT INTO ventas_relacional VALUES("48","2147483647","3000","1","3000","35","Detergente bio ");
INSERT INTO ventas_relacional VALUES("49","123","1500","1","1500","36","Mantequilla");



