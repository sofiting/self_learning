#include <iostream>
using namespace std;

bool isPrime(int x)
{

    if (x <= 1)
        return false;

    for (int i = 2; i <= x / 2; i++)
    {
        if (x % i == 0)
        {
            return false;
        }
    }
    return true;
}
int main()
{
    // Implementa una función que determine si un número es primo.
    int x, n;
    std::cout << "how many numbers do you want to check: " << endl;
    std::cin >> n;

    for (int i = 0; i < n; i++)
    {
        std::cout << "Enter a number: " << endl;
        std::cin >> x;

        isPrime(x) ? cout << "prime number" : cout << "isn't prime number";
        cout << endl;
    }

    return 0;
}