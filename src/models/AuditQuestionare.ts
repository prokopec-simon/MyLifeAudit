export interface AuditQuestionare {
	currentLocation: string;
	categories: Category[];
}

export interface Category {
	code: string;
	name: string;
	color: string;
	questions: Question[];
}

export interface Question {
	question: string;
	type: string;
	answers?: string[];
	isAnswered: boolean;
}
