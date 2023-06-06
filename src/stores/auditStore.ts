import { writable } from 'svelte/store';

const auditQuestionare = {
	currentLocation: 'overview',
	currentQuestionIndex: 0,
	categories: [
		{
			code: 'social',
			name: 'QUESTIONARE_SOCIAL',
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
			name: 'QUESTIONARE_DIGITAL',
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
			name: 'QUESTIONARE_LIFESTYLE',
			questions: [
				{
					question: 'Sleep quality?',
					type: 'range',
					isAnswered: false,
					pickedAnswer: null,
				},
			],
		},
		{
			code: 'mental',
			color: '#00FF00',
			name: 'QUESTIONARE_MENTAL',
			questions: [
				{
					question: 'Sleep quality?',
					type: 'range',
					isAnswered: false,
					pickedAnswer: null,
				},
			],
		},
	],
};

const { subscribe, set, update } = writable(auditQuestionare);
export default {
	subscribe,
	set,
	update,
};
