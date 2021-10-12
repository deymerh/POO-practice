<?php
require_once("./Account.php");
class Car{
  public $id;
  public $license;
  public $driver;
  protected $passenger;
  
  public function __construct($license, $driver){
    $this->license = $license;
    $this->driver = $driver;
  }
  
  public function PrintDataCar(){
    echo "
      License: $this->license,
      Driver: {$this->driver->name}
      Document: {$this->driver->document}
      Numero de pasajeros $this->passenger
    
    ";
  }

  public function getPassenger(){
    return $this->passenger;
  }

  public function setPassenger($passenger){
    if ($passenger != 4) {
      echo "Necesitas asignar 4 pasajeros";
    }else{
      $this->passenger = $passenger;
    }
  }
}
?>