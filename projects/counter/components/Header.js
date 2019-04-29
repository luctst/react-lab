import React from "react";
import styled from "styled-components";

/**
 * Styled-components
 */
const GetHeader = styled.header.attrs({
	className: "container mb-3"
})``;
const GetRow = styled.div.attrs({
	className: "row"
})``;
const GetCol = styled.div.attrs({
	className: "col-12"
})``;

const Header = React.memo(() => {
	return (
		<GetHeader>
			<GetRow>
				<GetCol>
					<h1>Counter test with react-redux</h1>
					<hr/>
				</GetCol>
			</GetRow>
		</GetHeader>
	)
});

export default Header;
