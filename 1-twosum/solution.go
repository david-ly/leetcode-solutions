package solutionTwoSum

func TwoSum(nums []int, target int) []int {
	if nums == nil {
		return nil
	}

	complements := make(map[int]int)
	for i, num := range nums {
		if seen_idx, hasSeen := complements[num]; hasSeen {
			return []int{seen_idx, i}
		}
		complements[target-num] = i
	}

	return nil
}
