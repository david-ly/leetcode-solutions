package solutionLCP

func LongestCommonPrefix(strs []string) string {
	/* String Builder Approach */
	// if len(strs) == 0 {
	// 	return ""
	// }
	// pre_cand := strs[0]
	// if len(strs) == 1 {
	// 	return pre_cand
	// }

	// var sb strings.Builder
	// for i := range len(pre_cand) {
	// 	char := pre_cand[i]
	// 	for _, str := range strs[1:] {
	// 		if i >= len(str) || str[i] != char {
	// 			return sb.String()
	// 		}
	// 	}
	// 	sb.WriteByte(char)
	// }
	// return sb.String()

	if len(strs) == 0 {
		return ""
	}

	for i := range strs[0] {
		char := strs[0][i]
		for _, str := range strs[1:] {
			if i >= len(str) || str[i] != char {
				return strs[0][:i]
			}
		}
	}
	return strs[0]
}
