export type UserType = {
   name: string;
   username: string;
   phonenumber: string;
   checkIn : "morning" | "midday" | "evening";
};


export type EntryType = {
  id: string;
  image: string;
  username: string;
  caption: string;
  likes: number;
  views: number;
  score: number
};


export type UploadType = {
  id?: string;
  fullname?: string;
  username: string;
  phonenumber?: string;
  imageUrl: string;
  caption?: string;
  confidencePoint?: number,
  confidenceReason?: string
  smilePoint?: number,
  smileReason?: string,
  creativityPoint?: number,
  creativityReason?: string
  totalPoint: number,
  createdAt?: Date,
  updatedAt?: Date
};




type confidenceType = {
    confidencePoint: number,
    confidenceReason: string
  };


  type smileType = {
    smilePoint: number,
    smileReason: string,
  }


  type creativityType = {
    creativityPoint: number,
    creativityReason: string
  }

  export type aiResultType = {
  confidence: confidenceType,
  smile: smileType,
  creativity: creativityType,
  totalPoints: number,
}