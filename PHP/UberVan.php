<?php
require_once("./Car.php");
class UberVan extends Car{
  public $brand;
  public $model;

  public function __construct($license, $driver, $brand, $model){
    parent::__construct($license, $driver);
    $this->$brand = $brand;
    $this->$model = $model;
  }

  public function setPassenger($passenger){
    if ($passenger != 6) {
      echo "Necesitas asignar 6 pasajeros";
    }else{
      $this->passenger = $passenger;
    }
  }
  
}
?>