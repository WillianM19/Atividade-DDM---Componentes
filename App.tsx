import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import Button from "./components/button";
import ListItem from "./components/listItem";
import { useState } from "react";
import { staticUserList } from "./utils/staticData";

export default function App() {
    const [userList, _setUserList] = useState(staticUserList)

    return (
        <AppBody>
            <Title>Growing</Title>
            <MainCard>
                <ViewUserinfo>
                    <ViewImageContent>
                        <Image
                            source={require("./assets/userPlaceholder.jpg")}
                            style={{ width: 110, height: 110 }}
                        />
                    </ViewImageContent>
                    <TextUsername>Paul Allen</TextUsername>
                </ViewUserinfo>
                <Line />
                <ActionButtons>
                    <Button
                        bgColor="#DCDFE4"
                        fontColor="#404040"
                        textContent="View Profile"
                    />
                    <Button
                        bgColor="#529B69"
                        fontColor="white"
                        textContent="Add User"
                    />
                </ActionButtons>
            </MainCard>
            <ListContent>
                {userList.map((element) => (
                    <ListItem
                        img={element.img}
                        textContent={element.textContent}
                        valueCount={element.valueCount}
                    />
                ))

                }
            </ListContent>
            <StatusBar style="auto" />
        </AppBody>
    );
}

const ListContent = styled.View`
    margin: 16px;
    gap: 12px;
`;

const ActionButtons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 24px;
`;

const Line = styled.View`
    background-color: #8080802d;
    height: 2px;
    margin: 0 24px;
`;

const ViewUserinfo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
`;

const ViewImageContent = styled.View`
    background-color: gray;
    width: 110px;
    height: 110px;
    border-radius: 999px;
    margin-bottom: 12px;
    overflow: hidden;
`;

const AppBody = styled.View`
    background-color: #8080802b;
    height: 100%;
`;

const Title = styled.Text`
    margin-top: 40px;
    font-size: 34px;
    font-weight: 700;
    margin-left: 16px;
`;

const TextUsername = styled.Text`
    font-size: 34px;
    color: #443879;
    font-weight: 700;
`;

const MainCard = styled.View`
    background-color: red;
    margin-top: 40px;
    margin: 16px;
    border-radius: 8px;
    background-color: white;
`;
