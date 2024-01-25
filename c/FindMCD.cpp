#include <iostream>
using namespace std;

int calcularMCD(int a, int b)
{
    while (b != 0)
    {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main()
{
    // Ingresar dos números desde la entrada estándar
    int num1, num2;
    std::cout << "Ingrese el primer número: ";
    std::cin >> num1;
    std::cout << "Ingrese el segundo número: ";
    std::cin >> num2;

    // Calcular y mostrar el MCD
    int mcd = calcularMCD(num1, num2);
    std::cout << "El MCD de " << num1 << " y " << num2 << " es: " << mcd << std::endl;

    return 0;
}