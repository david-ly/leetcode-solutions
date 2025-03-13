package solutionTwoSum

import (
	"reflect"
	"testing"
)

type TestHarness struct {
	nums   []int
	target int
	expect []int
}

func checkHarness(t *testing.T, tests []TestHarness, suite string) {
	const err_strf = "TwoSum(%v, %d) = [got: %v], [expect: %v]"

	for _, tt := range tests {
		t.Run(suite, func(st *testing.T) {
			got := TwoSum(tt.nums, tt.target)
			if !reflect.DeepEqual(got, tt.expect) {
				st.Errorf(err_strf, tt.nums, tt.target, got, tt.expect)
			}
		})
	}
}

func TestTwoSum(t *testing.T) {
	basic_pos := []TestHarness{
		{nums: []int{1, 2, 3, 5, 6, 7, 8, 9}, target: 16, expect: []int{5, 7}},
		{nums: []int{2, 7, 11, 15}, target: 9, expect: []int{0, 1}},
		{nums: []int{3, 2, 4}, target: 6, expect: []int{1, 2}},
		{nums: []int{3, 3}, target: 6, expect: []int{0, 1}},
		{nums: []int{0, 4, 7, 3}, target: 3, expect: []int{0, 3}},

		// target is sum of first/last 2 elements
		{nums: []int{4, 6, 8, 10}, target: 10, expect: []int{0, 1}},
		{nums: []int{4, 6, 8, 10}, target: 18, expect: []int{2, 3}},
		{nums: []int{2, 4, 7, 11}, target: 6, expect: []int{0, 1}},
		{nums: []int{2, 4, 7, 11}, target: 18, expect: []int{2, 3}},
		{nums: []int{0, 6, 8, 10}, target: 6, expect: []int{0, 1}},
		{nums: []int{0, 4, 7, 11}, target: 18, expect: []int{2, 3}},

		// First pair (left to right)
		{nums: []int{5, 5, 5, 5}, target: 10, expect: []int{0, 1}},
	}
	basic_neg := []TestHarness{
		{nums: []int{-1, -2, -3, -4, -5}, target: -8, expect: []int{2, 4}},
		{nums: []int{-1, -2, -3, -4, -5}, target: -3, expect: []int{0, 1}},
		{nums: []int{-1, -2, -3, -4, -5}, target: -9, expect: []int{3, 4}},
		{nums: []int{0, -2, -3, -4, -5}, target: -5, expect: []int{1, 2}},
		{nums: []int{0, -2, -3, -4}, target: -2, expect: []int{0, 1}},
		{nums: []int{1, -2, -3, -4}, target: -7, expect: []int{2, 3}},
		// should short circuit [0,1]:[1,-2] even if [2,3]:[3,-4] is valid
		{nums: []int{1, -2, 3, -4}, target: -1, expect: []int{0, 1}},
		{nums: []int{-5, -5, -5, -5}, target: -10, expect: []int{0, 1}},
	}
	basic := append(basic_pos, basic_neg...)
	checkHarness(t, basic, "Basic positive/negative `nums`")

	edge_all := []TestHarness{
		{nums: []int{1, 2, 3}, target: 7, expect: nil},
		{nums: []int{-1, -2, -3}, target: 0, expect: nil},
		{nums: []int{1, 3, 5, 7}, target: 2, expect: nil},
		{nums: []int{-1, -3, -5, -7}, target: 10, expect: nil},

		{nums: []int{1}, target: 1, expect: nil},
		{nums: []int{-1}, target: -1, expect: nil},

		{nums: nil, target: 1, expect: nil},
		{nums: []int{}, target: 1, expect: nil},
	}
	checkHarness(t, edge_all, "No solution, single element, nil/empty input")
}

// Benchmark
func BenchmarkTwoSum(b *testing.B) {
	nums := []int{2, 7, 11, 15}
	target := 9
	for b.Loop() {
		TwoSum(nums, target)
	}

	lrg_nums := make([]int, 1000)
	for i := range lrg_nums {
		lrg_nums[i] = i
	}
	lrg_target := 1999
	for b.Loop() {
		TwoSum(lrg_nums, lrg_target)
	}
}
