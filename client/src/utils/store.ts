// import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware";
// import type {} from "@redux-devtools/extension"; // required for devtools typing

// type jobNumber = [string, number];
// type player = { id: string; name: string; job: string };

// type GameCreationState = {
//   playerCount: number | "unset";
//   setPlayerCount: (at: number) => void;
//   jobDistribution: jobNumber[];
//   setJobDistribution: (to: jobNumber) => void;
// };

// // const useDGameStore = create<DGameState>()(
// //   devtools(
// //     persist(
// //       (set) => ({
// //         playerCount: 1,
// //         setPlayerCount: (at: number) => {
// //           set({ playerCount: at });
// //         },
// //       }),
// //       {
// //         name: "bear-storage",
// //       },
// //     ),
// //   ),
// // );
