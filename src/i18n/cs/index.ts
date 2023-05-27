import type { BaseTranslation } from '../i18n-types.js';

const baseCs: BaseTranslation = {
	PAGE_TITLE: 'Můj životní audit',
	BRAND_CLAIM:
		'Převezměte kontrolu nad svým životem a vytvořte si budoucnost, kterou si přejete.',
	BUTTON_AUDIT_NOW: 'Začněte auditovat hned!',
	NAV_ABOUT: 'O projektu',
	NAV_CONTACT: 'Kontakt',
	NAV_RESOURCES: 'Zdroje',
	NAV_JOIN_US: 'Přidejte se k nám',
	ABOUT_TITLE: 'O nás',
	ABOUT_CONTENT:
		'Pokud máte pocit, že potřebujete provést životní audit, uvědomíte si, že jste to měli udělat už dávno. Ale není nikdy příliš pozdě převzít kontrolu nad svým životem. Naše mise je poskytnout vám komplexní vyhodnocení vašeho života a praktické doporučení pro zlepšení. S naším odborným vedením můžete získat cenné poznatky o různých aspektech svého života, jako je zdraví, vztahy, kariéra a osobní růst. Naším cílem je umožnit vám činit informovaná rozhodnutí a podnikat kroky směrem k šťastnějšímu, zdravějšímu a plnějšímu životu.',
	JOIN_US_TITLE: 'Přidejte se k nám',
	JOIN_US_CONTENT:
		'Přidejte se do naší komunity a staňte se součástí něčeho smysluplného. Pomáhejte vytvářet něco, co prospívá ostatním a pozitivně ovlivňuje jejich životy. Přispějte k významnému projektu. Můžete pomáhat ostatním poskytováním cenných poznatků a podpory prostřednictvím naší platformy. Zlepšete kvalitu svého života. Můžete zlepšit svůj vlastní život tím, že se budete věnovat koníčku nebo aktivitě, která podporuje váš osobní růst a potkáte nové lidi se stejnými zájmy. Učte se od ostatních. Můžete se učit od ostatních pomocí pomoci a rad na různých aspektech života.',
	JOIN_US_CONTRIBUTE: 'Přispějte k významnému projektu',
	JOIN_US_CONTRIBUTE_DESCRIPTION:
		'Můžete pomáhat ostatním poskytováním cenných poznatků a podpory prostřednictvím naší platformy.',
	JOIN_US_IMPROVE_LIFE: 'Zlepšete kvalitu svého života',
	JOIN_US_IMPROVE_LIFE_DESCRIPTION:
		'Můžete zlepšit svůj vlastní život tím, že se budete věnovat koníčku nebo aktivitě, která podporuje váš osobní růst a potkáte nové lidi se stejnými zájmy.',
	JOIN_US_LEARN_FROM_OTHERS: 'Učte se od ostatních',
	JOIN_US_LEARN_FROM_OTHERS_DESCRIPTION:
		'Můžete se učit od ostatních pomocí pomoci a rad na různých aspektech života.',
	CONTACT_FORM_TITLE: 'Kontaktujte nás',
	CONTACT_FORM_SUBMIT: 'Odeslat',
	CONTACT_FORM_NAME: 'Jméno',
	CONTACT_FORM_EMAIL: 'Email',
	CONTACT_FORM_MESSAGE: 'Zpráva',
	FOOTER_TOS: 'Podmínky služby',
	FOOTER_PRIVACY: 'Zásady ochrany osobních údajů',
	FOOTER_CONTACT: 'Kontaktujte nás',
	DROPDOWN_PROFILE_SIGN_OUT: 'Odhlásit se',
	SIGN_IN_TITLE: 'Přihlášení',
	DROPDOWN_PROFILE_HISTORY: 'Moje historie',
};

const auditQuestionare: BaseTranslation = {
	AGE:{question:"How old are you?",type:"numInput"}
}

const cs = {...baseCs,...auditQuestionare}
export default cs;
