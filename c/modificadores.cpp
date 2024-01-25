#include <iostream>
using namespace std;

int main()
{

    // tipo constante no se puede cambiar
    const int number = 5;

    // variable que se puede modificar en caulquier momento
    // Herramienta que le dice al compilador que la
    // variable puede cambiar su valor durante la ejecución
    //(No puede ser optimizado).
    volatile int vol_int = 3;

    // primero con signo . sehundo sin signo
    signed int signedVar = -5;
    unsigned int unsignedVar = 10;

    short int si = -1;

    // sale bytes que ocupa cada uno
    short unsigned int sui = -1;
    std::cout << sizeof(sui) << endl;
    long unsigned int lui = -1;
    std::cout << sizeof(lui) << endl;
    long long unsigned int llui = -1;
    std::cout << sizeof(llui) << endl;
}