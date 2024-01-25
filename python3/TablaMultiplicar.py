def print_multiplication_table(table_size):
    # Print the header
    print("  |", end="")
    for i in range(1, table_size + 1):
       print(f"{i:4}", end="")
    print("\n" + "-" * (5 * table_size + 3))

    # Print the table
    for i in range(1, table_size + 1):
        print(f"{i:2}|", end="")
        for j in range(1, table_size + 1):
            print(f"{i * j:4}", end="")
        print()

# Define the size of the multiplication table
table_size = 10

# Print the multiplication table
print_multiplication_table(table_size)

print("**************************************")

#tabla multiplicar solo de 1 a 5

for n1 in range(1,6):
    for n2 in range(1,11):
        print("%s * %s = %s "%(n1,n2,(n1*n2)), end=" ")
    print("")


num  = int(input("Enter a number: "))

for var in range(1,11):
    print("%s * %s = %s"%(var,num,(var*num)))

