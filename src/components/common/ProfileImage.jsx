import React from 'react';
import styled from 'styled-components';
import { black, body1, fadedBlue } from '../../styles/variables';

const ProfileImage = ({ name, image }) => (
  <StyledImage>
    <div>
      <img src={image} alt="" />
    </div>
    <p>{name}</p>
  </StyledImage>
);

const StyledImage = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	div {
		border-radius: 50%;
		border: 3px solid ${fadedBlue};
		width: 5rem;
		height: 5rem;

		img {
			border-radius: inherit;
			width: inherit;
			height: inherit;
		}
	}

	p {
		text-align: center;
		color: ${black};
		font-size: ${body1};
		font-weight: 600;
	}
`;

export default ProfileImage;
