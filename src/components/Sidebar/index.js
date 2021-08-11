import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SidebarRoute,
	SideBtnWrap,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='about' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
						About
					</SidebarLink>
					<SidebarLink to='discover' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
						Discover
					</SidebarLink>
					<SidebarLink to='services' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
						Services
					</SidebarLink>
					<SidebarLink
						to='contact-us'
						onClick={toggle}
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						offset={-80}>
						Contact Us
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to='/schedule-call'>Schedule a call</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;