import React from 'react';
import PropTypes from 'prop-types';
import SocialIcon from "../footer/social-icon"
import {
	FacebookShareButton,
	LinkedinShareButton,
	WhatsappShareButton,
	RedditShareButton,
} from 'react-share';

import './Shares.scss';

const Shares = ({ socialConfig }) => (
	<div className="post-social">
		<FacebookShareButton url={socialConfig.config.url} className="button is-outlined is-rounded facebook" >
			<span className="icon">
            <SocialIcon name="facebook" className="w-6 h-6" />
				{/* <FontAwesomeIcon icon={['fab', 'facebook-f']} /> */}
			</span>
			<span className="text">Facebook</span>
		</FacebookShareButton>
		{/* <TwitterShareButton url={socialConfig.config.url} className="button is-outlined is-rounded twitter" title={socialConfig.config.title}  hashtags={tags} >
			<span className="icon">
            <SocialIcon name="facebook" className="w-6 h-6" />
			</span>
			<span className="text">Twitter</span>
		</TwitterShareButton> */}
		{/* <GooglePlusShareButton url={socialConfig.config.url} className="button is-outlined is-rounded googleplus" >
			<span className="icon">
			<SocialIcon name="facebook" className="w-6 h-6" />
			</span>
			<span className="text">Google+</span>
		</GooglePlusShareButton> */}
		<LinkedinShareButton url={socialConfig.config.url} className="button is-outlined is-rounded linkedin" title={socialConfig.config.title} >
			<span className="icon">
            <SocialIcon name="facebook" className="w-6 h-6" />
			</span>
			<span className="text">LinkedIn</span>
		</LinkedinShareButton>
		<RedditShareButton url={socialConfig.config.url} className="button is-outlined is-rounded reddit" title={socialConfig.config.title} >
			<span className="icon">
			<SocialIcon name="facebook" className="w-6 h-6" />
			</span>
			<span className="text">Reddit</span>
		</RedditShareButton>
		<WhatsappShareButton url={socialConfig.config.url} className="button is-outlined is-rounded whatsapp" title={socialConfig.config.title} >
			<span className="icon">
            <SocialIcon name="facebook" className="w-6 h-6" />
			</span>
			<span className="text">WhatsApp</span>
		</WhatsappShareButton>
	</div>
);

Shares.propTypes = {
	socialConfig: PropTypes.shape({
		twitterHandle: PropTypes.string.isRequired,
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
};
Shares.defaultProps = {
	tags: [],
};

export default Shares;