#include <iostream>
#include <functional>
using namespace std;

static int i = 0;

int sum(int a, int b)
{
    i++;
    return a + b;
}

float sum(float a, float b)
{
    i++;
    return a + b;
}

void funcion(int x)
{
    cout << "hello , i`m " << x << endl;
}
int main()
{
    // sobrecarga de métodos
    cout << sum(1, 2) << endl;
    cout << sum(4.5f, 5.5f) << endl;
    cout << "i's value is " << i << endl;

    // previous version
    void (*pointerFunction)(int) = &funcion;
    pointerFunction(2);

    // latest version
    std::function<void(int)> pointer11{&funcion};
    pointer11(10);

    int x = 1;
    x <<= 2;
    cout << x;
}