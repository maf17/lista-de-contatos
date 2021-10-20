import styled from 'styled-components';

export const Box = styled.div`
padding: 30px 60px 70px 0px;
background: #343A40;
position: relative;
bottom: 0;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 500px;
	margin: 0 auto;
	padding: 0px 0px 80px 0px
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 10px;
margin-top: 50px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 25px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: blue;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
