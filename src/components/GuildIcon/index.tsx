import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
    const uri = 'https://blackwhitepet.com.br/resources/img/cachorro-brincando-com-a-bolinha.jpg'

    return (
        <Image 
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    )
}