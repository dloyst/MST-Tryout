import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export const TileWrapper = styled.div`
  border: 1px solid black;
  width: 150px;
  height: 150px;
  margin: 16px;
`;

export const Tile = styled.div`
	height: 100%;
	width: 100%;
	color: white;
`;
