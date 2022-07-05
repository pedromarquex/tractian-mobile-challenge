import React from "react";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";
import * as S from "./styles";

function AssetDetail(): JSX.Element {
  return (
    <S.SafeAreaContainer>
      <ScrollViewContainer>
        <S.AssetImage
          source={{
            uri: "https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg",
          }}
        />
        <S.TitleText>Nome do ativo</S.TitleText>
      </ScrollViewContainer>
    </S.SafeAreaContainer>
  );
}

export default AssetDetail;
