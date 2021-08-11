import React from 'react';
import {
	Container,
	FormWrap,
	Icon,
	FormContent,
	Form,
	FormH1,
	FormLabel,
	FormInput,
	FormButton,
	Text,
} from './ScheduleCallElements';

const ScheduleCall = () => {
	return (
		<>
			<Container>
				<FormWrap>
					<Icon to='/'>BIZDigital</Icon>
					<FormContent>
						<Form action='#'>
							<FormH1>Request a callback</FormH1>
							<FormLabel htmlFor='for'>Phone Number</FormLabel>
							<FormInput type='phone' required />
							<FormLabel htmlFor='for'>Name</FormLabel>
							<FormInput type='text' required />
							<FormLabel type='tex' />
							<FormButton type='submit'>Submit</FormButton>
							<Text>Contact us: +46 760 718 144</Text>
							<Text>Email: info@bizdigitalvision.com</Text>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</>
	);
};

export default ScheduleCall;
