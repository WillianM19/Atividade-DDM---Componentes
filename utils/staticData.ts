import { ImageSourcePropType } from "react-native";

interface userElement {
    img: ImageSourcePropType;
    textContent: string;
    valueCount: number;
}

export const staticUserList: userElement[] = [
    {
        img: require('../assets/userPlaceholder.jpg'),
        textContent: 'Jonh Smith',
        valueCount: -164
      },
      {
        img: require('../assets/userPlaceholder.jpg'),
        textContent: 'Sarah Parker',
        valueCount: 203
      },
      {
        img: require('../assets/userPlaceholder.jpg'),
        textContent: 'Paul Allen',
        valueCount: 464
      },
      {
        img: require('../assets/userPlaceholder.jpg'),
        textContent: 'Terry Andrews',
        valueCount: -80
      },
      {
        img: require('../assets/userPlaceholder.jpg'),
        textContent: 'Andy Vitale',
        valueCount: -230
      },
      {
        img: require('../assets/userPlaceholder.jpg'),
        textContent: 'Katy Friedson',
        valueCount: 160
      }
];