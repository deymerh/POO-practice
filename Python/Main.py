from Car import Car
from Account import Account

if __name__ == "__main__":
    print("Hola Mundo")
    car = Car("AXXX234", Account("DeymerH", "123456"))
    print(vars(car))
    print(vars(car.driver))
