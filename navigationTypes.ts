import { Boarding } from "@/src/models/Boarding";

export type StackParamList = {
  BoardingScreen: undefined; // No parameters for BoardingScreen
  BoardingDetailsScreen: { boarding: Boarding }; // Parameters for BoardingDetailsScreen
};
