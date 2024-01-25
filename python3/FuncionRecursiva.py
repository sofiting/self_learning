def factorial(num):
    if num == 0 or num == 1:
        return 1
    else:
        return num*factorial(num-1)

"""
num*factorial(num-1)

factorial(5) = 5 * factorial(4)
             = 5 * (4 * factorial(3))
             = 5 * (4 * (3 * factorial(2)))
             = 5 * (4 * (3 * (2 * factorial(1))))
             = 5 * (4 * (3 * (2 * 1)))
             = 5 * (4 * (3 * 2))
             = 5 * (4 * 6)
             = 5 * 24
             = 120

             
"""
    

print(factorial(5))
