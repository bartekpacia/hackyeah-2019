export interface IUser {
  status: string;
  currentUser: {
    level: number,
    streak: number,
    email: string,
    pkpPoints: number,
    lastName: string,
    correctQuestionSum: number,
    inCorrectQuestionSum: number,
    firstName: string,
    id: string
  };
}
