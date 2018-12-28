import { Choice } from "./choice";

export class Ballot {
    name: string;
    chosenBestGames: string[];
    chosenBestRemasters: string[];
    chosenBiggestDisappointments: string[];
    chosenBiggestSurprises: string[];
    chosenMostAnticipated: string[];
}

export class SingleBallot {
    username: string;
    ballotTypeId: number;
    firstPlace: string;
    secondPlace: string;
    thirdPlace: string;
    fourthPlace: string;
    fifthPlace: string;
    sixthPlace: string;
    seventhPlace: string;
    eighthPlace: string;
    ninthPlace: string;
    tenthPlace: string;

}