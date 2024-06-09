from typing import List

def select_sort(numbers: List[int]) -> List[int]:
  len_numbers = len(numbers)
  for i in range(len_numbers):
    tmp = i
    for j in range(i+1, len_numbers):
      if numbers[j] < numbers[tmp]:
        tmp = j
    numbers[i], numbers[tmp] = numbers[tmp], numbers[i]
  return numbers





if __name__ == '__main__':
  import random
  nums = [random.randint(0, 1000) for i in range(10)]
  print(select_sort(nums))