#include <iostream>
using namespace std;

int main()
{
    int x;
    int cont = 1, result = 1;

    cout << "Enter a number: " << endl;
    cin >> x;

    while (cont <= x)
    {
        result *= cont;
        cont++;
    }

    cout << "Factorial of !" << x << " is " << result << endl;
}