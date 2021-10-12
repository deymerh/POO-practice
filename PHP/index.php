<?php

require_once("./Car.php");
require_once("./Account.php");
require_once("./UberX.php");
require_once("./UberVan.php");

$carUberX = new UberX("AXCVBN", new Account("Deymer UberX", "123456"), "Chevrolet", "Spark");
$carUberX->setPassenger(4);
$carUberX->printDataCar();

$carUberVan = new UberVan("AXC-VAN", new Account("Deymer Uber-VAN", "123456"), "Chevrolet", "Spark-VAN");
$carUberVan->setPassenger(6);
$carUberVan->printDataCar();

?>