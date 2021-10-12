class Main {
  public static void main(String[] args) {

    UberX uberX = new UberX("EVK-X", new Account("Deymer", "AND123456"), "chevrolet", "sonic");
    uberX.setPassenger(4);
    uberX.printDataCar();

    UberVan uberVan = new UberVan("EVK-VAN", new Account("Deymer-VAN", "AND-VAN"));
    uberVan.setPassenger(6);
    uberVan.printDataCar();

    /*
     * Car car2 = new Car("EVK9000", new Account("Nure", "AX345678"));
     * car2.passenger = 3; car2.printDataCar();
     */
  }
}