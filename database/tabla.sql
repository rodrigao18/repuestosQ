//modifcacion a tabla compras 26/09/2018

ALTER TABLE `compras` CHANGE `fecha` `fechaOrden` DATETIME NULL DEFAULT NULL;

ALTER TABLE `compras` ADD `fechaFacturado` DATETIME NULL AFTER `id_contacto`, ADD `fechaCompletado` DATETIME NULL AFTER `fechaFacturado`, ADD `fechaNulo` DATETIME NULL AFTER `fechaCompletado`;

//modificacion tabla ventas_historica
alter table `venta_historica` add fecha_historica datetime;
alter table `ventas_relacional` add descuento_producto int DEFAULT '0';