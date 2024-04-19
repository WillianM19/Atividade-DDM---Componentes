import styled from "styled-components/native";
import { Text } from "react-native";

interface ButtonProps {
    textContent: string;
    bgColor: string;
    fontColor: string;
    width?: number;
    onPress?: () => void;
}

export default function Button({
    textContent,
    onPress,
    bgColor,
    fontColor,
    width,
}: ButtonProps) {
    return (
        <SButton bgColor={bgColor} onPress={onPress} width={width}>
            <ButtonText fontColor={fontColor}>{textContent}</ButtonText>
        </SButton>
    );
}

const SButton = styled.TouchableOpacity<{ bgColor: string, width?: number }>`
    width: ${({ width }) => (width ? width : "130px")};
    height: 40px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;

    background-color: ${({ bgColor }) => bgColor};
`;

const ButtonText = styled.Text<{ fontColor: string }>`
    font-size: 14px;
    color: ${({ fontColor }) => fontColor};
`;
