#include <iostream>
using namespace std;

void hello()
{
    cout << "hello world!!" << endl;
}

void howMany(int &a, int b = 5, int *c = nullptr, const int &d = 3)
{
    ++a;
    ++b;
    // it'll be 3-1 because b = 3 and *c = &b
    --(*c);
    cout << "  a's value is " << a << endl;
    cout << "  b's value is " << b << endl;
    cout << "  c's value is " << *c << endl;
    cout << "  d's value is " << d << endl;
}
int sum(int a, int b)
{
    return a + b;
}

// devuelve un puntero
int *resta(int a, int b)
{
    int *total = new int(a - b);
    return total;
}

// Function returns a reference to an integer
int &multi(int a, int b)
{
    int *total = new int(a * b); // Dynamically allocate memory
    return *total;               // Return the dereferenced pointer
}

int main()
{
    hello();
    int a = 3;
    int b = 3;
    int *c = &b;
    int d = 3;
    howMany(a, b, c, d);
    cout << "  a's value is " << a << endl;
    // the value of b 'll be changed , *c=&b
    cout << "  b's value is " << b << endl;
    cout << "  c's value is " << *c << endl;
    cout << "  d's value is " << d << endl;

    cout << "suma de a y b es " << sum(1, 2) << endl;

    int *result = resta(5, 1);
    cout << "resta de a y b es " << *result << endl;
    // Free the dynamically allocated memory
    delete result;

    int &result2 = multi(2, 3); // Assign the reference to a variable
    cout << "Multiplication result: " << result2 << endl;

    // Remember to free the dynamically allocated memory
    delete &result2;

    /*
    The resta function returns a pointer to an integer, 
    and you need to manage memory by deleting the allocated memory using delete.
    The multi function returns a reference to an integer, 
    and you also need to manage memory by deleting the referenced memory using delete.*/

    

    return 0;
}