package solutionLCP

import (
	"strings"
	"testing"
)

type TestHarness struct {
	strs   []string
	expect string
}

const err_strf = "LongestCommonPrefix(%v) = [got: %q], [expect: %q]"

func checkHarness(t *testing.T, testCases []TestHarness, suite string) {
	t.Run(suite, func(t *testing.T) {
		for _, tt := range testCases {
			got := LongestCommonPrefix(tt.strs)
			if got != tt.expect {
				t.Errorf(err_strf, tt.strs, got, tt.expect)
			}
		}
	})
}

func TestLongestCommonPrefix(t *testing.T) {
	basic := []TestHarness{
		{strs: []string{"flower", "flow", "flight"}, expect: "fl"},
		{strs: []string{"dog", "racecar", "car"}, expect: ""},
		{strs: []string{"apple", "app", "application"}, expect: "app"},
		{strs: []string{"interstellar", "interview", "interest"}, expect: "inter"},
		{strs: []string{"programming", "progress", "progressive"}, expect: "progr"},
	}
	single := []TestHarness{
		{strs: []string{"single"}, expect: "single"},
		{strs: []string{""}, expect: ""},
	}
	dupes := []TestHarness{
		{strs: []string{"same", "same", "same"}, expect: "same"},
		{strs: []string{"a", "a", "a"}, expect: "a"},
	}
	varied := []TestHarness{
		{strs: []string{"a", "ab", "abc", "abcd"}, expect: "a"},
		{strs: []string{"abcd", "abc", "ab", "a"}, expect: "a"},
		{strs: []string{"long", "longer", "longest"}, expect: "long"},
	}
	tests_sane := append(basic, single...)
	tests_sane = append(tests_sane, dupes...)
	tests_sane = append(tests_sane, varied...)
	suite_sane := "Basic inputs, single elem array, dupes in array, varied length"
	checkHarness(t, tests_sane, suite_sane)

	empty := []TestHarness{
		{strs: []string{"", "flow", "flight"}, expect: ""},
		{strs: []string{"flower", "", "flight"}, expect: ""},
		{strs: []string{"flower", "flow", ""}, expect: ""},
		{strs: []string{"", "", ""}, expect: ""},
	}
	special := []TestHarness{
		{strs: []string{"123abc", "123def", "123ghi"}, expect: "123"},
		{strs: []string{"!@#", "!@#$", "!@#%"}, expect: "!@#"},
		{strs: []string{"app-store", "app-le", "app-rentice"}, expect: "app-"},
	}
	ulcase := []TestHarness{
		{strs: []string{"Apple", "app", "application"}, expect: ""},
		{strs: []string{"HELLO", "HELP", "HELMET"}, expect: "HEL"},
		{strs: []string{"JavaScript", "javascript"}, expect: ""},
	}
	no_lcp := []TestHarness{
		{strs: []string{"abc", "def", "ghi"}, expect: ""},
		{strs: []string{"cat", "dog", "rabbit"}, expect: ""},
		{strs: []string{"12345", "54321"}, expect: ""},
	}
	unicode := []TestHarness{
		{strs: []string{"café", "café-au-lait"}, expect: "café"},
		{strs: []string{"résumé", "résultat"}, expect: "résu"},
		{strs: []string{"🍎apple", "🍎app", "🍎application"}, expect: "🍎app"},
	}
	tests_edge := append(empty, special...)
	tests_edge = append(tests_edge, ulcase...)
	tests_edge = append(tests_edge, no_lcp...)
	tests_edge = append(tests_edge, unicode...)
	suite_edge := "Empty strings, special/unicode chars, case sensitivity, no LCP"
	checkHarness(t, tests_edge, suite_edge)

	// Large input strings
	t.Run("large input strings", func(t *testing.T) {
		prefix, strs := buildLrgStrs()
		got := LongestCommonPrefix(strs)
		if got != prefix {
			t.Errorf(err_strf, strs, got, prefix)
		}
	})
}

// Benchmark
func BenchmarkLongestCommonPrefix(b *testing.B) {
	strs := []string{"flower", "flow", "flight"}

	for b.Loop() {
		LongestCommonPrefix(strs)
	}

	_, strs_lrg := buildLrgStrs()

	for b.Loop() {
		LongestCommonPrefix(strs_lrg)
	}
}

func buildLrgStrs() (string, []string) {
	prefix := strings.Repeat("a", 1000)

	strs := []string{
		prefix + "xyz",
		prefix + "123",
		prefix + "abc",
	}

	return prefix, strs
}
