import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { File, Paths } from "expo-file-system";

export type PlantType = {
  id: string;
  name: string;
  wateringFrequencyDays: number;
  lastWateredAtTimestamp?: number;
  imageUri?: string;
};

export type PlantAddType = {
  name: string;
  wateringFrequencyDays: number;
  imageUri?: string;
};

type PlantsState = {
  nextId: number;
  plants: PlantType[];
  addPlant: (plant: PlantAddType) => void;
  removePlant: (plantId: string) => void;
  waterPlant: (plantId: string) => void;
};

export const usePlantStore = create(
  persist<PlantsState>(
    (set) => ({
      plants: [],
      nextId: 1,
      addPlant: async (plant: PlantAddType) => {
        const hasImage = !!plant.imageUri;

        const imageName = plant.imageUri?.split("/").pop();
        console.log(`imageName: ${imageName}`);
        const fileName = `${new Date().getTime()}-${imageName}`;
        const destinationFile = new File(Paths.document, fileName);

        if (hasImage) {
          const sourceFile = new File(plant.imageUri!);
          await sourceFile.copy(destinationFile);

          console.log(
            `copying file from ${sourceFile.uri} to ${destinationFile.uri}`,
          );
        }

        return set((state) => {
          return {
            ...state,
            nextId: state.nextId + 1,
            plants: [
              {
                id: String(state.nextId),
                name: plant.name,
                wateringFrequencyDays: plant.wateringFrequencyDays,
                imageUri: hasImage ? destinationFile.uri : undefined,
              },
              ...state.plants,
            ],
          };
        });
      },
      removePlant: (plantId: string) => {
        return set((state) => {
          return {
            ...state,
            plants: state.plants.filter((plant) => plant.id !== plantId),
          };
        });
      },
      waterPlant: (plantId: string) => {
        return set((state) => {
          return {
            ...state,
            plants: state.plants.map((plant) => {
              if (plant.id === plantId) {
                return {
                  ...plant,
                  lastWateredAtTimestamp: Date.now(),
                };
              }
              return plant;
            }),
          };
        });
      },
    }),
    {
      name: "plantly-plants-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
