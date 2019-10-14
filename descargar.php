<?php
include ("Function_Backup.php");

echo backup_tables("localhost","ventas","rf.2019","repuestos");
$fecha=date("Y-m-d");

header("Content-disposition: attachment; filename=db-backup-".$fecha.".sql");
header("Content-type: MIME");
readfile("backups/db-backup-".$fecha.".sql");