# a calculator for arithmetic sequences

def add(*args) -> float:
    output = 0
    for x in args:
        output = output + x
    return output