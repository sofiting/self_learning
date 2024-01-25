#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main()
{

    vector<string> msg{"Hello", "C++", "World", "from", "VS Code", "and the C++ extension!"};

    for (const string &word : msg)
    {
        cout << word << " ";
    }
    cout << endl;
    /*
        bool b = false;
        cout << "bool = " << b << " - size = " << sizeof(b) << endl;

        char c = 'A';
        cout << "char = " << c << " - size = " << sizeof(c) << endl;

        wchar_t w = 'a';
        cout << "wchar_t = " << w << " - size = " << sizeof(w) << endl;

        int i = 0;
        cout << "int = " << i << " - size = " << sizeof(i) << endl;

        double d = 0.0;
        cout << "double = " << d << " - size = " << sizeof(d) << endl;

        float f{0.f};
        cout << "float = " << f << " - size = " << sizeof(f) << endl;
*/
    ///////////////// puntero //////////////////////

    int number = 0;
    int *pi = nullptr;
    // print number'value
    std::cout << "number's value: " << number << endl;
    // print memory address of a number
    std::cout << "memory address of number is " << &number << endl;

    pi = &number;
    std::cout << "pi's value: " << pi << " memory address of pi is: " << &pi << endl;
    ;

    int num = 42;
    printf("The number is: %d\n", num);

    printf("Please enter a character: ");
    char character = getchar();

    printf("You entered: ");
    putchar(character);
    putchar('\n');

    getchar();
    return 0;
}