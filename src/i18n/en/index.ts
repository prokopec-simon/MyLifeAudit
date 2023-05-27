import type { BaseTranslation } from '../i18n-types';

const en: BaseTranslation = {
	PAGE_TITLE: 'My Life Audit',
	BRAND_CLAIM:
		'Take back charge of your life and create the future you desire.	',
	BUTTON_AUDIT_NOW: 'Start an audit now!',
	NAV_ABOUT: 'About',
	NAV_CONTACT: 'Contact',
	NAV_RESOURCES: 'Sources',
	NAV_JOIN_US: 'Join us',
	ABOUT_TITLE: 'About Us',
	ABOUT_CONTENT:
		"If you feel like you need to do a Life Audit, you'll realize that you should have done this a long time ago. Well, it's never too late to retake control of your life. Our mission is to provide you with a comprehensive evaluation of your life and actionable recommendations for improvement. With our expert guidance, you can gain valuable insights into various aspects of your life, such as health, relationships, career, and personal growth. Our goal is to empower you to make informed decisions and take steps towards a happier, healthier, and more fulfilling life.",
	JOIN_US_TITLE: 'Join Us',
	JOIN_US_CONTENT:
		'Join our community and be a part of something meaningful. Help create something that benefits others and makes a positive impact on their lives. Contribute to a meaningful project. You can help others by providing valuable insights and support through our platform. Improve your life quality. You can improve your own life by engaging in a hobby or activity that enhances your personal growth and meet new people with similar interests. Learn from others. You can learn from others by receiving help and guidance on various aspects of life.',
	JOIN_US_CONTRIBUTE: 'Contribute to meaningful project',
	JOIN_US_CONTRIBUTE_DESCRIPTION:
		'You can help others by providing valuable insights and support through our platform.',
	JOIN_US_IMPROVE_LIFE: 'Improve your life quality',
	JOIN_US_IMPROVE_LIFE_DESCRIPTION:
		'You can improve your own life by engaging in a hobby or activity that enhances your personal growth and meet new people with similar interests.',
	JOIN_US_LEARN_FROM_OTHERS: 'Learn from others',
	JOIN_US_LEARN_FROM_OTHERS_DESCRIPTION:
		'You can learn from others by receiving help and guidance on various aspects of life.',
	log: `This log was called from '{fileName:string}'`,
	CONTACT_FORM_TITLE: 'Contact Us',
	CONTACT_FORM_SUBMIT: 'Send',
	CONTACT_FORM_NAME: 'Name',
	CONTACT_FORM_EMAIL: 'Email',
	CONTACT_FORM_MESSAGE: 'Message',
	FOOTER_TOS: 'Terms of Service',
	FOOTER_PRIVACY: 'Privacy Policy',
	FOOTER_CONTACT: 'Contact Us',
	DROPDOWN_PROFILE_SIGN_OUT: 'Sign Out',
	SIGN_IN_TITLE: 'Sign In',
	DROPDOWN_PROFILE_HISTORY: 'My story',
};

const auditQuestionare: BaseTranslation = {
	AGE:{question:"How old are you?",type:"numInput"}
}

export default {...en, ...auditQuestionare};
