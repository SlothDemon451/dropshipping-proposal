// import { Icon } from "next/dist/lib/metadata/types/metadata-types";

// declare global {
//   interface Window {
//     google: {
//       translate: {
//         TranslateElement: new (options: {
//           pageLanguage: string;
//           layout: TranslateElementLayout;
//         }, elementId: string) => {
//           getInstance: () => {
//             setEnabled: (enabled: boolean) => void;
//             setLanguage: (language: string) => void;
//           };
//         };
//         InlineLayout: {
//           SIMPLE: number;
//           HORIZONTAL: number;
//         };
//       };
//     };
//   }

//   // Define the layout options
//   type TranslateElementLayout = {
//     SIMPLE: string;
//     HORIZONTAL: string;
//   };

//   interface TranslateElementLayout {
//     SIMPLE: string;
//     HORIZONTAL: string;
//   }

//   interface Window {
//     googleTranslateElementInit: () => void;
//   }
// }

// export {}; 