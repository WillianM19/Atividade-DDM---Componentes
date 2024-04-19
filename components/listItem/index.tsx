import styled from "styled-components/native";
import { Text, Image, ImageSourcePropType } from "react-native";
import Button from "../button";

interface ListItemProps {
    img: ImageSourcePropType;
    textContent: string;
    valueCount: number;
}

export default function ListItem({
    img,
    textContent,
    valueCount,
}: ListItemProps) {
    return (
        <ListItemContainer>
            <ViewUserInfo>
                <ViewImageContent>
                    <Image source={img} style={{ width: 40, height: 40 }} />
                </ViewImageContent>
                <Text>{textContent}</Text>
            </ViewUserInfo>
            <ViewInfoAdd>
                <Button
                    bgColor={valueCount > 0 ? "#D9E7DA" : "#FAEADE"}
                    textContent={
                        valueCount > 0 ? `+${valueCount}` : `${valueCount}`
                    }
                    fontColor={valueCount > 0 ? "#007D00" : "#fd7171"}
                    width={70}
                />
                <UserPlusButton>
                    <ImageAddUser
                        source={require("../../assets/pplus.png")}
                    />
                </UserPlusButton>
            </ViewInfoAdd>
        </ListItemContainer>
    );
}
const ImageAddUser = styled.Image`
    width: 20px;
    height: 20px;
`;

const UserPlusButton = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    background-color: gray;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

const ViewInfoAdd = styled.View`
    flex-direction: row;
    gap: 8px;
    align-items: center;
`;

const ViewUserInfo = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 12px;
    color: #e7e9e8;
`;

const ListItemContainer = styled.View`
    border-radius: 12px;
    background-color: white;
    width: 100%;
    padding: 8px;
    justify-content: space-between;
    flex-direction: row;
`;

const ViewImageContent = styled.View`
    background-color: gray;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    overflow: hidden;
`;
