export type ApplicationConfig = {
	telegram: {
		token: string;
	};
	gcp: {
		projectId: string;
		credentialsPath: string;
	};
};

export const ApplicationConfig: ApplicationConfig = {
	telegram: {
		token: process.env.BOT_TOKEN ?? '',
	},
	gcp: {
		projectId: process.env.GOOGLE_PROJECT_ID ?? '',
		credentialsPath: process.env.GOOGLE_APPLICATION_CREDENTIALS ?? '',
	},
};
