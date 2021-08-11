import React from 'react';
import Icon1 from '../../images/icon1.svg';
import Icon2 from '../../images/icon2.svg';
import Icon3 from '../../images/icon3.svg';
import Icon4 from '../../images/icon4.svg';
import Icon5 from '../../images/icon5.svg';
import Icon6 from '../../images/icon6.svg';
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
} from './ServicesElements';

const Services = () => {
	return (
		<ServicesContainer id='services'>
			<ServicesH1>Our Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Branding</ServicesH2>
					<ServicesP>
						Branding is one of the most crucial aspects of any business, large or small. An effective brand can give you
						a significant edge in today’s highly competitive market.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2} />
					<ServicesH2>Design</ServicesH2>
					<ServicesP>
						In today’s age of information overload, we’ve always been attracted to finding better ways to simplify the
						communication of heavy content.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} />
					<ServicesH2>Content</ServicesH2>
					<ServicesP>
						Digital storytelling is an integral part of establishing a brand visual. It is still the most engaging
						content a brand can leverage to connect with its audience..
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon4} />
					<ServicesH2>Strategy</ServicesH2>
					<ServicesP>
						A great brand strategy acts as a guiding light for the brand and all future communication, as well as an
						objective measure by which to evaluating work and making brand decisions.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon5} />
					<ServicesH2>Marketing</ServicesH2>
					<ServicesP>
						We deliver fully-integrated, proven digital marketing solutions. As your partner digital agency in New York,
						we are here to help support all your brands' digital needs.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon6} />
					<ServicesH2>Development</ServicesH2>
					<ServicesP>
						From prototype to the full-scale platform, we provide you with a dedicated, full-scale web development team
						that is specific to your business goals and technical needs.
					</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;
