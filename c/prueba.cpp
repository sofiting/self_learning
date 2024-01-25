#include <algorithm> // contiene algoritmos de particion
#include <cmath>     // contiene funciones std::sqrt, pow etc..
#include <random>    // contiene el generador de numeros pseudoaleatorios, std::mt19937
#include <ranges>
#include <string>
#include <vector>
#include <iostream>
using namespace std;

int main()
{
    std::cout << "Hello, from cualquierNombre!\n";
    std::cout << "Hello, sofia\n";

    vector<string> msg{"Hello", "C++", "World", "from", "VS Code", "and the C++ extension!"};

    for (const string &word : msg)
    {
        cout << word << " ";
    }
    cout << endl;
}
