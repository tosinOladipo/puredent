CREATE TABLE "entry" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"fullname" varchar(255) NOT NULL,
	"username" varchar(255) NOT NULL,
	"phonenumber" varchar(255) NOT NULL,
	"imageUrl" varchar(255) NOT NULL,
	"caption" text NOT NULL,
	"confidencePoint" integer NOT NULL,
	"confidenceReason" text NOT NULL,
	"smilePoint" integer NOT NULL,
	"smileReason" text NOT NULL,
	"creativityPoint" integer NOT NULL,
	"creativityReason" text NOT NULL,
	"totalPoint" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
