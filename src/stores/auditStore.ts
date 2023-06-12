import { writable } from 'svelte/store';

const auditQuestions = {
	currentLocation: 'overview',
	currentQuestionIndex: 0,
	categories: [
		{
			code: 'social',
			name: 'AUDIT_CATEGORY_SOCIAL',
			color: '#FF0000',
			questions: [
				{
					question: 'AUDIT_SOCIAL_01',
					type: 'range',
					pickedAnswer: null,
					isAnswered: false,
				},
				{
					question: 'AUDIT_SOCIAL_02',
					type: 'range',
					pickedAnswer: null,
					isAnswered: false,
				},
				{
					question: 'AUDIT_SOCIAL_03',
					type: 'range',
					pickedAnswer: null,
					isAnswered: false,
				},
				{
					question: 'AUDIT_SOCIAL_04',
					type: 'range',
					pickedAnswer: null,
					isAnswered: false,
				},
			],
		},
		{
			code: 'digital',
			name: 'AUDIT_CATEGORY_DIGITAL',
			color: '#FFFF00',
			questions: [
				{
					question: 'AUDIT_DIGITAL_01',
					type: 'pick',
					answers: ['not a lot', 'a lot'],
					isAnswered: false,
					pickedAnswer: null,
				},
			],
		},
		{
			code: 'lifestyle',
			color: '#0000FF',
			name: 'AUDIT_CATEGORY_LIFESTYLE',
			questions: [
				{
					question: 'AUDIT_LIFESTYLE_01',
					type: 'range',
					isAnswered: false,
					pickedAnswer: null,
				},
			],
		},
		{
			code: 'mental',
			color: '#00FF00',
			name: 'AUDIT_CATEGORY_MENTAL',
			questions: [
				{
					question: 'AUDIT_MENTAL_01',
					type: 'range',
					isAnswered: false,
					pickedAnswer: null,
				},
			],
		},
	],
};

const { subscribe, set, update } = writable(auditQuestions);
export default {
	subscribe,
	set,
	update,
};
