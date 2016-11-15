import sys

print('Number of arguments:', len(sys.argv), 'arguments.')
print('Argument List:', str(sys.argv))
MotorCommend = sys.argv
MotorCommend.remove(MotorCommend[0])

try:
    for x in range(0, 3):
        val = int(MotorCommend[x])
except ValueError:
    print("That's not an number!")

if (MotorCommend[0] is '0' and MotorCommend[1] is '0' and MotorCommend[2] is '0'):
    print("Stop Motor")
else:
    print(MotorCommend)
