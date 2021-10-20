import React from "react";
import {Box, Container, Row, Column, FooterLink, Heading,} from "./FooterStyles";


const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Colaboradores</Heading>
			<FooterLink target="_blank" href="https://github.com/yolaluengo">Dully Luengo</FooterLink>
			<FooterLink target="_blank" href="https://github.com/jhonensow">Enyer Antoyma</FooterLink>
            <FooterLink target="_blank" href="https://github.com/isaacmayala">Isaac Mayala</FooterLink>
            <FooterLink target="_blank" href="https://github.com/maf17">Manuel Fuentes</FooterLink>
			<FooterLink target="_blank" href="https://github.com/chepina1976">Marglorys Marín</FooterLink>
		</Column>
		
		<Column>
			<Heading>Mais do Projeto</Heading>
			<FooterLink target="_blank" href="https://github.com/maf17/lista-de-contatos/">
			<i>
				<span style={{ marginLeft: "10px" }}>
				GitHub
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	<h1 style={{ color: "gray",
				textAlign: "center",
                fontStyle: "italic",
				marginTop: "-50px" }}>
		"Seja a mudança que você quer ver no mundo"
	</h1>
    <h2 style={{ color: "white",
                opacity:".7",
				textAlign: "center",
                fontSize: "20px",
                marginLeft: "550px",
				marginTop: "-10px" }}>
        Mahatma Gandhi
    </h2>
	</Box>
);
};
export default Footer; 