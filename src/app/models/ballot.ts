import { Choice } from "./choice";

export class Ballot {
    name: string;
    chosenBestGames: Choice[];
    chosenBestRemasters: Choice[];
    chosenBiggestDisappointments: Choice[];
    chosenBiggestSurprises: Choice[];
    chosenMostAnticipated: Choice[];
}