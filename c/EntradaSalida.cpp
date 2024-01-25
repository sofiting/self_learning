#include <iostream>
#include <string>
#include <fstream>
using namespace std;

int main()
{
    int x;
    // entrada estandar
    cin >> x;
    // salida estandar
    cout << "El valor introducido es " << x << endl;
    getchar();

    cout << "Leer fichero " << endl;
    // const char* file = "example.txt"  same as next line
    auto file = "example.txt";

    // write and crear un file
    ofstream output_file;
    // open a fle if it exists, otherwise it creates
    output_file.open(file, ios::trunc);
    if (!output_file.is_open())
    {
        cout << "errorr, the file isn't opened" << endl;
        return 0; // finish the execution
    }

    // write content in the file
    output_file << "This is an example\n This is other line\n";
    output_file << "\t The third and the last line\n";

    output_file.close();

    // read file
    ifstream input_file;
    input_file.open(file);
    if (!input_file.is_open())
    {
        cout << "unable to open the file" << endl;
        return 0;
    }

    string line;

    while (getline(input_file, line))
    {
        cout << line << endl;
    }

    input_file.close();

    // anothers file type
    fstream file_stream;

    /*
    ios::in - input
    ios::out -output
    ios::binary - binary
    ios::ate - final del fichero
    ios::app - para añadir datos
    ios:: trunc - truncar el fichero
    */

    string binary_text = "This is a binary example";

    auto binary_file = "binary.bin";
    // Open the file for both writing and reading in binary mode
    file_stream.open(binary_file, ios::out | ios::in | ios::binary | ios::trunc);
    if (!file_stream.is_open())
    {
        cout << "ups" << endl;
        getchar();
        return 0;
    }

    // c_str:the content of the binary_text string
    file_stream.write(binary_text.c_str(), binary_text.size());
    cout << "binary text = " << binary_text.c_str() << endl;

    double d = 3.4;
    // cannot use static_cast , it`s not direct conversion

    // It interprets the address of the double variable d as a
    // pointer to a char. This is necessary because write
    // expects a pointer to a char as its first argument.
    file_stream.write(reinterpret_cast<char *>(&d), sizeof(d));
    // file_stream.beg: the beginning of the file
    file_stream.seekg(0, file_stream.beg);

    // +1 because it add '\0' like terminator
    char *buffer = new char[binary_text.size() + 1];
    buffer[binary_text.size()] = '\0';
    // memset(buffer,'\0',binary_text.size()+1);

    // read binary file
    file_stream.read(buffer, binary_text.size());
    double read_double = 0;
    // The reinterpret_cast is used to convert the address of read_double 
    // to a char* to match the read function's signature.
    file_stream.read(reinterpret_cast<char *>(&read_double), sizeof(double));
    file_stream.close();

    cout << buffer << " - " << read_double << endl;
    getchar();
}