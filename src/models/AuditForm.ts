export interface AuditQuestion {
	question: string;
	type: 'range' | 'pick';
	isAnswered: boolean;
	pickedAnswer: string | null;
	answers?: string[];
}

export interface AuditCategory {
	code: string;
	name: string;
	color: string;
	questions: AuditQuestion[];
}

export interface AuditForm {
	currentLocation: string;
	currentQuestionIndex: number;
	categories: AuditCategory[];
}
