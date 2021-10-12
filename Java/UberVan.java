import java.util.ArrayList;
import java.util.Map;

public class UberVan extends Car {

  Map<String, Map<String, Integer>> typeCarAccepted;
  ArrayList<String> seatMaterial;

  public UberVan(String license, Account driver, Map<String, Map<String, Integer>> typeCarAccepted,
      ArrayList<String> seatMaterial) {
    super(license, driver);
    this.typeCarAccepted = typeCarAccepted;
    this.seatMaterial = seatMaterial;
  }

  public UberVan(String license, Account driver) {
    super(license, driver);
  }

  @Override
  public void setPassenger(Integer passenger) {
    if (passenger != 6) {
      System.err.println("Necesitas asingnar 6 pasajeros");
    } else {
      this.passenger = passenger;
    }
  }
}
