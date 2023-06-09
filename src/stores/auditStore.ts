import { writable } from 'svelte/store';
import type { AuditForm } from '../models/AuditForm';

const auditQuestions: AuditForm = {
	currentLocation: 'overview',
	currentQuestionIndex: 0,
	categories: [
		{
			code: 'social',
			name: 'AUDIT_CATEGORY_SOCIAL',
			color: '#E26D5A',
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
			color: '#3AA89B',
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
			color: '#E26D5A',
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
			color: '#3AA89B',
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
