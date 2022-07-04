import React from "react";
import { Card, WingBlank } from "@ant-design/react-native";
import { Image, View } from "react-native";
import { SafeAreaContainer } from "../../components/SafeAreaContainer";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";

import * as S from "./styles";
import { StatusIcon } from "./components/StatusIcon";

function Assets() {
  return (
    <SafeAreaContainer>
      <ScrollViewContainer>
        <S.TitleText>Ativos {"\n"} Empresa X | Unidade Y</S.TitleText>
        <WingBlank size="lg">
          <Card style={{ marginBottom: 15 }}>
            <Card.Header
              title="Motor H13D-1"
              extra={<StatusIcon status="inAlert" />}
            />
            <Card.Body>
              <View>
                <Image
                  source={{
                    uri: "https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg",
                  }}
                  style={{
                    width: "100%",
                    height: 200,
                    resizeMode: "cover",
                  }}
                />
              </View>
            </Card.Body>
            <Card.Footer content="70% de saúde" />
          </Card>
          <Card style={{ marginBottom: 15 }}>
            <Card.Header
              title="Ventilador D22"
              extra={<StatusIcon status="InDowntime" />}
            />
            <Card.Body>
              <View>
                <Image
                  source={{
                    uri: "https://tractian-img.s3.amazonaws.com/2f7eb04cfa255ab00088534f7d51f6f4.jpeg",
                  }}
                  style={{
                    width: "100%",
                    height: 200,
                    resizeMode: "cover",
                  }}
                />
              </View>
            </Card.Body>
            <Card.Footer content="91.2% de saúde" />
          </Card>
          <Card style={{ marginBottom: 15 }}>
            <Card.Header
              title="Ventilador D21"
              extra={<StatusIcon status="inOperation" />}
            />
            <Card.Body>
              <View>
                <Image
                  source={{
                    uri: "https://tractian-img.s3.amazonaws.com/16fbd9f50d3c6cfca8c6c2bc834ac0f0.jpeg",
                  }}
                  style={{
                    width: "100%",
                    height: 200,
                    resizeMode: "cover",
                  }}
                />
              </View>
            </Card.Body>
            <Card.Footer content="60% de saúde" />
          </Card>
        </WingBlank>
      </ScrollViewContainer>
    </SafeAreaContainer>
  );
}

export default Assets;
