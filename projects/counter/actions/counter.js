export const ADD = () => {
	return {
		type: "ADD"
	}
}

export const DECREMENT = () => {
	return {
		type: "DECREMENT"
	}
}

export const ADD_WITH = number => {
	return {
		type: "ADD_WITH",
		number
	}
}

export const DECREMENT_WITH = number => {
	return {
		type: "DECREMENT_WITH",
		number
	}
}
